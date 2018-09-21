import React from 'react'
import PropTypes from 'prop-types'
import BookControl from './BookControl'
import './App.css'

export default class BookItem extends React.Component {

    constructor() {
        super();
        this.updateBookShelfControl = this.updateBookShelfControl.bind(this);
    }

    updateBookShelfControl(event) {
        this.props.updateBookShelf(this.props.oneBookObjData, event.target.value);
    };
    
    render() {
        const backgroundImageUrl = (this.props.oneBookObjData.imageLinks||{}).thumbnail;
        const backgroundImageValue = backgroundImageUrl ? `url(${this.props.oneBookObjData.imageLinks.thumbnail})` : undefined;
        return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: backgroundImageValue}}></div>
          <BookControl 
            updateBookShelfControl = {this.updateBookShelfControl} 
            shelfValue = {this.props.oneBookObjData.shelf}/>
        </div>
        <div className="book-title">{this.props.oneBookObjData.title}</div>
        <div className="book-authors">{(this.props.oneBookObjData.authors || [''])[0]}</div>
        </div>
        )
    }
}

BookItem.propType = {
    updateBookShelf : PropTypes.func.isRequired,
    oneBookObjData : PropTypes.object.isRequired
}
