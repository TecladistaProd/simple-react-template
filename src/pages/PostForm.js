import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../store/actions/postActions'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    // this.
  }
  onSubmit = e => {
    e.preventDefault()
    if (this.state.title !== '' && this.state.body !== '') {
      const post = {
        title: this.state.title,
        body: this.state.body
      }
      this.setState({ title: '', body: '' })
      this.props.createPost(post)
    }
  }
  render() {
    return (
      <div>
        <h1 data-center>Add Post</h1>
        <form className='box' onSubmit={this.onSubmit}>
          <label className='label'>
            Title:
            <input type='text' className='input' value={this.state.title}
              onChange={text => this.setState({title: text.target.value})} required/>
          </label>
          <label className='label'>
            Body:
            <textarea className='textarea' value={this.state.body}
              onChange={text=> this.setState({body: text.target.value})} style={{}} required/>
          </label>
          <button type='submit' className='button is-link'>Send</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm)
