import fetch from "../../utils/axiosUtil";
import { call, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { FILTER_CHANGED, UPLOAD_FILE, GET_DATA } from "./constants";
import fetchStatus from "../../constants/fetchStatus";
import { SuccessToast, ErrorToast, InfoToast } from "../../utils/toastUtil";

function upload(data) {
  return fetch.request({
    method: "post",
    url: "/upload",
    headers: { "content-type": "multipart/form-data" },
    data
  });
}

function getData() {
  return fetch.request({
    method: "get",
    url: "/get"
  });
}

function* fileUpload(action) {
  try {
    yield put(actions.UPLOAD_STATUS_CHANGED(fetchStatus.IN_PROGRESS));
    const { payload } = action;
    yield call(upload, payload);
    yield put(actions.GET_DATA());
    yield put(actions.UPLOAD_STATUS_CHANGED(fetchStatus.SUCCESS));
    SuccessToast("Upload was successful");
  } catch (error) {
    yield put(actions.UPLOAD_STATUS_CHANGED(fetchStatus.FAILED));
    ErrorToast("Upload failed");
  }
}

function* fetchData() {
  try {
    yield put(actions.FETCH_STATUS_CHANGED(fetchStatus.IN_PROGRESS));
    const {
      data: { data }
    } = yield call(getData);
    yield put(actions.FILE_DATA_CHANGED(data));
    yield put(actions.FETCH_STATUS_CHANGED(fetchStatus.SUCCESS));
    InfoToast("New data loaded");
  } catch (error) {
    yield put(actions.FETCH_STATUS_CHANGED(fetchStatus.FAILED));
    ErrorToast("Data load failed");
  }
}

function* filterChangeSaga(action) {
  try {
    const { payload } = action;
    yield put(actions.FILTER_UPDATE(payload));
  } catch (error) {
    yield;
  }
}

export default function* appSaga() {
  yield takeLatest(UPLOAD_FILE, fileUpload);
  yield takeLatest(FILTER_CHANGED, filterChangeSaga);
  yield takeLatest(GET_DATA, fetchData);
}
