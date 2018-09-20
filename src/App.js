import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import CurrentlyRead from './CurrentlyRead'
import WantToRead from './WantToRead'
import Read from './Read'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  constructor() {
    super();
    this.updateBookShelf = this.updateBookShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks => {
        this.setState(() => ({
          allBooks
        }));
      });
  }

  updateBookShelf(oneBookObjData, shelfValue) {
    BooksAPI.update(oneBookObjData, shelfValue).then(() =>
      BooksAPI.getAll().then(allBooks => {
        this.setState(() => ({
          allBooks
        }));
      })
    )
  }

  render() {
    return (
      <div className="app">
          <div>
            <Route exact path="/search" 
              component={Search}
              updateBookShelf = {this.updateBookShelf}/>
            <Route exact path="/" render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                      <CurrentlyRead 
                        booksArr={(this.state.allBooks || []).filter(oneBookFilter => oneBookFilter.shelf === 'currentlyReading')}
                        updateBookShelf={this.updateBookShelf}/>
                  </div>
                  <div>
                      <WantToRead 
                        booksArr={(this.state.allBooks || []).filter(oneBookFilter => oneBookFilter.shelf === 'wantToRead')}
                        updateBookShelf={this.updateBookShelf}/>
                  </div>
                  <div>
                      <Read 
                        booksArr={(this.state.allBooks || []).filter(oneBookFilter => oneBookFilter.shelf === 'read')}
                        updateBookShelf={this.updateBookShelf}/>
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}/>
          </div>
      </div>
    )
  }
}

export default BooksApp
