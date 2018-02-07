import React from "react";

export const FormBtnModal = props =>
  <button {...props} className="btn btn-success">
    {props.children}
  </button>;