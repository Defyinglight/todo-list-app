import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, test, expect } from 'vitest';

test('adds a new todo', () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/add a task/i);
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });

  const addButton = screen.getByText(/add/i);
  fireEvent.click(addButton);

  const todoElement = screen.getByText(/test todo/i);
  expect(todoElement).toBeInTheDocument();
});

