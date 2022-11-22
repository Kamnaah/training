import React, { Component } from "react";
import Props from "./learnProps/props";
import Counter from "./learnState/counter";
import State from "./learnState/state";
import Event from "./learnEventHandling/event";
import Parent from "./methodsasprops/parent";
import List from "./listRendering/list";
import ListOfEmployee from "./listRendering/listOfEmployee";
import Mounting from "./lifeCylceMethod/mounting";
import Hero from "./errorBoundry/hero";
import Error from "./errorBoundry/error";

class App extends Component {
  render() {
    return (
      <>
        <Props name="kamna">
          <button>CLICK</button>
        </Props>
        <hr />
        <State />
        <hr />
        <Counter />
        <hr />
        <Event />
        <hr />
        <Parent />
        <hr />
        <List />
        <hr />
        <ListOfEmployee />
        <hr />
        <Mounting />
        <hr />
        <Error>
          <Hero heroName={"superman"} />
        </Error>
        <Error>
          <Hero heroName={"batman"} />
        </Error>
        <Error>
          <Hero heroName={"joker"} />
        </Error>
      </>
    );
  }
}

export default App;
