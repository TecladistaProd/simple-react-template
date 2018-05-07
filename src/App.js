//import modules
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'
import { Provider } from 'react-redux'

//import store
import store from './store'

//import components
import Header from './components/Header'

//import pages
import Post from './pages/Post'
import PostForm from './pages/PostForm'
import Home from './pages/Home'

//import style
import './style/main.sass'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
      <Router>
        <Provider store={store}>
          <div>
            <Header/>
            <div className='container'>
              <Route exact path='/' component={Home}/>
              <Route path='/posts' component={Post}/>
              <Route path='/sendpost' component={PostForm}/>
            </div>
          </div>
        </Provider>
      </Router>
    )
  }
}
