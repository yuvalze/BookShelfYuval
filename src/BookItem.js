import React from 'react'
import PropTypes from 'prop-types'
import BookControl from './BookControl'
import * as BooksAPI from './BooksAPI'
import './App.css'

export default class BookItem extends React.Component {

    constructor() {
        super();
        this.updateBookShelfControl = this.updateBookShelfControl.bind(this);
    }

    updateBookShelfControl(event) {
        BooksAPI.update(this.props.oneBookObjData, event.target.value).then(res => {
            console.log('updateBookShelfControl result');
            console.log(res);
        });
    }
    
    render() {
        console.log('BookItem props');
        console.log(this.props);
        return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.oneBookObjData.imageLinks.thumbnail})` }}></div>
          <BookControl 
            updateBookShelf = {this.updateBookShelfControl} 
            shelfValue = {this.props.oneBookObjData.shelf}/>
        </div>
        <div className="book-title">{this.props.oneBookObjData.title}</div>
        <div className="book-authors">{this.props.oneBookObjData.authors[0]}</div>
        </div>
        )
    }
}

BookItem.propType = {
    updateBookShelf : PropTypes.func.isRequired,
    oneBookObjData : PropTypes.object.isRequired
}
