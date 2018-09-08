import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import BondingModal from "./components/BondingModal";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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

  generateRow(args) {
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

    const { id, token, creator, sourceUri } = args;
    return (
      <div className="row" key={id}>
        <div className="column currentRank">{id}</div>
        <div className="column name">{token}</div>
        <div className="column currentStake">{sourceUri}</div>
        <div className="column">
          <div
            onClick={this.handleModalOpen(id)}
            className="button bond-button background-color-soul"
          >
            {id}
          </div>
          <ReactModal
            isOpen={this.state.modals[id]}
            onRequestClose={this.handleModalClose(id)}
            style={customStyles}
          >
            <BondingModal generator={id} />
          </ReactModal>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link
          className="button bond-button background-color-soul"
          to="/generators/create"
        >
          Create generator
        </Link>
        <Query
          query={gql`
            {
              generators(first: 10) {
                id
                creator
                sourceUri
                token
              }
            }
          `}
        >
          {({ loading, error, data }) => (
            <span>
              {!loading && (
                <div className="table">
                  {data.generators.map(generator =>
                    this.generateRow(generator)
                  )}
                </div>
              )}
            </span>
          )}
        </Query>
      </div>
    );
  }
}

export default Generators;
