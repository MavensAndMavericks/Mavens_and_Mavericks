import React from "react";
import "./OAuthBtn.css";

// REMINDER: The ...props means, spread all of the passed props onto this element
  // . .. hat way we don't have to define them all individually
const OAuthBtn = props => (
  <span className="btn btn-primary" {...props}>
    <a href="/auth/google" className=" oauth-btn">Sign In with Google</a>
  </span>
);

export default OAuthBtn;
