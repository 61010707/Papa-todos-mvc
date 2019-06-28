import React from "react";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import { TodoStoreConsumer } from "../store/useLocalStore.js";
import TodoItems from "./TodoItems.js";
const TodoList = () => {
  return (
    <TodoStoreConsumer>
      {store => {
        return (
          <ul className="todo-list">
            {store.todos.map(todo => (
              <li>
                <TodoItems {...todo} />
              </li>
            ))}
          </ul>
        );
      }}
    </TodoStoreConsumer>
  );
};

export default TodoList;
