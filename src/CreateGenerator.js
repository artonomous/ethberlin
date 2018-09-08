import React from "react";
import PropTypes from "prop-types";
import brace from "brace";
import AceEditor from "react-ace";

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
    isProcessing: false
  };
  editorDidMount = (editor, monaco) => {};
  onChange = code => {
    this.setState({ code });
  };
  submitContract = () => {
    if (this.state.isProcessing) {
      return;
    }
    this.setState({ isProcessing: true });
    fsapi.createFileFromData(this.state.code).then(result => {
      fsapi.getTextFileFromPath(result[0].hash).then(fileOut => {
        console.log("has file from system", fileOut);
      });
    });
  };
  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
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
            <h2>canvas here</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default sizer()(CreateGenerator);
