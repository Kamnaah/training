import React, { Component } from 'react'

export class Event extends Component {
  constructor (){
    super();
    this.state={
      msg:"Hello"
    }
    //binding in the class constructor
    this.doubleClickEvent=this.doubleClickEvent.bind(this)
  }
  //if using arrow function no need to bind the events.
  clickEvent=()=>{
    this.setState({
      msg:"Goodbye"
    })
  }
  //if using normal function bind the function in the construtor.
  doubleClickEvent(){
    console.log(this)//this will be undefine and won't work without binding. after binding it will show all the event 
    this.setState({
      msg:"Hey again!"
    })
  }
  render() {
    return (
      <>
      <h1>Learning Event Handler</h1>
      <p>{this.state.msg}</p>
      <button onClick={()=>this.clickEvent()} onDoubleClick={this.doubleClickEvent}>Click Me</button>
      </>
    )
  }
}

export default Event