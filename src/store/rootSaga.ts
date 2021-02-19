import { spawn } from "redux-saga/effects";

import routerWatcherSaga from "./router/saga";

export default function* rootSaga() {
  yield spawn(routerWatcherSaga);
}
