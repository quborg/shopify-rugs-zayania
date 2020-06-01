import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import DB from "./db.json";

const rootEl = document.getElementById("react-products-filters");
const data = JSON.parse(
  document.querySelector("[data-products-json]").innerHTML || "[]"
);

rootEl && ReactDOM.render(<App products={data} />, rootEl);

// ReactDOM.render(
//   <React.StrictMode>
//     <App products={DB} />
//   </React.StrictMode>,
//   document.getElementById("react-products-filters")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
