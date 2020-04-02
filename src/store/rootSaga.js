import { all } from "redux-saga/effects";
import appSaga from "../container/App/sagas";

export default function* rootSaga() {
  yield all([appSaga()]);
}
