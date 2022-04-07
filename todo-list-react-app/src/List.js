import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

export default function List({ todos, setTodos }) {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("e:", e);
    setTodos("");
  };

  if (todos.length !== 0) {
    return (
      <div className="list">
        <h2>CURRENT TODOS</h2>
        <ul>
          {todos.map((todo) => {
            {
              return (
                <div className="todo-card">
                  <li className="todo" key={todo}>
                    {todo}
                    <button className="delete-btn" onClick={handleDelete}>
                      <span className="trash-icon">
                        <BsFillTrashFill />
                      </span>
                    </button>
                  </li>
                </div>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
