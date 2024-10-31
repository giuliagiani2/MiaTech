//PASSA DATI TRAMITE URL CON USEPARAMS

import { useContext } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
    const { id } = useParams();
    const todo=useSelector(state=>state.todo.find(todo=>todo.id===parseInt(id)));

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