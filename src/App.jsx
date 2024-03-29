import React from "react";
import "./App.css";
import "https://kit.fontawesome.com/0d42d3538d.js";
import "./bootstrap.css";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
// import { store } from "./store/store";
import { persistedStore, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <div>
          <Navbar />
          <Outlet />
          <Foot />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
