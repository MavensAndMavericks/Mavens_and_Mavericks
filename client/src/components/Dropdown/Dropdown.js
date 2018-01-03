import React from "react";
import OAuthBtn from "../OAuthBtn";

const Dropdown = props => (
  <div class="dropdown">

    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Dropdown
      <span className="caret"></span>
    </button>

    <OAuthBtn/>

    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
      <li><a href="/">Action</a></li>
      <li><a href="/">Another action</a></li>
      <li><a href="/">Something else here</a></li>
      <li role="separator" className="divider"></li>
      <li><a href="/">Separated link</a></li>
    </ul>

  </div>
);
export default Dropdown;