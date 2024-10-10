import React, { useState } from "react";

const LoginForm = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleInputUsername = (event) => {
        setUser(event.target.value);
    }
    const handleInputPassword = (event) => {
        setPass(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username: ${user} e Password: ${pass} inserite`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={user} onChange={handleInputUsername} />
            <label>Username</label>
            <input type="text" name="password" value={pass} onChange={handleInputPassword} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;