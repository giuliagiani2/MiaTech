//USARE UN REF PER ACCEDERE AL VALROE DELL'INPUT
import React, { useRef } from "react";

const UncontrolledInput = () => {
    //PARTE 2
    const inputRef = useRef(null);

    //PARTE 3
    const handleSubmit = () => {
        alert(`Valore inserito nell'unput: ${inputRef.current.value}`);
    }

    //PARTE 1, PARTE 2, PARTE 3
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Invia</button>
        </form>
    )
}

export default UncontrolledInput;