import { all, fork } from "redux-saga/effects";
import { sagas as web3Sagas } from "redux-saga-web3";

export default function* root() {
  yield all([...Object.values(web3Sagas).map(saga => fork(saga))]);
}
