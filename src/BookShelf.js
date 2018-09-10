import React from 'react'
import BookItem from './BookItem'
import './App.css'

export default class BooksShelf extends React.Component {
    state = {
        bookOnShelfArr : [] 
    };
    render () {
      return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <BookItem 
            bookUrl=
            "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"/>
          </li>
        </ol>
      </div>
      )
    }
}
