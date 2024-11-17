//Creare una Funzione Generica per il Filtro dei Todo
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


//Utilizzare Mapped Types
type PartialTodo = {
    [p in keyof Todo]?: Todo[p];
}

const updatePartialTodo = (todos: Todo[], todoId: number, PartialTodo: PartialTodo): Todo[] => {
    return todos.map(todo => todo.id === todoId ? {
        ...todo, ...PartialTodo
    } : todo);
}

const updateTodos = updatePartialTodo(todos, 1, { text: "Comprare il latte" });
console.log(updateTodos);

const updateTodo1 = updatePartialTodo(todos, 2, { completed: false });
console.log(updateTodo1);

const updateTodo2 = updatePartialTodo(todos, 3, { text: "Andare in palestra", completed: false });
console.log(updateTodo2);


//Utilizzare Record
type TodoRecord = Record<number, Todo>;
const convertArraytoRecord = (todos: Todo[]): TodoRecord => {
    return todos.reduce((record, todo) => {
        record[todo.id] = todo;
        return record;
    }, {} as TodoRecord);
}

const todoRecord = convertArraytoRecord(todos);
console.log(todoRecord);