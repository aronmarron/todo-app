// TodoList.tsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

interface ITodo {
  id: number;
  text: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      if (!newTodoText.trim()) return;
      const newTodo: ITodo = { id: Math.random(), text: newTodoText };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodo = (id: number) => {
    try {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">To-Do List</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} onDelete={() => handleDeleteTodo(todo.id)} />
        ))}
      </ul>
      <AddTodo
        onFormSubmit={handleAddTodo}
        newTodoText={newTodoText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodoText(event.target.value)
        }
      />
    </div>
  );
};

export default TodoList;
