import type { Todo } from "../../types/types";

interface Props {
  todo: Todo;
  toggleTodo: (value: number) => void;
  removeTodo: (value: number) => void;
}

export const TodoItem = (props: Props) => {
  const { todo, removeTodo, toggleTodo } = props;

  return (
    <div key={todo.id} className="flex gap-4">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          toggleTodo(todo.id);
        }}
      />

      <span className={`text-slate-100 ${todo.completed && "line-through"}`}>
        {todo.text}
      </span>

      <button
        onClick={() => removeTodo(todo.id)}
        className="w-fit rounded-lg p-0 text-xs bg-slate-100 ml-auto"
      >
        Borrar
      </button>
    </div>
  );
};
