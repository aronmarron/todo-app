// AddTodo.tsx
import React, { useState } from 'react';

interface Props {
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  newTodoText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddTodo = ({ onFormSubmit, newTodoText, onChange }: Props) => (
  <form onSubmit={onFormSubmit} className="mt-4">
    <input
      type="text"
      value={newTodoText}
      onChange={onChange}
      placeholder="Add a new to-do item..."
      className="w-full p-2 mb-2 border border-gray-400 rounded"
    />
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
      Add
    </button>
  </form>
);

export default AddTodo;
