//UTILIZZA USEFETCH IN UN COMPONENTE

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";
import { useTodoContext } from "../provider/TodoProvider";

const TodoList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { todos, loading, error } = useTodoContext();

    //GESTISCI IL FOCUS DELL'INPUT DI RICERCA CON USEREF
    const searchInputRef = useRef(null);

    //OTTIMIZZA LA FUNZIONE DI RICERCA CON USECALLBACK
    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    //MEMORIZZA LA LISTA DEI TO-DO FILTRATI CON USEMEMO
    const filteredTodos = useMemo(() => {
        return todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [todos, searchTerm]);

    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

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