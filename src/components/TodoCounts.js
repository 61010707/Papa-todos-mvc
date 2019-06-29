import React from "react";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import { TodoStoreContext } from "../store/useLocalStore.js";
const TodoCount = () => {
  const store = React.useContext(TodoStoreContext);
  return (
    <span className="todo-count">
      <strong>{store.todos.length}</strong> Item
      {store.todos.length > 1 ? "s" : ""} left
    </span>
  );
};
export default TodoCount;
