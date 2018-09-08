import React from "react";
import PropTypes from "prop-types";
import AceEditor from "react-ace";
import P5Wrapper from "./components/P5Wrapper";
import ReactModal from "react-modal";
import BondingModal from "./components/BondingModal";

import "brace/mode/javascript";
import "brace/theme/github";
import * as fsapi from "./fsapi";

import sizer from "react-sizer";

import "./CreateGenerator.css";

class CreateGenerator extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };

  state = {
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}`,
    app: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}`,
    isProcessing: false
  };
  editorDidMount = (editor, monaco) => {};
  onChange = code => {
    this.setState({ code });
  };
  updatePreview = evt => {
    this.setState({ app: this.state.code });
    evt.preventDefault();
  };
  submitContract = evt => {
    evt.preventDefault();
    if (this.state.isProcessing) {
      return;
    }
    this.setState({ isProcessing: true });

    fsapi.createFileFromData(this.state.code).then(result => {
      this.setState({ fileResult: result });
      // fsapi.getTextFileFromPath(result[0].hash).then(fileOut => {
      //   console.log("has file from system", fileOut);
      // });
    });
  };
<<<<<<< HEAD
  handleModalClose = evt => {};
  publishCreation = evt => {
    evt.preventDefault();
  };
=======

  componentDidUpdate(prevProps, prevState) {
    try {
          eval(this.state.code); 
    } catch (e) {
      if (e instanceof SyntaxError) {
        //noop
      }
    }
  }
>>>>>>> 6dd1d7571018d9e9768120cd2d747f321947e44e

  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <ReactModal
          isOpen={this.state.isProcessing}
          onRequestClose={this.handleModalClose}
        >
          <h1>Publish your creation!</h1>
          <button
            className="button background-color-soul button-large"
            onClick={this.publishCreation}
          >
            Publish!
          </button>
        </ReactModal>
        <div className="actionBar">
          <h3>Submit a generative work</h3>
          <a
            onClick={this.updatePreview}
            className="button background-color-soul"
          >
            Update Preview
          </a>
          <a
            onClick={this.submitContract}
            className="button background-color-soul"
          >
            Submit Code
          </a>
        </div>
        <div className="editorpage">
          <AceEditor
            mode="javascript"
            theme="github"
            value={this.state.code}
            width={`${this.props.width / 2 - 1}px`}
            height={`${this.props.height}px`}
            onChange={this.onChange}
            disabled={this.state.isProcessing}
            name="maindiv"
            editorProps={{ $blockScrolling: true }}
          />
          <div
            style={{
              width: `${this.props.width / 2 - 1}px`,
              height: `${this.props.height}px`
            }}
            className="preview"
          >
            <P5Wrapper code={this.state.app} />
          </div>
        </div>
      </div>
    );
  }
}

export default sizer()(CreateGenerator);
