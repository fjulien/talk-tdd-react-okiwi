import React, { Component } from "react";
import "./App.css";
import "./Ardoise.css";

class App extends Component {
  state = {
    participants: [],
    inscrit: ""
  };

  render() {
    const { participants, inscrit } = this.state;
    return (
      <div className="App" id="ardoise">
        <h2>Ardoise !</h2>

        <div id="participants">
          <h3>
            {participants.length === 0 &&
              "Aucun participant"}
            {participants.length === 1 && "1 participant"}
          </h3>

          {participants.map(p => (
            <div key={p}>{p}</div>
          ))}

          <input
            type="text"
            id="inscription-nom"
            onChange={event =>
              this.setState({
                inscrit: event.target.value
              })
            }
            value={inscrit}
          />

          <button
            id="inscrire"
            onClick={() =>
              this.setState({
                participants: [inscrit],
                inscrit: ""
              })
            }
          >
            Inscrire
          </button>
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
