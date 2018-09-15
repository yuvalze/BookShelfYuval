import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

export default function BookControl (props) {
        console.log('BookControl props');
        console.log(props);
        return (     
        <div className="book-shelf-changer">
            <select value={props.shelfValue} onChange={props.updateBookShelfControl}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
        </div>
        )
    }

BookControl.propType = {
    updateBookShelfControl : PropTypes.func.isRequired,
    shelfValue : PropTypes.string.isRequired
}
