import React, { Component } from "react";
import "./App.css";
import "./Ardoise.css";

class App extends Component {
  render() {
    return (
      <div className="App" id="ardoise">
        <h2>Ardoise !</h2>

        <div id="participants">
          <h3>Aucun participant</h3>
        </div>

        <div id="depenses">
          <h3>Aucune dépense</h3>
        </div>

        <div id="creances">
          <h3>Aucune créance</h3>
        </div>
      </div>
    );
  }
}

export default App;
