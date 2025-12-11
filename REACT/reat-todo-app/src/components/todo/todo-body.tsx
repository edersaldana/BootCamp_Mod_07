import type { FormEvent } from "react";

interface Props {
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleAddTodo: (value: FormEvent) => void;
}

export const TodoBody = (props: Props) => {
  const { handleAddTodo, newTodo, setNewTodo } = props;

  return (
    <form onSubmit={handleAddTodo}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-bold ">Crea un todo</label>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="bg-slate-100 text-black rounded-sm"
          />
        </div>
        <button
          type="submit"
          className="p-3  bg-slate-100 text-black rounded-2xl w-[120px]"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};
