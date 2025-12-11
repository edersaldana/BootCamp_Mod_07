import { TodoHeader } from "./todo-header";
import { TodoBody } from "./todo-body";
import { TodoList } from "./todo-list";
import { useTodo } from "../../hooks/use-todo";

export const TodoApp = () => {
  const { handleAddTodo, newTodo, removeTodo, todos, toggleTodo, setNewTodo } =
    useTodo();

  return (
    <div className=" flex justify-center items-center flex-col gap-6">
      <div className="flex flex-col gap-6 p-6 max-w-[380px] bg-amber-300 dark:bg-slate-600 rounded-xl">
        <TodoHeader />
        <TodoBody
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};
