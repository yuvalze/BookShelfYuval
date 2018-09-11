import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import './App.css'

export default class BooksShelf extends React.Component {
    render () {
      return (
      <div className="bookshelf-books">
        <ol className="books-grid">
        {(this.props.booksArr || []).map((oneBook, index) => 
          <li>
            <BookItem 
              key = {index}
              imageLink = {oneBook.imageLinks.thumbnail}
              author = {oneBook.authors[0]}
              title = {oneBook.title}/>
        </li>)}
        </ol>
      </div>
      )
    }
}

BooksShelf.propType = {
  booksArr : PropTypes.array.isRequired
}
