import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './css/index.css'

/*For React Router to work properly, wraping the
entire app in a BrowserRouter component*/
ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root')
)
