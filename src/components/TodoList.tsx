import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onComplete, onDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
