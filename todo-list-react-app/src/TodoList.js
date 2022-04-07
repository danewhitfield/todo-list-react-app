import React from "react";
import AddTodo from "./AddTodo";
import Item from "./Item";
import List from "./List";

export default function TodoList() {
  const todos = ["shopping", "clean", "wash car"];
  return (
    <div className="todo-list">
      <AddTodo />
      <Item />
      <List todos={todos} />
    </div>
  );
}
