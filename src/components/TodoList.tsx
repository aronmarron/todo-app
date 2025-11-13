// TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

export interface ITodo {   // <-- export so other components can use it
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newTodoText.trim()) return;

    const newTodo: ITodo = { id: Math.random(), text: newTodoText };
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setNewTodoText('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">To-Do List</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={() => handleDeleteTodo(todo.id)} />
        ))}
      </ul>
      <AddTodo
        onFormSubmit={handleAddTodo}
        newTodoText={newTodoText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodoText(e.target.value)}
      />
    </div>
  );
};

export default TodoList;

