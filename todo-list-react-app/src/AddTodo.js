import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

export default function AddTodo({ setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currTodos) => {
      const newTodos = [...currTodos];
      newTodos.push(newTodo);
      return newTodos;
    });
    setNewTodo("");
  };

  return (
    <div className="add-todo-container">
      {/* <h2 className="add-todo-title">CREATE A TODO</h2> */}
      <form onSubmit={handleSubmit} action="">
        <div className="input-box">
          <input
            type="text"
            placeholder="What's on the agenda?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            required
          />
          <button className="submit-btn">
            <BsFillPlusSquareFill />
          </button>
        </div>
      </form>
    </div>
  );
}
