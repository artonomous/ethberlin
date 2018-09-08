import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="art-root">
          <img className="art-piece" src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          <div className="art-info">
            <p className="price">20 ETH</p>
            <p className="timeleft">23 h 50 min 3 sec</p>
            <p className="generator">Awesome hash</p>
            <input type="number" placeholder="0.00"/>
            <span className="price-unit">ETH</span>
            <div className="button bid-button background-color-soul">Bid</div>
          </div>
        </div>
        <div className="historical-pieces">
          <div className="box1">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          </div>
          <div className="box2">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          </div>
          <div className="box3">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
