import React, { Component } from "react";

class Student extends Component
{

  constructor(props)
  {
    super(props);
    console.log("Constructor: Component initializing...");
    this.state =
    {
      name: props.name,
    };
  }


  render()
  {

    return <h1>Hello, {this.state.name}!</h1>;
  }

}

export default Student;
