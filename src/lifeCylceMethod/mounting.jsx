import React, { Component } from "react";
import Mounting2 from "./mounting2";

class Mounting extends Component {
  //constructor()
  constructor(props) {
    super(props);
    this.state = {
      name: "kamna",
    };
    console.log("constructor is called 1");
  }

  //getDerivedStateFromProps method (when state of component depends on changes in props over time)

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called 1");
    return null;
  }

  //componentDidMount() invoke only when its component or children component have been rendered.
  componentDidMount() {
    console.log("componentDidMount is called 1");
  }

  shouldComponentUpdate() {
    console.log("should component update 1");
    return null;
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("get snap shot before update 1");
    return null;
  }
  componentDidUpdate() {
    console.log("component did update 1");
  }
  changeState = () => {
    this.setState({
      name: "dont Know",
    });
  };
  //render() method reads props and state and return jsx.
  render() {
    console.log("rendered is called 1");
    return (
      <div>
        <h1>Mounting-1</h1>
        <button onClick={() => this.changeState()}>click</button>
        <Mounting2 />
      </div>
    );
  }
}

export default Mounting;
