//USARE UN REF PER ACCEDERE AL VALROE DELL'INPUT
import React, { useRef } from "react";

const UncontrolledInput = () => {
    //PARTE 2
    const inputRef = useRef(null);

    //PARTE 1, PARTE 2
    return (
        <input type="text" ref={inputRef} />
    )
}

export default UncontrolledInput;