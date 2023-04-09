import React from "react";
import CSS from "./model.module.css";

export default function Model(props) {
  return (
    <div>
      <div className={CSS.overlay} onClick={props.closeModel}></div>
      <div className={CSS.modal}>
        <div className={CSS.title}>{props.title}</div>
        <div className={CSS.message}>{props.message}</div>
        <button className={CSS.btn} onClick={props.closeModel}>
          Close
        </button>
      </div>
    </div>
  );
}
