import React from 'react'
import BookShelf from'./BookShelf'
import './App.css'

export default class MyReads extends React.Component {
    render () {
        return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookShelf/>
        </div>
        )
      }
}

MyReads.propType = {
  booksArr : PropTypes.array.isRequired
}