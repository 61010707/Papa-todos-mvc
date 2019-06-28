import React from "react";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import { TodoStoreConsumer } from "../store/useLocalStore.js";
const TodoInputs = () => {
  const [textInput, setTextInput] = React.useState(" ");

  function onTextChange(event) {
    setTextInput(event.target.value);
  }
  return (
    <TodoStoreConsumer>
      {store => {
        function onEnterPress(event) {
          if (event.key === "Enter") {
            store.submitTodo(textInput);
            setTextInput("");
          }
        }
        return (
          <input
            className="new-todo"
            value={textInput}
            onChange={onTextChange}
            onKeyPress={onEnterPress}
          />
        );
      }}
    </TodoStoreConsumer>
  );
};

export default TodoInputs;
