import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState<{ text: string; isCompleted: boolean }[]>([]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index: number, newText: string) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
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
            if (e.key === 'Enter') {
              addTodo(e.currentTarget.value);
              e.currentTarget.value = '';
            }
          }}
        />
        <button
          className="add-todo-button"
          onClick={() => {
            const input = document.querySelector('.todo-input') as HTMLInputElement;
            addTodo(input.value);
            input.value = '';
          }}
        >
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="todo-item"
            style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
          >
            <input
              type="checkbox"
              className="todo-checkbox"
              checked={todo.isCompleted}
              onChange={() => completeTodo(index)}
            />
            <span className="todo-text">{todo.text}</span>
            <button
              className="edit-todo-button"
              onClick={() => {
                const newText = prompt('Edit task:', todo.text);
                if (newText) {
                  editTodo(index, newText);
                }
              }}
            >
              Edit
            </button>
            <button className="delete-todo-button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
