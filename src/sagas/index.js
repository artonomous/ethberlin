import { all, fork } from "redux-saga/effects";
import { sagas as web3Sagas } from "redux-saga-web3";

import { saga as ArtonomousSaga } from "../contracts/Artonomous";
import { saga as SoulTokenSaga } from "../contracts/SoulToken";
import { saga as AuctionHouseSaga } from "../contracts/AuctionHouse";
import { saga as GeneratorRegistrySaga } from "../contracts/GeneratorRegistry";
import { saga as ArtPieceTokenSaga } from "../contracts/ArtPieceToken";

export default function* root() {
  yield all([
    ...Object.values(web3Sagas).map(saga => fork(saga)),
    fork(ArtonomousSaga),
    fork(AuctionHouseSaga),
    fork(GeneratorRegistrySaga),
    fork(SoulTokenSaga),
    fork(ArtPieceTokenSaga)
  ]);
}
