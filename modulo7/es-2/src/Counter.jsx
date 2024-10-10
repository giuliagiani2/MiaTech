import React from "react";
import { useState, useEffect } from "react";

//CREATO UN CONTATORE SEMPLICE
const Counter = () => {
    const [counter, setCounter] = useState(0);

    //INCREMENTA CONTATORE
    const handleClickIncrement = () => {
        setCounter((_counter) => {
            return _counter + 1;
        })
    }

    //DECREMENTA CONTATORE
    const handleClickDecrement = () => {
        setCounter((counter) => {
            return counter - 1;
        })
    }

    //RESETTA CONTATORE
    const handleClickReset = () => {
        setCounter(0);
    }

    //SINCRONIZZA IL TITOLO CON IL CONTATORE
    useEffect(() => {
        document.title = `Counter ${counter}`;
    }, [counter]);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handleClickIncrement}>Incrementa</button>
            <button onClick={handleClickDecrement}>Decrementa</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
    )
}

export default Counter;