import { Todo, User, Project } from "./types";

const user: User[] = [];

const todos: Todo[] = [];
let nextId: number = 1;

const addTodo = (title: string, metadata?: string | object): Todo => {
    const newTodo: Todo = {
        id: nextId,
        title: title,
        completed: false,
        metadata: metadata
    }
    todos.push(newTodo);
    nextId++;
    return newTodo;
}


//Utilizzare Tipi Utility
const updateTodo = (todoId: number, updateProperties: Partial<Todo>): Todo | null => {
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        Object.assign(todo, updateProperties);
        return todo;
    }
    return null;
}


//esempio con addTodo
addTodo("Ciao come stai", { priority: "high" });
addTodo("Oggi è soleggiato");

console.log(todos);

//esempio con updateTodo
updateTodo(1, { title: "Oggi è nuvoloso" });
updateTodo(2, { completed: true, metadata: "lower" })


//Associare Todo con Utenti
const assignTodoToUser = (todoId: number, userId: number): Todo | null => {
    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        console.error(`Todo con id ${todoId} non trovato`);
        return null;
    }
    todo.userId = userId;
    return todo;
}

const assignedTodo = assignTodoToUser(1, 42);
const assignedTodo1 = assignTodoToUser(2, 42);
const assignedTodo2 = assignTodoToUser(3, 30);

console.log(assignedTodo);
console.log(assignedTodo1);
console.log(assignedTodo2);


//Creare una Funzione per Ottenere i Todo di un Utente
const getUserTodos = (userId: number): Todo[] => {
    return todos.filter(todo => todo.userId === userId);
}
const userAllTodos = getUserTodos(42);


//Gestione degli Errori con Never
const error = (message: string): never => {
    throw new Error(message);
}


//Gestione dei Tipi Dinamici con Unknown
const parseInput = (input: unknown): Todo => {
    if (typeof input === "string" || typeof input === "number") {
        return {
            id: nextId++,
            title: input.toString(),
            completed: false
        };
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

//Utilizzare Array Readonly
const user1: User = {
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
}
user1.todos[0].completed = true;


//Utilizzare Tuple
const getTodoSummary = (todo: Todo): [string, boolean] => {
    return [todo.title, todo.completed];
}
const todo1: Todo = { title: "Ciao come stai", completed: false };
const todo2: Todo = { title: "Oggi è soleggiato", completed: false };

console.log(getTodoSummary(todo1));
console.log(getTodoSummary(todo2));


//Finalizzare il Progetto
const createProject = (id: number, name: string, users: User[], todos: Todo[]) => {
    return {
        id: id,
        name: name,
        users: users,
        todos: todos
    }
}
//esempio dei dati per User e Todo (Project)
const user2: User = { id: 3, name: "Alice Verdi", email: "verdi.alice@gmail.com" };
const user3: User = { id: 4, name: "Nome Cognome", email: "cognome.nome@gmail.com" };
const todo3: Todo = { id: 3, title: "Fare la spesa", completed: true };
const todo4: Todo = { id: 4, title: "Innaffiare le piante", completed: false };
const project = createProject(1, "Primo progetto", [user2, user3], [todo3, todo4]);
console.log(project);