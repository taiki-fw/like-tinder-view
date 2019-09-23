import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { UserActions } from "./components/ActionBtn";

import * as serviceWorker from "./serviceWorker";

import People from "./People";

const App = () => (
  <>
    <header style={styles.header}></header>
    <People />
    <UserActions />
  </>
);

const styles = {
  header: {
    backgroundColor: "#f6f6f6",
    height: "50px",
    margin: "0 0 1em"
  },
  actionDiv: {
    width: "85%",
    margin: "25px auto 0"
  }
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
