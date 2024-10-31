import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleGoToHome = () => {
        navigate("/");
    }

    return (
        <>
            <h1>About</h1>
            <p>Qui ci sono le varie informazioni riguardanti l'esercizio fatto con vite in React.</p>
            <p>Installato React Router e create le pagine Home e About</p>
            <button onClick={handleGoToHome}>Vai alla Home</button>
        </>
    );
}

export default About;