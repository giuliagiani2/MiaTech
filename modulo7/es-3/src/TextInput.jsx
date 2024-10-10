//GESTIRE INPUT DI TESTO PER AGGIORNARE LO STATO
import React, { useState } from "react";

const TextInput = () => {
    const [value, setValue] = useState("");
    const handleInput = (event) => {
        setValue(event.target.value);
    }

    return (
        <input type="text" value={value} onInput={handleInput} />
    )
}

export default TextInput;