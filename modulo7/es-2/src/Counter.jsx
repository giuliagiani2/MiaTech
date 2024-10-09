import React from "react";
import { useState } from "react";

//CREATO UN CONTATORE SEMPLICE
const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Counter: 0</p>
        </div>
    )
}

export default Counter;