import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import { UserActions } from "./components/ActionBtn";

import * as serviceWorker from "./serviceWorker";

import People from "./People";
import PersonDetail from "./components/PersonDetail";

const App = () => (
  <div style={styles.app}>
    <header style={styles.header}></header>
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <Switch>
        <Route exact path="/" component={People} />
        <Route path="/user/:id" component={PersonDetail} />
      </Switch>
    </Router>
    {/* <UserActions /> */}
  </div>
);

const styles = {
  app: {
    height: "100vh",
    backgroundColor: "aliceblue"
  },
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
