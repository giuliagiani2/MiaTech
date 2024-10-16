//UTILIZZA USEFETCH IN UN COMPONENTE

import { useFetch } from "../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
    const { data, error, loading } = useFetch(API_URL);

    if (loading) return <p>Loading della pagina</p>
    if (error) return <p>Errore: {error}</p>

    return (
        <>
            <ul>
                {data.map(todo => (
                    <li key={todo.id}>
                        {todo.id}    
                        {todo.userId}    
                        {todo.title}   
                        {todo.complite ? "true" : "false"}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;