import React, { Component } from "react";
import "./App.css";
import "./Ardoise.css";
import { Participants } from "./Participants/Participants";

class App extends Component {
  state = {
    participants: []
  };

  render() {
    const { participants } = this.state;

    return (
      <div className="App" id="ardoise">
        <h2>Ardoise !</h2>

        <Participants
          participants={participants}
          onInscription={nouvelInscrit =>
            this.setState({
              participants: [...participants, nouvelInscrit]
            })
          }
        />

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
