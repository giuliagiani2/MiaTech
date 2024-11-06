//PASSA DATI TRAMITE URL CON USEPARAMS

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

const TodoDetail = () => {
    const { id } = useParams();
    const { todos } = useContext(TodoContext);

    const todo = todos.find(todo => todo.id === parseInt(id));

    if (!todo) return <p>To-do non trovato</p>

    return (
        <>
            <h1>Dettagli del To-do selezionato</h1>
            <h2>{todo.title}</h2>
            <p>ID:{todo.id}</p>
        </>
    );
}

export default TodoDetail;