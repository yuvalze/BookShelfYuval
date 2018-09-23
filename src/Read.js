import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from'./BookShelf'
import './App.css'

export default function Read (props) {
  return (  
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <BookShelf 
        booksArr={props.booksArr}
        updateBookShelf={props.updateBookShelf}/>
    </div>
  )
}
    
  Read.propType = {
    booksArr : PropTypes.array.isRequired,
    updateBookShelf : PropTypes.func.isRequired
  }