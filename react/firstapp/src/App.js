import React, { Component } from "react";
export default class App extends Component{
  state={
    name:"React",
    id:154,
    gender:"female",
    section:"b"
  }
  render(){
    return (
      <div>
        <p>name is:{this.state.name}</p>
        <p>is is:{this.state.id} {this.state.gender}</p>
        <p>section is:{this.state.section}</p>
      </div>
    );
  }
}