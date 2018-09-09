import { all, fork } from "redux-saga/effects";
import { sagas as web3Sagas } from "redux-saga-web3";

import { saga as ArtonomousSaga } from "../contracts/Artonomous";
import { saga as SoulTokenSaga } from "../contracts/SoulToken";
import { saga as AuctionHouseSaga } from "../contracts/AuctionHouse";
import { saga as GeneratorFactorySaga } from "../contracts/GeneratorFactory";
import { saga as GeneratorRegistrySaga } from "../contracts/GeneratorRegistry";
import { saga as GeneratorSaga } from "../contracts/Generator";
import { saga as ArtPieceTokenSaga } from "../contracts/ArtPieceToken";

export default function* root() {
  yield all([
    ...Object.values(web3Sagas).map(saga => fork(saga)),
    fork(ArtonomousSaga),
    fork(AuctionHouseSaga),
    fork(GeneratorFactorySaga),
    fork(GeneratorRegistrySaga),
    fork(GeneratorSaga),
    fork(SoulTokenSaga),
    fork(ArtPieceTokenSaga)
  ]);
}
