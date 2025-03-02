import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
export default class App extends Component {
  c='aliraza'
  render() {
    return (
      <div>
     <Navbar/>
     <News/>
      </div>
    )
  }
}
