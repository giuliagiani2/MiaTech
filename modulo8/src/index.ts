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
const assignTodoToUser = (todoId: number, userId: number): Todo => {
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


//Creare una Funzione per Ottenere i Todo di un Utente
const getUserTodos = (userId: number): Todo => {
    return todos.filter(todo => todo.userId === userId);
}
const userAllTodos = getUserTodos(42);


//Gestione degli Errori con Never
const error = (message: string): never => {
    throw new Error(message);
}


//Gestione dei Tipi Dinamici con Unknown
const parseInput = (input: unknown) => {
    if (typeof input === "string") {
        return input;
    } else if (typeof input === "number") {
        return input.toString();
    } else {
        error("Input non valido");
    }
}
parseInput("Hello world");
parseInput(4);
try {
    parseInput(true);
} catch (error) {
    console.error(error);
}