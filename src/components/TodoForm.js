import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
