import TodoList from "./components/Todolist";
import { TodoProvider } from "./provider/TodoProvider";

const App = () => {

  return (
    <>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  )
}

export default App;