import React from "react";
import "./oAuthBtn.css";

// REMINDER: The ...props means, spread all of the passed props onto this element
  // . .. hat way we don't have to define them all individually
const oAuthBtn = props => (
  <span className="oauth-btn" {...props}>
    <a href="/auth/google">Sign In with Google</a>
  </span>
);

export default oAuthBtn;


