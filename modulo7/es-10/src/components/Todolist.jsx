import { useMemo, useRef, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setTodo, toggleTodo } from "../store/todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo);
    const [searchParams, setSearchParams] = useSearchParams();

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

    const inputRef = useRef(null);

    const searchTerm = searchParams.get("search") || "";

    const handleSearchChange = (e) => {
        setSearchParams({ search: e.target.value });
    };

    const filteredTodos = useMemo(() => {
        return todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [todos, searchTerm]);

    useEffect(() => {
        if (data) {
            dispatch(setTodo(data));
        }
    }, [data, dispatch]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    }

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
                    <li key={todo.id}>
                        <Link to={`/todo/${todo.id}`}>
                            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                                {todo.title}
                            </span>
                        </Link>
                        <button onClick={() => handleToggleTodo(todo.id)}>
                            {todo.completed ? "Incomplete" : "Complete"}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;