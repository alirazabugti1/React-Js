import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from 'react'
export default class App extends Component {
  c='aliraza'
  render() {
    return (
      <div>
        Hello class Based component {this.c}
      </div>
    )
  }
}
