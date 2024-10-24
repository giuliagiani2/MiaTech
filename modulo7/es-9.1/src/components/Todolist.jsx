import { useState, useMemo, useRef, useCallback, useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const [searchTerm, setSearchTerm] = useState('');

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

    const inputRef = useRef(null);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const filteredTodos = useMemo(() => {
        return todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [todos, searchTerm]);


    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data, setTodos]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <input
                type="text"
                ref={inputRef}
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search todos..."
            />
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;