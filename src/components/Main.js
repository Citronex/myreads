import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf'


class Main extends React.Component {

  render(){

    let {shelves, books} = this.props

    //are shelves rendering correctly?
    console.log('shelves', this.props)

    return (

      <div className= 'list-books'>
        <div className= 'list-books-title'>
          <h1>My Reads</h1>
        </div>
        <div className= 'list-books-content'>
          <div>
            {/* Adding the shelves  */}
            {shelves.map((shelf)=> (
              <Shelf
                key= {shelf.heading}
                title= {shelf.heading}
                books= {books.filter((book) =>
                  book.shelf === shelf.name)} //taken from tutorial contacts app
                onUpdateShelf= {(id,shelf) => {
                  this.props.onUpdateShelf(id,shelf)
                }}
              />
            ))
            }
          </div>
        </div>
        {/*search page using React Router Link component*/}
        <div className="open-search">
          <Link to="/myreads/search"> Add a book</Link>
        </div>
      </div>
    )
  }
}
export default Main