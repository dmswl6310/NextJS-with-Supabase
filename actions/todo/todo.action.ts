"use server";

import { createServerSideClient } from "@/lib/supabase";

export const getTodoAction=async()=>{
    const supabase=await createServerSideClient();
    const result = await supabase
    .from("todo_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", {
      ascending: false,
    });

    console.log("getTodoaction income",result)
    return result.data;
}