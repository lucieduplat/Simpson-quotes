import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp.js";

import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
      working:true
      };
    }

click = () => {
  this.setState({ working: !this.state.working });
};


  render() {
    const homer = this.state.working ? "Homer is working" : "homer si sleeping";


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "work" : "App-logo"} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.click} className={homer}>{homer}</button>
        <Quotes />
      </div>

    );
  }
}



export default App;
