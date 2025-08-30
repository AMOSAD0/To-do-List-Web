import React from "react";

export default function ButtonToDo(props) {
  return (
    <button className={props.className} onClick={props.event}>
      {props.children}
    </button>
  );
}
