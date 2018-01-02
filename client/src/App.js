import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import oAuth from "./components/oAuthBtn";

const App = () =>
  <Router>
    <div>
      <Nav />
      <oAuth/>

      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> //REMINDER: "NoMatch" is the "Default" option in this layout, akin to the default measure in a swich-case block.
      </Switch>
    </div>
  </Router>;

export default App;
