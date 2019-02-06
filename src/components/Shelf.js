import React from 'react';
import Book from './Book'
// import PropTypes from 'prop-types';

class Shelf extends React.Component {

  //propTypes as used in sample contacts app!
  // static propTypes = {
  //   shelfTitle: PropTypes.string.isRequired,
  //   booksArray: PropTypes.array.isRequired
  // }

  render(){
    
    let shelfTitle = this.props.title;
    let booksArray = this.props.books;

    return (

      <div className= 'bookshelf'>
        <h2 className= 'bookshelf-title'>{`${shelfTitle}`}</h2>
        <div className= 'bookshelf-books'>
          <ol className= 'books-grid'>
          {/* books go into shelves*/}
            {booksArray.map((book) => (
              <Book
                id= {book.id}
                key= {book.id}
                title= {book.title}
                author= {book.authors}
                image= {book.imageLinks ? book.imageLinks.thumbnail: 'placeholder.jpg'}//adding check for empty thumbnail
                shelf= {book.shelf}
                onUpdateShelf= {(shelf) => 
                  {this.props.onUpdateShelf(book.id,shelf)}
                }
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default Shelf