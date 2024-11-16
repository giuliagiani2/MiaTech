"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const user = [];
const todos = [];
let nextId = 1;
const addTodo = (title, metadata) => {
    const newTodo = {
        id: nextId,
        title: title,
        completed: false,
        metadata: metadata,
        status: types_1.TodoStatus.Pending
    };
    todos.push(newTodo);
    nextId++;
    return newTodo;
};
//Utilizzare Tipi Utility
const updateTodo = (todoId, updateProperties) => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        Object.assign(todo, updateProperties);
        return todo;
    }
    return null;
};
//esempio con addTodo
addTodo("Ciao come stai", { priority: "high" });
addTodo("Oggi è soleggiato");
console.log(todos);
//esempio con updateTodo
updateTodo(1, { title: "Oggi è nuvoloso" });
updateTodo(2, { completed: true, metadata: "lower" });
//Associare Todo con Utenti
const assignTodoToUser = (todoId, userId) => {
    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        console.error(`Todo con id ${todoId} non trovato`);
        return null;
    }
    todo.userId = userId;
    return todo;
};
const assignedTodo = assignTodoToUser(1, 42);
const assignedTodo1 = assignTodoToUser(2, 42);
const assignedTodo2 = assignTodoToUser(3, 30);
console.log(assignedTodo);
console.log(assignedTodo1);
console.log(assignedTodo2);
//Creare una Funzione per Ottenere i Todo di un Utente
const getUserTodos = (userId) => {
    return todos.filter(todo => todo.userId === userId);
};
const userAllTodos = getUserTodos(42);
//Gestione degli Errori con Never
const error = (message) => {
    throw new Error(message);
};
//Gestione dei Tipi Dinamici con Unknown
const parseInput = (input) => {
    if (typeof input === "string" || typeof input === "number") {
        return {
            id: nextId++,
            title: input.toString(),
            completed: false
        };
    }
    else {
        error("Input non valido");
    }
};
parseInput("Hello world");
parseInput(4);
try {
    parseInput(true);
}
catch (error) {
    console.error(error);
}
//Utilizzare Array Readonly
const user1 = {
    id: 1,
    name: "Mario Rossi",
    email: "rossi.mario@gmail.com",
    todos: [
        {
            id: 1,
            title: "Ciao come stai",
            completes: false
        },
        {
            id: 2,
            title: "Oggi è soleggiato",
            completes: false
        }
    ]
};
user1.todos[0].completed = true;
//Utilizzare Tuple
const getTodoSummary = (todo) => {
    return [todo.title, todo.completed];
};
const todo1 = { title: "Ciao come stai", completed: false };
const todo2 = { title: "Oggi è soleggiato", completed: false };
console.log(getTodoSummary(todo1));
console.log(getTodoSummary(todo2));
//Finalizzare il Progetto
const createProject = (id, name, users, todos) => {
    return {
        id: id,
        name: name,
        users: users,
        todos: todos
    };
};
//esempio dei dati per User e Todo (Project)
const user2 = { id: 3, name: "Alice Verdi", email: "verdi.alice@gmail.com" };
const user3 = { id: 4, name: "Nome Cognome", email: "cognome.nome@gmail.com" };
const todo3 = { id: 3, title: "Fare la spesa", completed: true };
const todo4 = { id: 4, title: "Innaffiare le piante", completed: false };
const project = createProject(1, "Primo progetto", [user2, user3], [todo3, todo4]);
console.log(project);
//PARTE 2
//Funzione per Aggiornare lo Stato del Todo
const updateTodoStatus = (todoId, status) => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.status = status;
        return todo;
    }
    return null;
};
const updateTodo1 = updateTodoStatus(1, types_1.TodoStatus.InProgress);
console.log(updateTodo1);
const updateTodo2 = updateTodoStatus(2, types_1.TodoStatus.Completed);
console.log(updateTodo2);
const updateTodoNotFound = updateTodoStatus(1000, types_1.TodoStatus.Completed);
console.log(updateTodoNotFound);
