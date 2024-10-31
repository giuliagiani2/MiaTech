//PASSA DATI TRAMITE URL CON USEPARAMS

import { useContext } from "react";
import {  useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

const TodoDetail = () => {
    const { id } = useParams();
    const { todos } = useContext(TodoContext);
    //const navigate = useNavigate();

    const todo = todos.find(todo => todo.id === parseInt(id));

    /*useEffect(() => {
        if (!todo) {
            navigate("/");
        }
    }, [todo, navigate]);*/

    if (!todo) return <p>Todo non trovato</p>

    return (
        <>
            <h1>Dettagli del To-do selezionato</h1>
            <h2>ID:{todo.id}</h2>
            <p>{todo.title}</p>
        </>
    );
}

export default TodoDetail;