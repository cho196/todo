import React, { useState } from "react";

export const EditTodoForm = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update task"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
