//React Library imports:
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Page imports:
import Books from "./pages/Books";
import Welcome from "./pages/Welcome"
import Questionnaire from "./pages/Questionnaire";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

//Componenet imports:
//import Nav from "./components/Nav";
//import OAuth from "./components/OAuthBtn";
//=================================================================================

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Welcome} /> 
        <Route exact path="/books" component={Books} />
        <Route exact path="/questionnaire" component={Questionnaire} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> 
      </Switch>
    </div>
  </Router>;

export default App;

// QUESTION: why don't we need to type "/api/books" instead of "/books" as the exact path listed in the second and third route options?!?!
// REMINDER: "NoMatch" (located inside the React Router Class: Switch) === (is) the "Default" option in this layout, akin to "default" measure in a "Switch-Case block".
