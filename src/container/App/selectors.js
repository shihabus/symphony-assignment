import _ from "lodash";
import rowBuilder from "../../utils/rowBuilder";

export const isDataNull = state =>
  _.get(state, "appReducer.fileData", "") === "";

export const getFileData = state => {
  let data = [];
  const file = _.get(state, "appReducer.fileData", false);
  const delimiter = _.get(state, "appReducer.delimiter", "");
  const rowCount = _.get(state, "appReducer.rowCount", 1);

  data = rowBuilder(file, delimiter, rowCount);
  return data;
};
export const getUploadStatus = state =>
  _.get(state, "appReducer.uploadStatus", null);

export const getDelimiterFilter = state =>
  _.get(state, "appReducer.delimiter", "");

export const getRowCountFilter = state =>
  _.get(state, "appReducer.rowCount", 2);
