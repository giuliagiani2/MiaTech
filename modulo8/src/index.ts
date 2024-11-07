import { Todo } from "./types";

const todos: Todo[] = [];
let nextId: number = 1;

const addTodo = (title: string): Todo => {
    const newTodo: Todo = {
        id: nextId,
        title: title,
        completed: false
    }
    todos.push(newTodo);
    nextId++;
    return newTodo;
}

//esempio
addTodo("Ciao come stai");
addTodo("Oggi è soleggiato");

console.log(todos);


//Associare Todo con Utenti
const assignTodoToUser = (todoId: number, userId: number) => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.userId = userId;
        return todo;
    }
    return null;
}

const assignedTodo = assignTodoToUser(1, 42);
const assignedTodo1 = assignTodoToUser(2, 42);
const assignedTodo2 = assignTodoToUser(3, 30);

console.log(assignedTodo);
console.log(assignedTodo1);
console.log(assignedTodo2);