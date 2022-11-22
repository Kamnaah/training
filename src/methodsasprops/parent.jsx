import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(ChildName) {
    alert(`Hello ${this.state.parentName} from ${ChildName}`);
  }
  render() {
    return (
      <div>
        <h1>---------------concept of method as props------------------</h1>
        <Child greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default Parent;
