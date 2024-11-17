"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterTodos = void 0;
const filterTodos = (todos, filterFn) => {
    return todos.filter(filterFn);
};
exports.filterTodos = filterTodos;
const todos = [
    { id: 1, text: "Comprare il pane", completed: false, status: TodoStatus.Pending },
    { id: 2, text: "Annaffiare le piante", completed: true, status: TodoStatus.Completed },
    { id: 3, text: "Leggere un libro", completed: false, status: TodoStatus.InProgress },
];
const completedTodos = (0, exports.filterTodos)(todos, (todo) => todo.completed);
console.log("Todo completati: ", completedTodos);
const inProgressTodos = (0, exports.filterTodos)(todos, (todo) => todo.status === TodoStatus.InProgress);
console.log("Todo in corso: ", inProgressTodos);
const todoWithPane = (0, exports.filterTodos)(todos, (todo) => todo.title.includes("pane"));
console.log("Todo con 'pane' nel titolo: ", todoWithPane);
