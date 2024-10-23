import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList"; // Assicurati di importare il componente
import { TodoProvider } from './context/TodoContext'; // Assicurati di importare il provider

const App = () => {

  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </TodoProvider>
  );
}

export default App;