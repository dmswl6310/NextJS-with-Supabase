"use client";
import { pingAction } from "@/actions/ping/ping.action";
import { getTodoAction } from "@/actions/todo/todo.action";
import React from "react";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    console.log("result", result);
  };
  return (
    <div>
      <button onClick={handleClick}>test server actions</button>
    </div>
  );
};

export default ClientComponentTest;

// 1. ServerActions + RouterHandler
// 2. ServerActions + SSR
// 3. ServerActions + CSR
