import React, { Component } from "react";
import "./App.css";
import MyButton from "./class/my_button.js";
import MyButtonWithHook from "./function/my_button.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-header">
          <div> Class-Component </div>
          <MyButton />
          <div> Functional Component with the State Hook </div>
          <MyButtonWithHook />
        </section>
      </div>
    );
  }
}

export default App;
