import React, { Component } from "react";

class Mounting2 extends Component {
  //constructor()
  constructor(props) {
    super(props);
    this.state = {
      name: "kamna",
    };
    console.log("constructor is called 2");
  }

  //getDerivedStateFromProps method (when state of component depends on changes in props over time)

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called 2");
    return null;
  }

  //componentDidMount() invoke only when its component or children component have been rendered.
  componentDidMount() {
    console.log("componentDidMount is called 2");
  }

  shouldComponentUpdate() {
    console.log("should component update 2");
    return null;
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("get snap shot before update 2");
    return null;
  }
  componentDidUpdate() {
    console.log("component did update 2");
  }
  changeState = () => {
    this.setState({
      name: "dont Know",
    });
  };
  //render() method reads props and state and return jsx.
  render() {
    console.log("rendered is called 2");
    return (
      <div>
        <h1>Mounting-2</h1>
      </div>
    );
  }
}

export default Mounting2;
