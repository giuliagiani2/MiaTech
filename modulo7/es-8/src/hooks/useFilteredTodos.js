import { useEffect, useState } from "react"


export const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        if (todos) {
            const results = todos.filter(todo =>
                todo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredTodos(results);
        }
    }, [todos, searchTerm]);

    return filteredTodos;
}