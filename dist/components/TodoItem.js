import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TodoItem = ({ todo, onDelete }) => (_jsxs("li", { className: "mb-2", children: [_jsx("span", { children: todo.text }), _jsx("button", { onClick: onDelete, className: "ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded", children: "Delete" })] }));
export default TodoItem;
