import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  render() {
    return (
      <div>
        This is a News Component
        <Newsitems/>
        <Newsitems/>
        <Newsitems/>
        <Newsitems/>
        <Newsitems/>
        <Newsitems/>
        
      </div>
    )
  }
}

export default News
