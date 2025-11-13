// TodoItem.tsx
import React from 'react';
import { ITodo } from './TodoList'; // <--- import the interface

interface Props {
  todo: ITodo;
  onDelete: () => void;
}

const TodoItem = ({ todo, onDelete }: Props) => (
  <li className="mb-2">
    <span>{todo.text}</span>
    <button
      onClick={onDelete}
      className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
    >
      Delete
    </button>
  </li>
);

export default TodoItem;

