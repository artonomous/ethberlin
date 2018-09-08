import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import BondingModal from "./components/BondingModal";

import "./Generators.css";

class Generators extends React.Component {
  state = {
    modals: {}
  };

  handleModalOpen = id => {
    return () => {
      let modals = this.state.modals;
      modals[id] = true;
      this.setState({ modals });
    };
  };

  handleModalClose = id => {
    return () => {
      let modals = this.state.modals;
      modals[id] = false;
      this.setState({ modals });
    };
  };

  generateRow(...args) {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-30%",
        transform: "translate(-50%, -50%)",
        height: "60%",
        width: "40%"
      }
    };

    const [i, currentRank, name, currentStake, bond, address] = args;
    return (
      <div className="row" key={i}>
        <div className="column currentRank">{currentRank}</div>
        <div className="column name">{name}</div>
        <div className="column currentStake">{currentStake}</div>
        <div className="column">
          <div
            onClick={this.handleModalOpen(i)}
            className="button bond-button background-color-soul"
          >
            {bond}
          </div>
          <ReactModal
            isOpen={this.state.modals[i]}
            onRequestClose={this.handleModalClose(i)}
            style={customStyles}
          >
            <BondingModal generator={address} />
          </ReactModal>
        </div>
      </div>
    );
  }

  render() {
    const generators = [
      {
        name: "generator",
        currentStake: "100 ETH",
        currentRank: 1,
        bond: "Bond",
        address: "2asdfkj"
      },
      {
        name: "generator2",
        currentStake: "2ETH",
        currentRank: 2,
        bond: "Bond",
        address: "2asdsdfkjdslf"
      }
    ];

    for (let i = 0; i < generators.length; i++) {
      generators[i] = this.generateRow(
        i,
        generators[i].currentRank,
        generators[i].name,
        generators[i].currentStake,
        generators[i].bond,
        generators[i].address
      );
    }

    return (
      <div>
        <Link
          className="button bond-button background-color-soul"
          to="/generators/create"
        >
          Create generator
        </Link>
        <div className="table">{generators}</div>
      </div>
    );
  }
}

export default Generators;
