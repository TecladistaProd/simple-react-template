import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../store/actions/postActions'
import PropTypes from 'prop-types'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    if(this.props.posts.length < 1)
      this.props.fetchPosts()
  }
  render() {
    return (
      <div>
        <h1 data-center style={{marginBottom:'.5rem'}}>Post</h1>
          <div className='card-list'>
            { this.props.newPost.title && <div className='card'>
                <h3 data-center>Title: {this.props.newPost.title}</h3>
                <p data-center>Body: {this.props.newPost.body}</p>
            </div>
            }
          { this.props.posts.map(post=>{
            return(
              <div key={post.id} className='card'>
                <h3 data-center>Title: {post.title}</h3>
                <p data-center>Body: {post.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapSt = state => ({posts: state.posts.items, newPost: state.posts.item})
export default connect(mapSt, {fetchPosts})(Post)
