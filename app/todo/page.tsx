import { pingAction } from "@/actions/ping/ping.action";
import React from "react";
import ClientComponentTest from "./components/ClientComponentTest";
import { getTodoAction } from "@/actions/todo/todo.action";

const page = async () => {
  console.log(">> SSR start");
  const result = await getTodoAction();
  // const result=await pingAction();

  console.log(">> SSR End");
  return (
    <div>
      todo page {JSON.stringify(result)}
      <ClientComponentTest />
    </div>
  );
};

export default page;
