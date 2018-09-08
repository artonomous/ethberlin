import React from "react";
import MonacoEditor from "react-monaco-editor";

import "./CreateGenerator.css";

export default class CreateGenerator extends React.Component {
  state = {
    code: 'console.log("hi");'
  };
  editorDidMount = (editor, monaco) => {};
  onChange = code => {
    this.setState({ code });
  };
  render() {
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div class="page">
        <MonacoEditor
          language="javascript"
          height="700px"
          width="500px"
          theme="vs-dark"
          value={this.state.code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
        <div class="preview">
          <h2>canvas here</h2>
        </div>
      </div>
    );
  }
}
