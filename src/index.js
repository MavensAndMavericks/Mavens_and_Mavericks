// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    
    let task;
    if (fiftyFifty) {
    	task = "out";
    } else {
      task = "to bed";
    }
    
    return(
    	<h1>Tonight I am going {task}. WOOO!</h1>
    );
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('root')
);


