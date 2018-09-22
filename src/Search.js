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
            //In case the input text is empty, set an empty books array result.
            if (!this.state.textQuery) {
                this.setState(() => (
                    {searchBooks : []}
                ));
            }
            else {
                BooksAPI.search(this.state.textQuery)
                .then(searchBooks => {
                    this.setState(() => (
                        {searchBooks}
                    ));
                }).catch(() => {
                    //In case of search error result, set an empty books array result.
                    console.log('search catch');
                    this.setState(() => (
                        {searchBooks : []}
                    ));
                })
            }
        }
    }

    /*
     Return Search array with their data on shelf.
    */
    getSearchBookWithShelfData () {
        // Set the book on shelf to key value object.
        const bookOnShelfIdToBookObj = {};
        (this.props.booksOnShelfArr || []).forEach(bookItemObj => {
            if (bookItemObj && bookItemObj.id) {
                bookOnShelfIdToBookObj[bookItemObj.id] = bookItemObj;
            }
        });

        // look for search book on shelf and put thier data.
        // If the book not on shelf leave its data as got it from search.
        let searchBookWithShelfDataArr = [];
        this.state.searchBooks.forEach (searchBookItemObj => {
            if (searchBookItemObj && searchBookItemObj.id !== undefined &&
                bookOnShelfIdToBookObj[searchBookItemObj.id] !== undefined && bookOnShelfIdToBookObj[searchBookItemObj.id].shelf) {
                    searchBookWithShelfDataArr.push(bookOnShelfIdToBookObj[searchBookItemObj.id]);
            }
            else {
                searchBookWithShelfDataArr.push(searchBookItemObj);
            }  
        })
        return searchBookWithShelfDataArr;
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
                        booksArr={this.getSearchBookWithShelfData ()}
                        updateBookShelf={this.props.updateBookShelf}/>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    updateBookShelf : PropTypes.func.isRequired,
    booksOnShelfArr : PropTypes.array.isRequired
}