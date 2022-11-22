import React, { Component } from "react";

class List extends Component {
  //here in console.log we see a warning :  Each child in a list should have a unique "key" prop.
  render() {
    const names = ["kia", "sia", "pia"];
    return (
      <div>
        {names.map((value) => (
          <h2>{value}</h2>
        ))}
      </div>
    );
  }
}

export default List;
