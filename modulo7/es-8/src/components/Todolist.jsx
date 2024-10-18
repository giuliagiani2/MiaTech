//UTILIZZA USEFETCH IN UN COMPONENTE

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { useTodoContext } from "../provider/TodoProvider";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: todos, error, loading } = useFetch(API_URL);
    const { _todos, updateTodos } = useTodoContext();

    //GESTISCI IL FOCUS DELL'INPUT DI RICERCA CON USEREF
    const searchInputRef = useRef(null);

    //OTTIMIZZA LA FUNZIONE DI RICERCA CON USECALLBACK
    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    //MEMORIZZA LA LISTA DEI TO-DO FILTRATI CON USEMEMO
    const filteredTodos = useMemo(() => {
        const todosToFilter = Array.isArray(_todos) && _todos.length > 0 ? _todos : Array.isArray(todos) ? todos : [];
        return todosToFilter.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [todos, _todos, searchTerm]);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (todos) {
            updateTodos(todos);
        }
    }, [todos, updateTodos]);

    if (loading) return <p>Loading della pagina</p>
    if (error) return <p>Errore: {error}</p>

    return (
        <>
            <input type="text" placeholder="Inserisci to-do da cercare" value={searchTerm} onChange={handleSearchChange} ref={searchInputRef} />
            <ul>
                {
                    filteredTodos.map(todo => (
                        <li key={todo.id} >
                            {todo.id}
                            {todo.userId}
                            {todo.title}
                            {todo.completed ? "true" : "false"}
                        </li>
                    ))}
            </ul>
        </>
    )
}

export default TodoList;