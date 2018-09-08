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
          current rank
          {args[2]}
        </div>
        <div className="column">
          <button>{args[3]}</button>
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
        bond: 'https://link.com'
      },
      {
        name: 'generator2', 
        currentStake: '2ETH', 
        currentRank: 1, 
        bond: 'https://link.com'
      }
    ];

    for (let i = 0; i < generators.length; i++) {
      generators[i] = this.generateRow(
          generators[i].name,
          generators[i].currentStake,
          generators[i].currentRank,
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
