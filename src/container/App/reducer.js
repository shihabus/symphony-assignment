import {
  DELIMITER_CHANGED,
  ROW_COUNT_CHANGED,
  FILE_DATA_CHANGED,
  UPLOAD_STATUS_CHANGED,
  FETCH_STATUS_CHANGED,
  FILTER_UPDATE
} from "./constants";

import FETCH_STATUS from "../../constants/fetchStatus";

const initialState = {
  uploadStatus: FETCH_STATUS.SUCCESS,
  fetchStatus: FETCH_STATUS.SUCCESS,
  delimiter: "",
  rowCount: 2,
  fileData: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_UPDATE:
      return { ...state, [payload.item]: payload.value };

    case UPLOAD_STATUS_CHANGED:
      return { ...state, uploadStatus: payload };

    case FETCH_STATUS_CHANGED:
      return { ...state, fetchStatus: payload };

    case FILE_DATA_CHANGED:
      return { ...state, fileData: payload };

    default:
      return state;
  }
};
