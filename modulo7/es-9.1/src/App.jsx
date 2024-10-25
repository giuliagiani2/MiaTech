import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import { TodoProvider } from './context/TodoContext';
import TodoDetail from "./pages/TodoDetail";

const App = () => {

  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </TodoProvider>
  );
}

export default App;