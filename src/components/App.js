import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../api/BooksAPI'
import '../css/App.css'
import Main from '../components/Main'
import Search from '../components/Search'

class App extends Component {
  state = {
    shelves :
    [{
      name: 'currentlyReading',
      heading: 'Currently Reading'
    },
    {
      name: 'wantToRead',
      heading: 'Want to Read'
    },
    {
      name: 'read',
      heading: 'Read'
    },],
    books: []
  }

//hook that is run right after the component is added to the DOM
  componentDidMount(){this.getAllBooks()}

//get all books: BooksAPI getall method
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })})
  }

//using update method from BooksAPI uses book id
  updateShelf = (id,shelf) => {
    BooksAPI.update({id}, shelf).then(()=> {
    this.getAllBooks()
    });
    }

//Use og Route and history taken directly from lesson's contact app
  render() {

    return (

      <div className= 'app'>
        <Route exact path='/myreads/' render= {() => (
            <Main
              books= {this.state.books}
              shelves= {this.state.shelves}
              onUpdateShelf= {this.updateShelf}
            />
          )}
        />
        <Route path= '/myreads/search' render = {({ history }) => (
            <Search
              books= {this.state.books}
              shelves= {this.state.shelves}
              onUpdateShelf= {(book,shelf) =>{
                  this.updateShelf(book,shelf)
                  history.push('/myreads/')
              }}
            />
          )} 
        />
      </div>
    )
  }
}
export default App