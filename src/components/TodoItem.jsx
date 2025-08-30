import React from "react";
import { MdDeleteOutline, MdDone } from "react-icons/md";
import ButtonToDo from "./Button";

export default function TodoItem(props) {
  return (
    <div className="task">
      <p className="titleTask">{props.title}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        {props.isNtDone && (
          <ButtonToDo
            className="doneBtn"
            event={() => {
              props.setTasks(
                props.tasks.map((t) =>
                  t.id === props.task.id ? { ...t, completed: true } : t
                )
              );
              alert("Task Done");
            }}
          >
            <MdDone />
          </ButtonToDo>
        )}

        <ButtonToDo
          className="deleteBtn"
          event={() => {
            props.setTasks(props.tasks.filter((t) => t.id !== props.task.id));
            alert("Delete Task");
          }}
        >
          <MdDeleteOutline />
        </ButtonToDo>
      </div>
    </div>
  );
}
