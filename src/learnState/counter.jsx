import React, { Component } from 'react'
class Counter extends Component {
  constructor () {
    super();
    this.state={
      count:0
    }
  }
  increment=()=>{
    this.setState(prev=>({
      count:prev.count+5
    }))
  }
  decrement=()=>{
    this.setState((prev)=>({
      count: prev.count-5
    }))
  }
  render() {
    const {count}=this.state;
    return (
      <div>
        <h1>-----APPLY state and setState with counter---------------</h1>
        <button onClick={()=>this.increment()}>+</button>
        <p>{count}</p>
        <button onClick={()=>this.decrement()}>-</button>
      </div>
    )
  }
}

export default Counter