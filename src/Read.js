import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from'./BookShelf'
import './App.css'

export default class Read extends React.Component {
    render () {
        console.log('Read booksArr=');
        console.log(this.props.booksArr);
          return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <BookShelf 
              booksArr={this.props.booksArr}
              updateBookShelf={this.props.updateBookShelf}/>
          </div>
          )
        }
  }
  
  Read.propType = {
    booksArr : PropTypes.array.isRequired,
    updateBookShelf : PropTypes.func.isRequired
  }