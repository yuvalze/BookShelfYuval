import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import './App.css'

export default function BookShelf (props) {
  return ( 
    <div className="bookshelf-books">
      <ol className="books-grid">
      {Array.isArray(props.booksArr) &&
      (props.booksArr).map(oneBookObj => 
        <li key={oneBookObj.id}>
          <BookItem 
            oneBookObjData = {oneBookObj}
            updateBookShelf={props.updateBookShelf}/>
        </li>)}
      </ol>
    </div>
    )
}

BookShelf.propType = {
  booksArr : PropTypes.array.isRequired,
  updateBookShelf : PropTypes.func.isRequired
}
