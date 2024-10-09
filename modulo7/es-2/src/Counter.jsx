import React from "react";
import { useState } from "react";

//CREATO UN CONTATORE SEMPLICE
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleClickIncrement = () => {
        setCounter((_counter) => {
            return _counter + 1;
        })
    }

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleClickIncrement}>Invia</button>
        </div>
    )
}

export default Counter;