import "assets/scss/argon-design-system-react.scss";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/vendor/nucleo/css/nucleo.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Landing from "views/Landing";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import MPM2D from "./views/MPM2D";
import Supernova from "./views/Supernova";
import Owners from "./views/Owners";
import Contact from "./views/Contact";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/mpm2d" exact component={MPM2D} />
      <Route path="/supernova" exact component={Supernova} />
      <Route path="/owners" exact component={Owners} />
      <Route path="/contact" exact component={Contact} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
