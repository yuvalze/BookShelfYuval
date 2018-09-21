import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import './App.css'

export default class Search extends React.Component {
    state = {
        textQuery : '',
        searchBooks : []
    }

    constructor() {
        super();
        console.log('Search constructor');
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.textQuery !== this.state.textQuery) {
            if (!this.state.textQuery) {
                this.setState(() => ({
                    searchBooks : []
                  }));
            }
            else {
                BooksAPI.search(this.state.textQuery)
                .then(searchBooks => {
                this.setState(() => ({
                    searchBooks
                }));
                });
            }
        }
    }

    render() {
        console.log('Search state');
        console.log(this.state);
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                    {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <input 
                            type="text" 
                            value={this.state.textQuery}
                            placeholder="Search by title or author"
                            onChange={event => {
                                this.setState({textQuery : event.target.value})
                            }}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf 
                        booksArr={this.state.searchBooks}
                        updateBookShelf={this.props.updateBookShelf}/>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    updateBookShelf : PropTypes.func.isRequired
}