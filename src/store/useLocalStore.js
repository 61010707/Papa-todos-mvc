import React from "react";

const TodoStoreContext = React.createContext();

const TodoStoreProvider = ({ children }) => {
  const [todos, setTodos] = React.useState([]);

  const store = {
    todos,
    submitTodo: title => setTodos(todos.concat({ title })),
    deleteTodo: titleDelete => {
      const newTodos = todos.filter(index => index.title !== titleDelete);
      console.log(newTodos);
      setTodos(newTodos);
    }
  };
  return (
    <TodoStoreContext.Provider value={store}>
      {children}
    </TodoStoreContext.Provider>
  );
};

const TodoStoreConsumer = TodoStoreContext.Consumer;

export { TodoStoreProvider, TodoStoreConsumer, TodoStoreContext };
