//UTILIZZA USEFETCH IN UN COMPONENTE

import { useCallback, useMemo, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: todos, error, loading } = useFetch(API_URL);

    //OTTIMIZZA LA FUNZIONE DI RICERCA CON USECALLBACK
    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    //MEMORIZZA LA LISTA DEI TO-DO FILTRATI CON USEMEMO
    const filteredTodos = useMemo(() => {
        if (!todos) return [];
        return todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    }, [todos, searchTerm]);

    if (loading) return <p>Loading della pagina</p>
    if (error) return <p>Errore: {error}</p>

    return (
        <>
            <input type="text" placeholder="Inserisci to-do da cercare" value={searchTerm} onChange={handleSearchChange} />
            <ul>
                {filteredTodos.map(todo => (
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