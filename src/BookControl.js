import React from 'react'
import PropTypes from 'prop-types'
import './App.css'


export default function BookControl(props) {
    return  (      
     <div className="book-shelf-changer">
        <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        </select>
    </div>
    )
  }

BookControl.prototype = {
    setBookShelf : PropTypes.func.isRequired
}