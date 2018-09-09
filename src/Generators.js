import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import RenderArtModal from "./components/RenderArtModal";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import "./Generators.css";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(255,255,255,0.75)";

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
        height: "500px",
        width: "500px"
      },
      overlay: {}
    };

    const { id, token, name, creator, sourceUri } = args;
    return (
      <div className="row" key={id}>
        <div className="column randomHex">
          <div>{creator}</div>
        </div>
        <div className="column name">{name}</div>
        <div className="column currentStake">0.0</div>
        <div className="column">
          <div
            onClick={this.handleModalOpen(id)}
            className="button bond-button background-color-soul"
          >
            [view]
          </div>
          <ReactModal
            isOpen={this.state.modals[id]}
            onRequestClose={this.handleModalClose(id)}
            style={customStyles}
          >
            <RenderArtModal url={sourceUri} />
          </ReactModal>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
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
