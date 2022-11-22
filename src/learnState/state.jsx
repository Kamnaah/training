import React, { Component } from 'react'

class State extends Component {
  constructor () {
    super();
    this.state={
      msg:"Learn state concept"
    }
  }
  changeMsg=()=>{
    this.setState({
      msg:"completed learning state concept"
    })
  }
  sameMsg=()=>{
    this.setState({
      msg:"you clicked more then one time"
    })
  }
  render() {
    return (
      <div>
        <h1>-----------------------Concept of state in class component--------------------</h1>
        <p>click the button to see the change.........</p>
        <button onClick={()=>this.changeMsg()} onDoubleClick={()=>this.sameMsg()}>{this.state.msg}</button>
      </div>
    )
  }
}

export default State