import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>My Day</h1>
        <p>{new Date().toDateString()}</p>
      </header>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Add a task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodo(e.currentTarget.value);
          }}
        />
        <button className="add-todo-button" onClick={() => addTodo('New Task')}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              className="todo-checkbox"
              onChange={() => console.log('Complete task:', index)}
            />
            <span className="todo-text">{todo}</span>
            <button className="edit-todo-button">Edit</button>
            <button className="delete-todo-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
