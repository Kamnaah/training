import React, { Component } from "react";

class Props extends Component {
  render() {
    const {name , children}=this.props
    return (
      <>
        <h1>--------------CONCEPT OF PROPS IN CLASS-------------</h1>
        <div>
          <h1>Hello {name}</h1>
        {children} 
        </div>
      </>
    );
  }
}

export default Props;
