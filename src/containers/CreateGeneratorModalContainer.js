import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import CreateGeneratorModal from "../components/CreateGeneratorModal";
import web3 from "web3";

import {
  actions as generatorFactoryActions,
  selectors as generatorFactorySelectors
} from "../contracts/GeneratorFactory";

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = (dispatch, props) => ({
  publishThing: (name, filepath) => {
    console.log(generatorFactoryActions, props);
    return dispatch(
      generatorFactoryActions.methods.createGenerator().send(name, filepath)
    );
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CreateGeneratorModal);
