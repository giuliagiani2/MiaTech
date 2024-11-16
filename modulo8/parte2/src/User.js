"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userr = void 0;
class Userr {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
}
exports.Userr = Userr;
