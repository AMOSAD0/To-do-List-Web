import React, { useState } from "react";
import "./Home.css";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";
import TodoItem from "../components/TodoItem";
import ButtonToDo from "../components/Button";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
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
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Add a new task"
        />
        <ButtonToDo
          className="addBtn"
          event={() => {
            if (inputValue.trim() === "") {
              alert("Please enter a task");
              return;
            }
            const newId =
              tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
            setTasks([
              ...tasks,
              {
                id: newId,
                title: inputValue,
                completed: false,
              },
            ]);
            setInputValue("");
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

      <div className="tasks">
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
