import React, { Component } from "react";
import "./App.css";
import "./Ardoise.css";
import { Participants } from "./Participants/Participants";
import { Depenses } from "./Depenses/Depenses";

class App extends Component {
  state = {
    participants: [],
    depenses: []
  };

  render() {
    const { participants, depenses } = this.state;
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

        <Depenses
          depenses={depenses}
          onDepenser={depense =>
            this.setState({
              depenses: [...depenses, depense]
            })
          }
        />

        <div id="creances">
          <h3>Aucune créance</h3>
        </div>
      </div>
    );
  }
}

export default App;
