//GESTISCI LO STATO GLOBALE CON USECONTEXT
import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const updateTodos = (newTodos) => {
        setTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{ todos, updateTodos }}>
            {children}
        </TodoContext.Provider>
    );

}

export const useTodoContext = () => useContext(TodoContext);