import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scene/Home.jsx";
import About from "./scene/About.jsx";
import Details from "./scene/Details.jsx";
import Categorypage from "./scene/CategoryPage.jsx";
import Cart from "./scene/Cart.jsx";
import {Provider} from "react-redux";
import { store } from "./store/store.js";



ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" index={true} element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="Categorypage/:categoryItem" element={<Categorypage />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
