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
import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();
  console.log(">>loading", loading);
  console.log(">>Todos", todos);
  return <div>TodoContainer</div>;
};

export default TodoContainer;
