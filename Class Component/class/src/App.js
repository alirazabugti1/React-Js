import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from './components/Navbar';
import React, { Component } from 'react'
export default class App extends Component {
//class based component
state={
  count:0,
};


Increament = () => {
  this.setState({
    count: this.state.count+1
  });
}

  render() {
    return (
      <div>
     <Navbar/>

     <div className="center-container">
    <p>Count: {this.state.count}</p>
    <button onClick={this.Increament}>Increment</button>
    </div>

      </div>
    )
  }
}
