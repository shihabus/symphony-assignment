import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootApp from "./container/App";

import configureStore from "./store/configureStore";

// Create redux store with history
const initialState = {};
const { store, persistor } = configureStore(initialState);

function Index() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <PersistGate loading={null} persistor={persistor}>
        <RootApp />
      </PersistGate>
    </Provider>
  );
}

export default Index;
