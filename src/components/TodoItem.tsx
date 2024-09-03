import React, { useState } from 'react';

interface TodoItemProps {
  todo: string;
  index: number;
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, onComplete, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
    onComplete(index);
  };

  return (
    <li style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
      <span>{todo}</span>
      <button style={{ marginLeft: '10px' }} onClick={handleComplete} disabled={isCompleted}>Complete</button>
      <button style={{ marginLeft: '10px' }} onClick={() => onDelete(index)}>Delete</button>

    </li>
  );
};

export default TodoItem;
