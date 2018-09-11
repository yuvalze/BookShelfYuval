import React from 'react'
import PropTypes from 'prop-types'
import BookControl from './BookControl'
import './App.css'

export default class BookItem extends React.Component {
    state ={
        bookShelf : 'none'
    };
    render() {
        console.log('BookItem props');
        console.log(this.props);
        return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLink})` }}></div>
          <BookControl setBookShelf={()=>{}}/>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
        </div>
        )
    }
}

BookItem.propType = {
    imageLink : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}
