import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import TodoDetail from "./pages/TodoDetail";
import store from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo/:id" element={<TodoDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;