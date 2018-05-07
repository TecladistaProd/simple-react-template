import React, { Component } from 'react'

//import medias
import cm from '../media/cp.jpg'

export default class Home extends Component {
  render(){
    return(
      <div>
        <h1 data-center>Home Page</h1>
        <img src={cm} style={{width:'500px', height: 'auto', alignSelf: 'center'}}/>
      </div>
    )
  }
}
