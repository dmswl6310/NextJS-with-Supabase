"use client";
import {
  createTodos,
  deleteTodosHard,
  deleteTodosSoft,
  getTodos,
  getTodosById,
  getTodosBySearch,
  updateTodos,
} from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    deleteTodosHard(12);
  }, []);
  return <div>TodoContainer</div>;
};

export default TodoContainer;
