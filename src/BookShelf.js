import React from 'react'
import Book from './Book'
import './App.css'

export default class BooksShelf extends React.Component {
    state = {
        bookOnShelfArr : [] 
    };
    render () {
      return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book/>
            </li>
          </ol>
        </div>
      </div>
      )
    }
}