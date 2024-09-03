import React, { useState } from 'react';

interface NewTodoProps {
  addTodo: (todo: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim() === '') return;
    addTodo(todo);
    setTodo(''); // Clear the input field after adding a Todo
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
