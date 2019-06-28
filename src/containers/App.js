import React from "react";
import TodoInputs from "../components/TodoInputs.js";
import TodoLists from "../components/TodoLists.js";
import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import { TodoStoreProvider } from "../store/useLocalStore.js";
import TodoCounts from "../components/TodoCounts.js";
const App = () => {
  return (
    <TodoStoreProvider>
      <div className="App todoapp">
        <header className="header">
          <h1>Todos</h1>
          <TodoInputs />
        </header>
        <section className="main">
          <TodoLists />
        </section>
        <footer className="footer">
          <TodoCounts />
        </footer>
      </div>
    </TodoStoreProvider>
  );
};
export default App;
