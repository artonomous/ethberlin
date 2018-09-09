import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import RenderArtModal from "./components/RenderArtModal";
import BondModal from "./components/BondModal";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import EmojiHashRenderer from "./components/EmojiHashRenderer";

import "./Generators.css";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(255,255,255,0.75)";

class Generators extends React.Component {
  state = {
    artModals: {},
    bondModals: {}
  };

  handleBondModalOpen = id => {
    return () => {
      let bondModals = this.state.bondModals;
      bondModals[id] = true;
      this.setState({ bondModals });
    };
  };

  handleBondModalClose = id => {
    return () => {
      let bondModals = this.state.bondModals;
      bondModals[id] = false;
      this.setState({ bondModals });
    };
  };

  handleArtModalOpen = id => {
    return () => {
      let artModals = this.state.artModals;
      artModals[id] = true;
      this.setState({ artModals });
    };
  };

  handleArtModalClose = id => {
    return () => {
      let artModals = this.state.artModals;
      artModals[id] = false;
      this.setState({ artModals });
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
        height: "500px",
        width: "500px"
      },
      overlay: {}
    };

    const { id, token, name, creator, sourceUri } = args;
    return (
      <div className="row" key={id}>
        <div className="column creator">
          <EmojiHashRenderer hash={creator} />
        </div>
        <div className="column name">{name}</div>
        <div className="column currentStake">
          {Math.floor(Math.random() * 30) / 10}
        </div>
        <div className="column">
          <div
            onClick={this.handleArtModalOpen(id)}
            className="button bond-button background-color-soul"
          >
            [view]
          </div>
          <ReactModal
            isOpen={this.state.artModals[id]}
            onRequestClose={this.handleArtModalClose(id)}
            style={customStyles}
          >
            <RenderArtModal url={sourceUri} hash={id} />
          </ReactModal>
          <div
            onClick={this.handleBondModalOpen(id)}
            className="button bond-button background-color-soul"
          >
            [bond]
          </div>
          <ReactModal
            isOpen={this.state.bondModals[id]}
            onRequestClose={this.handleBondModalClose(id)}
            style={customStyles}
          >
            <BondModal />
          </ReactModal>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <Link
          className="button background-color-soul large-go"
          to="/generators/create"
        >
          Create generator
        </Link>
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
            <span>
              {error && <h1>Error loading generative art :(</h1>}
              {!loading &&
                !error && (
                  <div className="table">
                    {data &&
                      data.generators &&
                      data.generators.map(generator =>
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
