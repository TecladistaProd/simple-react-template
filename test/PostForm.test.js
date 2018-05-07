import React from 'react'
import PostForm from '../src/pages/PostForm'
import renderer from 'react-test-renderer'
import store from  '../src/store/index'

test('submit a post', ()=>{
    const component = renderer.create(
        <PostForm />
    )
    
    let tree = component.toJSON()
    
    expect(tree).toMatchSnapshot()
})