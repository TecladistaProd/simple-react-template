import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul className='navbar is-primary'>
        <Link to='/'>
            <li className='navbar-item'>Home</li>
        </Link>
        <Link to='/posts'>
          <li className='navbar-item'>Posts</li>
        </Link>
        <Link to='/sendpost'>
          <li className='navbar-item'>Send Post</li>
        </Link>
      </ul>

    )
  }
}
