//GESTISCI LO STATO GLOBALE CON USECONTEXT
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchTodos = async () => {
        if (!loading) setLoading(true);
        if (error) setError(false);

        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error("Errore durante la chiamata");
            }
            const result = await response.json();
            setTodos(result);
        } catch (error) {
            setError(message.error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <TodoContext.Provider value={{ todos, loading, error }}>
            {children}
        </TodoContext.Provider>
    );

}

export const useTodoContext = () => useContext(TodoContext);