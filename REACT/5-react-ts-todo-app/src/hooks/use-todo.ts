import { useState, type FormEvent } from "react";
import type { Todo } from "../types/types";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();
    const text = newTodo.trim();
    const todo: Todo = { id: Date.now(), text: text, completed: false };

    setTodos((prev) => [todo, ...prev]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    newTodo,
    toggleTodo,
    removeTodo,
    setNewTodo,
    handleAddTodo,
  };
};
