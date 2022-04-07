import React from "react";

export default function List({ todos }) {
  return (
    <div>
      <h1>THIS IS THE LIST</h1>
      <ul>
        {todos.map((todo) => {
          {
            return (
              <div className="todo-card">
                <li className="todo">
                  {todo} <span className="x">[x]</span>
                </li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
