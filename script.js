import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./Navbar.jsx";

let divEl = React.createElement("div", { id: "parent" }, <Navbar />);
let rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(divEl);

// Bundlers like Parcel, Webpack, Vite.
// they are need to convert our 'React code' to 'Browser understandable code'. also transpiles ES6+ to ES5, combines multiple files into single.
// i.e, JSX code -> React Plain JS code.
/*
  React App using Parcel bundler
  commands :-
  npm init -y
  npm install parcel --save-dev
  npm install react react-dom
  scripts - npx parcel index.html
  *** type="module" must be kept for your Javascript source file *** 
*/
