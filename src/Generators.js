import React from 'react'
import './Generators.css'

class Generators extends React.Component {
  generateRow(...args) {
    return (
      <div className="row">
        <div className="column">
          {args[0]}
        </div>
        <div className="column">
          {args[1]}
        </div>
        <div className="column">
          {args[2]}
        </div>
        <div className="column">
          <div className="button bond-button">{args[3]}</div>
        </div>
      </div>
    );
  }

  render() {
    const generators = [
      {
        name: 'generator', 
        currentStake: '100 ETH', 
        currentRank: 1, 
        bond: 'Bond'
      },
      {
        name: 'generator2', 
        currentStake: '2ETH', 
        currentRank: 2, 
        bond: 'Bond'
      }
    ];

    for (let i = 0; i < generators.length; i++) {
      generators[i] = this.generateRow(
          generators[i].currentRank,
          generators[i].name,
          generators[i].currentStake,
          generators[i].bond
      )
    }

    return (
        <div className="table">
          {generators}
        </div>
    );
  }
}

export default Generators;
