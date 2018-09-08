import React, { Component } from 'react';
import { actions } from "redux-saga-web3";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

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
        <h1>Historical Pieces</h1>
        <div className="historical-pieces">
          <div className="box1">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
            <div className="historical-info">
            <p className="sold-for">30 ETH</p> 
            <p className="generator">Awesome Generator</p> 
            </div>
          </div>
          <div className="box2">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
            <div className="historical-info">
              <p className="sold-for">30 ETH</p> 
              <p className="generator">Awesome Generator</p> 
            </div>
          </div>
          <div className="box3">
            <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6dd135053c008197d7ed1943586f88f&auto=format&fit=crop&w=1650&q=80" />
            <div className="historical-info">
              <p className="sold-for">30 ETH</p> 
              <p className="generator">Awesome Generator</p> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAccounts: () => dispatch(actions.accounts.getRequest()),
  getLatestBlock: () => dispatch(actions.blocks.getBlockHeader("latest"))
});

export default compose(
  connect(
    () => ({}),
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getAccounts();
      this.props.getLatestBlock();
    }
  })
)(App);
