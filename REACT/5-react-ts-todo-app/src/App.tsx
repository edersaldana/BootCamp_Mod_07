import { ThemeToggler } from "./components/theme-toggler/theme-toggler";
import { TodoApp } from "./components/todo/todo-app";

function App() {
  return (
    <main className="h-screen flex flex-col gap-10 justify-center items-center">
      <TodoApp />
      <ThemeToggler />
    </main>
  );
}

export default App;
