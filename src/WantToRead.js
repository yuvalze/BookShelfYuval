import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from'./BookShelf'
import './App.css'

export default class WantToRead extends React.Component {
    render () {
        return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <BookShelf 
            booksArr={this.props.booksArr}/>
        </div>
        )
      }
}

WantToRead.propType = {
  booksArr : PropTypes.array.isRequired
}