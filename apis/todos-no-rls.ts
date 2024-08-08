"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

// todoList 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todo_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", {
      ascending: false,
    });
  return result.data;
};
