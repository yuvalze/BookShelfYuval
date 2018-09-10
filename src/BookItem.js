import React from 'react'
import PropTypes from 'prop-types'
import BookControl from './BookControl'
import './App.css'

export default class BookItem extends React.Component {
    state ={
        bookShelf : 'none'
    };
    render() {
        return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '`url(${this.props.bookUrl})`' }}></div>
          <BookControl setBookShelf={()=>{}}/>
        </div>
        <div className="book-title">To Kill a Mockingbird</div>
        <div className="book-authors">Harper Lee</div>
        </div>
        )
    }
}

BookItem.propType = {
    bookUrl : PropTypes.string.isRequired
}
