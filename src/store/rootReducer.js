/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";

import appReducer from "../container/App/reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    appReducer,
    ...injectedReducers
  });

  return persistReducer(persistConfig, rootReducer);
}
