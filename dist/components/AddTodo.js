import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AddTodo = ({ onFormSubmit, newTodoText, onChange }) => (_jsxs("form", { onSubmit: onFormSubmit, className: "mt-4", children: [_jsx("input", { type: "text", value: newTodoText, onChange: onChange, placeholder: "Add a new to-do item...", className: "w-full p-2 mb-2 border border-gray-400 rounded" }), _jsx("button", { type: "submit", className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded", children: "Add" })] }));
export default AddTodo;
