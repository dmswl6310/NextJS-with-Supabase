"use client";
import {
} from "@/apis/todos-no-rls";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const {

  } = useTodosController();

  return (
    <div>
      <TodoList sharedUserFullName="test User" ownerUserId="123123" />
    </div>
  );
};

export default TodoContainer;
