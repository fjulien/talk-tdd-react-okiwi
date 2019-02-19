import React, { Component } from "react";
import "./App.css";
import "./Ardoise.css";
import { Participants } from "./Participants/Participants";
import { Depenses } from "./Depenses/Depenses";
import { calculerLesCreances } from "./Creances/calculerLesCreances";

class App extends Component {
  state = {
    participants: [],
    depenses: []
  };

  render() {
    const { participants, depenses } = this.state;
    const creances = calculerLesCreances(
      depenses,
      participants
    );

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
          {creances.map((c, index) => (
            <div key={index}>
              {c.from} doit {c.montant} euros à {c.to}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
