import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// TodoList.tsx
import { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');
    const handleAddTodo = (event) => {
        try {
            event.preventDefault();
            if (!newTodoText.trim())
                return;
            const newTodo = { id: Math.random(), text: newTodoText };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setNewTodoText('');
        }
        catch (error) {
            console.error(error);
        }
    };
    const handleDeleteTodo = (id) => {
        try {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        }
        catch (error) {
            console.error(error);
        }
    };
    return (_jsxs("div", { className: "max-w-md mx-auto p-4", children: [_jsx("h1", { className: "text-lg font-bold mb-4", children: "To-Do List" }), _jsx("ul", { children: todos.map((todo, index) => (_jsx(TodoItem, { todo: todo, onDelete: () => handleDeleteTodo(todo.id) }, todo.id))) }), _jsx(AddTodo, { onFormSubmit: handleAddTodo, newTodoText: newTodoText, onChange: (event) => setNewTodoText(event.target.value) })] }));
};
export default TodoList;
