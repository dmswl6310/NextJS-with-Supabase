import {
  createTodos,
  deleteTodosSoft,
  getTodos,
  getTodosBySearch,
  getTodosByUserId,
  updateTodos,
} from "@/actions/todo/todo.action";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";

type TodoDto = Database["public"]["Tables"]["todo_no_rls"]["Row"];

const useTodosController = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<TodoDto[]>([]);

  const onGetTodos = async (userId = "") => {
    setLoading(true);
    try {
      const resultTodos = await getTodosByUserId(userId);
      if (resultTodos) setTodos(resultTodos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    onGetTodos();
  }, []);

  const onCreateEmptyTodos = async () => {
    await createTodos("");
    await onGetTodos();
  };

  const onUpdateTodos = async (id: number, content: string) => {
    await updateTodos(id, content);
    await onGetTodos();
  };

  const onDeleteTodos = async (id: number) => {
    await deleteTodosSoft(id);
    await onGetTodos();
  };

  const onSearchTodos = async (terms: string) => {
    if (terms) {
      const todoResult = await getTodosBySearch(terms);
      if (todoResult) setTodos(todoResult);
    } else {
      await onGetTodos();
    }
  };
  return {
    loading,
    todos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onUpdateTodos,
    onSearchTodos,
  };
};

export default useTodosController;
