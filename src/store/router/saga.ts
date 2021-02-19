import { takeLatest, put } from "redux-saga/effects";
import { switchRoute, switchRouteInState } from "./actions";
import history from "../../history";

export function* switchRouteOperation({ payload }: { payload: string }) {
  history.push(payload);
  yield put(switchRouteInState(payload));
}

export default function* routerWatcherSaga() {
  yield takeLatest(switchRoute, switchRouteOperation);
}
