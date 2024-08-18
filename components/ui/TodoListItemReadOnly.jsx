"use client";
import React from "react";

const TodoListItemReadOnly = ({ todo }) => {
  return (
    <li className="min-h-[60px] bg-neutral-200 border border-black rounded-2xl font-bold group">
      <article className=" min-h-[60px] p-4 flex flex-col sm:flex-row">
        <div className="flex-1 text-[18px] cursor-pointer">{todo?.content}</div>
      </article>
    </li>
  );
};

export default TodoListItemReadOnly;
