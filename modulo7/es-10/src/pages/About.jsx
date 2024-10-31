import { useNavigate } from "react-router-dom";

const About = () => {
    //AGGIUNGI NAVIGAZIONE PROGRAMMATA CON USENAVIGATE
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/");
    }

    return (
        <>
            <h1>About</h1>
            <p>Qui ci sono le varie informazioni riguardanti l'esercizio fatto con vite in React.</p>
            <p>Installato React Router e create le pagine Home e About</p>
            <button onClick={handleClickHome}>Vai alla Home</button>
        </>
    );
}

export default About;