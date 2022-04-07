import React, { useState } from "react";
import AddTodo from "./AddTodo";
import List from "./List";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-list">
      <AddTodo setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
