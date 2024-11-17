import { Todo } from "./types";

export const filterTodos = (todos: Todo[], filterFn: (todo: Todo) => boolean): Todo[] => {
    return todos.filter(filterFn);
};

const todos: Todo[] = [
    { id: 1, text: "Comprare il pane", completed: false, status: TodoStatus.Pending },
    { id: 2, text: "Annaffiare le piante", completed: true, status: TodoStatus.Completed },
    { id: 3, text: "Leggere un libro", completed: false, status: TodoStatus.InProgress },
];

const completedTodos = filterTodos(todos, (todo) => todo.completed);
console.log("Todo completati: ", completedTodos);

const inProgressTodos = filterTodos(todos, (todo) => todo.status === TodoStatus.InProgress);
console.log("Todo in corso: ", inProgressTodos);

const todoWithPane = filterTodos(todos, (todo) => todo.title.includes("pane"));
console.log("Todo con 'pane' nel titolo: ", todoWithPane);