import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import './App.css'

export default class BooksShelf extends React.Component {
    render () {
      console.log('BooksShelf props');
      console.log(this.props);
      return (
      <div className="bookshelf-books">
        <ol className="books-grid">
        {(this.props.booksArr || []).map((oneBook, index) => 
          <li key={index}>
            <BookItem 
              oneBookObjData = {oneBook}
              updateBookShelf={this.props.updateBookShelf}/>
          </li>)}
        </ol>
      </div>
      )
    }
}

BooksShelf.propType = {
  booksArr : PropTypes.array.isRequired,
  updateBookShelf : PropTypes.func.isRequired
}
