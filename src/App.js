import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="root">
        <div class="art-root">
          <img class="art-piece" src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          <div class="art-info">
            <p class="timeleft">23 h 40 min 30 sec</p>
            <p>20 ETH</p>
            <p>generator_name</p>
            <button>Buy</button>
          </div>
        </div>
        <div class="historical-pieces">
          <div class="box1">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          </div>
          <div class="box2">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          </div>
          <div class="box3">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
