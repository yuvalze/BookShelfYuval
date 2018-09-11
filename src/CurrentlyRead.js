import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from'./BookShelf'
import './App.css'

export default class CurrentlyRead extends React.Component {  
    render () {
      console.log('CurrentlyRead booksArr=');
      console.log(this.props.booksArr);
        return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookShelf 
          booksArr={this.props.booksArr}/>
        </div>
        )
      }
}

CurrentlyRead.propType = {
  booksArr : PropTypes.array.isRequired
}