import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import './App.css'

export default class BooksShelf extends React.Component {
    render () {
      return (
      <div className="bookshelf-books">
        <ol className="books-grid">
        {Array.isArray(this.props.booksArr) &&
        (this.props.booksArr).map(oneBookObj => 
          <li key={oneBookObj.id}>
            <BookItem 
              oneBookObjData = {oneBookObj}
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
