import React from "react";
// import ReactDOM from "react-dom/client";

import App from "./App";
import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import {productsApi} from "./features/apiSlice"
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApiProvider api={productsApi}>
          <App />
        </ApiProvider>
        
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
