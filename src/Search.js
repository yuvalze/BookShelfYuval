import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import debounce from 'lodash/debounce'; // use debounce from lodash
import './App.css'

export default class Search extends React.Component {
    state = {
        searchBooks : []
    }

    componentDidMount() {
        this.setBookSearchResult(''); // pass an empty string as previous text query, in order to get the qeury if text query exists.
        this.setBookSearchResult = debounce(this.setBookSearchResult, 500);
    }

    componentDidUpdate(prevProps, prevState) {
        this.setBookSearchResult(prevProps.textSearchQuery);
    }

    setBookSearchResult(prevSearchQuery) {
        if (prevSearchQuery !== this.props.textSearchQuery) {
            //In case the input text is empty, set an empty books array result.
            if (!this.props.textSearchQuery) {
                this.setState(
                    {searchBooks : []}
                );
            }
            else {
                BooksAPI.search(this.props.textSearchQuery)
                .then(searchBooks => {
                    if (Array.isArray(searchBooks)) {
                        this.setState(
                            {searchBooks}
                        ) 
                    }
                    else {
                        // Search result error
                        this.setState(
                            {searchBooks : []}
                        );
                    }
                }).catch(() => {
                    //In case of search error result, set an empty books array result.
                    this.setState(
                        {searchBooks : []}
                    );
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
        (this.state.searchBooks||[]).forEach (searchBookItemObj => {
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
                            value={this.props.textSearchQuery}
                            placeholder="Search by title or author"
                            onChange={event => {
                                this.props.updateTextQueryState(event.target.value)
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
    updateBookShelf : PropTypes.func.isRequired, // update the book shelf function
    updateTextQueryState : PropTypes.func.isRequired, // function to update the text qeury state.
    booksOnShelfArr : PropTypes.array.isRequired, // array data of the books on shelf
    textSearchQuery : PropTypes.string // text to search, it store on the parents in order to keep the value across navigation.
}