import type { Todo } from "../../types/types";
import { TodoItem } from "./todo-item";

interface Props {
  todos: Todo[];
  toggleTodo: (value: number) => void;
  removeTodo: (value: number) => void;
}

export const TodoList = (props: Props) => {
  const { todos, toggleTodo, removeTodo } = props;

  const hasTodos = todos.length !== 0;

  return (
    <div className="flex flex-col gap-6 p-6 w-[380px] bg-slate-600 rounded-xl min-h-[120px]">
      {!hasTodos && <h3 className="">No hay todos, creemos unos...</h3>}

      {hasTodos && (
        <div className="flex flex-col gap-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              removeTodo={removeTodo}
              todo={todo}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};
