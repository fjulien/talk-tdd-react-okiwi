import PropTypes from "prop-types";
import React, { Component } from "react";

export class Participants extends Component {
  state = {
    inscrit: ""
  };

  render() {
    const { inscrit } = this.state;
    const { participants } = this.props;

    return (
      <div id="participants">
        <h3>
          {participants.length === 0 && "Aucun participant"}
          {participants.length === 1 && "1 participant"}
          {participants.length > 1 &&
            participants.length + " participants"}
        </h3>

        <div>
          {participants.map(p => (
            <div key={p}>{p}</div>
          ))}
        </div>

        <div>
          <input
            type="text"
            id="inscription-nom"
            onChange={event =>
              this.setState({ inscrit: event.target.value })
            }
            value={inscrit}
          />
          <button
            id="inscrire"
            onClick={() => {
              this.props.onInscription(inscrit);
              this.setState({ inscrit: "" });
            }}
          >
            Inscrire
          </button>
        </div>
      </div>
    );
  }
}

Participants.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.string),
  onInscription: PropTypes.func.isRequired
};
