import { Todo } from "./types";

const todos: Todo[] = [];
const nextId: number = 1;

const addTodo = (title: string): Todo => {
    const newTodo: Todo = {
        id: nextId + 1,
        title: title,
        completed: false
    }
    todos.push(newTodo);
    return newTodo;
}

//esempio
addTodo("Ciao come stai");
addTodo("Oggi è soleggiato");

console.log(todos);