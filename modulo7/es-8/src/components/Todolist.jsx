//UTILIZZA USEFETCH IN UN COMPONENTE

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data: todos, error, loading } = useFetch(API_URL);
    const filteredTodos = useFilteredTodos(todos, searchTerm);

    if (loading) return <p>Loading della pagina</p>
    if (error) return <p>Errore: {error}</p>

    return (
        <>
            <input type="text" placeholder="Inserisci to-do da cercare" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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