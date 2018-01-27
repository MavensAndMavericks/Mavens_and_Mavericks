//React Library imports:
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Page imports:
import Welcome from "./pages/Welcome"
import MavenQuestionnaire from "./pages/MavenQuestionnaire";
import MaverickQuestionnaire from "./pages/MaverickQuestionnaire";
import MaverickProfile from "./pages/MaverickProfile";
import MavenProfile from "./pages/MavenProfile";
import AboutUs from "./pages/AboutUs";
import MentorDef from "./pages/MentorDef";
import ExampleProj from "./pages/ExampleProj";
import QandA from "./pages/QandA";
import MeetPage from "./pages/MeetPage";
//import CommentPage from "./pages/CommentPage;

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
        <Route exact path="/maverickquestionnaire" component={MaverickQuestionnaire} />
        <Route exact path="/mavenquestionnaire" component={MavenQuestionnaire} />
       {/* <Route exact path="/api/questionnaires/:id/:type/project/:projectname"  component={CommentPage} />*/}
        <Route exact path="/api/questionnaires/:id/:type" component={MavenProfile} />
        <Route exact path="/api/questionnaires/:id/:type/maverick" component={MaverickProfile} />
        
        <Route exact path="/mavensandmavericks" component={MeetPage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/mentorsarekey" component={MentorDef} />
        <Route exact path="/openprojects" component={ExampleProj} />
        <Route exact path="/QandA" component={QandA} />

        <Route component={NoMatch} />        
      </Switch>
    </div>
  </Router>

export default App;

// QUESTION: why don't we need to type "/api/books" instead of "/books" as the exact path listed in the second and third route options?!?!
// REMINDER: "NoMatch" (located inside the React Router Class: Switch) === (is) the "Default" option in this layout, akin to "default" measure in a "Switch-Case block".
