import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">artonomous</h1>
        </header>
        <p className="intro">
          [marketplace]
        </p>
        <p>
          <ul className="thinglist">
            <li>[thing]</li>
            <li>[thing]</li>
            <li>[thing]</li>
            <li>[thing]</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
