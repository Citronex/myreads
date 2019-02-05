import React from 'react';

class Book extends React.Component {

  updateShelf = (e) => {
    this.props.onUpdateShelf(e.target.value)
  }

  render() {

    //cleaning up code with destructuring
    let {image, title, author} = this.props

    return (
      
      <li>
        <div className= 'book'>
          <div className= 'book-top'>
            <div className= 'book-cover' 
              style={{
                backgroundImage: `url("${image}")`,
                height: 170, //actual image size coming back
                width: 128
              }}>
            </div>
        <div className= 'book-shelf-changer'>
          <select onChange= {this.updateShelf} value= {this.props.shelf}>
            <option value= 'moveTo' disabled> Move to...</option>
            <option value= 'currentlyReading'>Currently Reading</option>
            <option value= 'wantToRead'>Want to Read</option>
            <option value= 'read'>Read</option>
            <option value= 'none'>None</option>
          </select>
        </div>
          </div>
          <div className= 'book-title'>{`${title}`}</div>
          <div className= 'book-authors'>{`${author}`}</div>
        </div>
      </li>
    )
  }
}
export default Book