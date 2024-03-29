import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
export default function Modal(props) {
  const ELementRoot = document.getElementById("Modal-root");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>, ELementRoot)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, ELementRoot)}
    </>
  );
}
