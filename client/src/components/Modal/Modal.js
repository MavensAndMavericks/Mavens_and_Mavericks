import React from "react";
import $ from "jquery";
import "./Modal.css";

const Modal = () =>
$('#modal1').modal('open');


<div className="jsxDiv">
<a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

<div id="modal1" className="modal">
  <div className="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
 </div>
</div>



export default Modal;