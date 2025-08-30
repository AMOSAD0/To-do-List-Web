import React, { useState } from "react";
import "./Home.css";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";
import TodoItem from "../components/TodoItem";
import ButtonToDo from "../components/Button";

export default function Home() {
  let value = "";
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: false },
  ]);
  return (
    <div className="center">
      <div>
        <input
          className="inputText"
          onChange={(e) => {
            value = e.target.value;
          }}
          type="text"
          placeholder="Add a new task"
        />
        <ButtonToDo
          className="addBtn"
          event={() => {
            if (value === "") {
              alert("Please enter a task");
              return;
            }
            setTasks([
              ...tasks,
              {
                id: tasks[tasks.length - 1].id + 1,
                title: value,
                completed: false,
              },
            ]);
            alert("Add Task");
          }}
        >
          <IoMdAdd />
        </ButtonToDo>
      </div>

      <div className="tasks">
        <p>Tasks to do </p>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <TodoItem
              key={task.id}
              isNtDone={!task.completed}
              title={task.title}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
      </div>

      <div>
        <p>Done </p>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <TodoItem
              key={task.id}
              title={task.title}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
      </div>
    </div>
  );
}
