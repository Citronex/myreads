import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import Shelf from '../components/Shelf'

class Search extends Component {

  state = {
    query: '',
    searched: []
  }

//idea from contacts app
//todo in future: figure out how to trim 2+ spaces only!
  updateQuery =(query) => {
    this.setState({query: query})
    this.searched(query);}

  //with the query entered
  searched = (query) => {
    //check if query exists
    console.log(query)
    if(query){
      //call the search API and use the returned data
      BooksAPI.search(query).then((searched) => {
        //if the response doesn't have an error
        if(!(searched.error)) {
          console.log(searched)
      /*iterate thru the response and assign book to 'none' or corresponding shelf */
          searched =  searched.map((returnedBook) => {
            returnedBook.shelf = 'none';
            this.props.books.forEach((bookInShelf) => {
              if(returnedBook.id === bookInShelf.id) {
                returnedBook.shelf = bookInShelf.shelf
              }
            })
            return returnedBook
          })
            this.setState({searched})
        } else {
          this.setState({searched: []})
        }})
  } else {
    this.setState({searched: []})
  }
}

  render() {

    const {query, searched} = this.state

    return (
      <div>
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link className= 'close-search' to= '/'>Close</Link>
            <div className= 'search-books-input-wrapper'>
              <input type= 'text'
                placeholder= 'Search by title or author'
                value= {query}
                onChange= {(e) => 
                  this.updateQuery(e.target.value)
                }
              />
            </div>
          </div>
          <div className= 'search-books-results'>
            <ol className= 'books-grid'>
              {query !== '' && searched.length > 0 && (
                <Shelf
                  title = "Result"
                  books={searched}
                  onUpdateShelf={(id, shelf) => {
                    this.props.onUpdateShelf(id, shelf)
                  }}
                />
                )}
              {query !== '' && searched.length === 0 && (
                <Shelf
                  title = "Books not Found"
                  books={[]}
                />
              )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default Search