import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState<string[]>([]);

  // Function to add a new todo
  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
