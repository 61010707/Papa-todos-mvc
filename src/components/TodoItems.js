import React from "react";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import { TodoStoreConsumer } from "../store/useLocalStore.js";
const TodoItems = ({ title, completed }) => {
  return (
    <TodoStoreConsumer>
      {store => {
        function handleDelete(itemDelete) {
          store.deleteTodo(itemDelete);
        }
        return (
          <>
            <input className="toggle" type="checkbox" />
            <label dangerouslySetInnerHTML={{ __html: title }} />{" "}
            <button
              className="destroy"
              onClick={handleDelete.bind(null, title)}
            />
          </>
        );
      }}
    </TodoStoreConsumer>
  );
};

export default TodoItems;
