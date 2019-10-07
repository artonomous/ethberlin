import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import RenderArtModal from "./components/RenderArtModal";
import BondModal from "./components/BondModal";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Wallet from 'ethereumjs-wallet';
import EmojiHashRenderer from "./components/EmojiHashRenderer";

import "./Generators.css";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(255,255,255,0.75)";


const ticksMax = 60 * 5;
const generators = [
  {name: 'tris', sourceUri: 'QmTpxTNc6sKAc5M3fKWtoJBjvN8tJWWghyKSuArfJKZGNb'},
  // {name: 'snow', sourceUri: 'QmZXx21d5NWRx4mK6CbnLXtxhqSgzTKMj46vFM7oSTrmH3'},
  {name: 'cornered', sourceUri: 'Qmc2ByRxfyfprC29cLn98xewCP85SCaMMhWq96JKds6iZQ'},
]

class DemoSlider extends React.Component {
  state = {
    atSlide: 0,
    maxSlides: -1,
    ticks: 0,
    hash: this.getAddress(),
  };
  getAddress() {
    const wallet = Wallet.generate();
    return wallet.getAddressString();
  }
  componentDidMount() {
    this.setState({
      hash: this.getAddress(),
      maxSlides: this.props.data.generators.length,
    });
    this.ticker = setInterval(this.tick, 1000);
  }
  componentWillUnmoun() {
    if (this.ticker) { 
      clearInterval(this.ticker);
      this.ticker = null;
    }
  }
  tick = () => {
    let {atSlide, hash, ticks} = this.state;
    if (ticks >= ticksMax) {
      ticks = 0;
      atSlide += 1;
      if (atSlide === this.state.maxSlides) {
        atSlide = 0;
      }
      hash = this.getAddress();
    } else {
      ticks += 1;
    }
    this.setState({
      ticks,
      atSlide,
      hash,
    });
  }

  render() {
    const generator = this.props.data.generators[this.state.atSlide];
    const secondsString = ((ticksMax - this.state.ticks) % 60).toString();
    return (
      <div style={{display: 'flex',
        background: '#222',
        flexGrow: '1',
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#eee',
        alignItems: 'center'}}>
        <div style={{width: '800px', height: '800px', textAlign: 'center', margin: '0 auto'}}><RenderArtModal url={generator.sourceUri} hash={this.state.hash} /></div>
        <br />
        <div style={{textAlign: 'center'}}><span style={{fontSize: '1.4em'}}>{generator.name} // {this.state.hash}</span> // <EmojiHashRenderer hash={this.state.hash || 'testing'} /></div>
        <br />
        <div style={{textAlign: 'center', fontSize: '1.4em'}}><strong>Ξ {((ticksMax - this.state.ticks) / ticksMax).toString().slice(0, 4)}</strong> for {Math.floor((ticksMax - this.state.ticks) / 60)}:{secondsString.length < 2 ? `0${secondsString}` : secondsString}</div>
      </div>
    );
  }
}

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Query
          query={gql`
            {
              generators(first: 10) {
                id
                name
                creator
                sourceUri
                token
              }
            }
          `}
        >
          {({ loading, error, data }) => (
            <div>{(!loading && !error && <DemoSlider data={{
              generators
            }} />)}</div>
          )}
        </Query>
      </div>
    );
  }
}

export default Demo;
