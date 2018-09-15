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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((allBooks) => {
        this.setState(() => ({
          allBooks
        }))
      })
  }

  render() {
    console.log('books');
    console.log(this.state.allBooks);
    return (
      <div className="app">
          <div>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/" render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                      <CurrentlyRead booksArr={(this.state.allBooks || []).filter(oneBookFilter => oneBookFilter.shelf === 'currentlyReading')}/>
                  </div>
                  <div>
                      <WantToRead booksArr={(this.state.allBooks || []).filter(oneBookFilter => oneBookFilter.shelf === 'wantToRead')}/>
                  </div>
                  <div>
                      <Read booksArr={(this.state.allBooks || []).filter(oneBookFilter => oneBookFilter.shelf === 'read')}/>
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
