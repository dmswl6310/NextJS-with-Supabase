import { getTodos } from "@/actions/todo/todo.action";
import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createServerSideClient();
  const result = await getTodos();
  console.log("ping GET API Income", result);
  return NextResponse.json({ ...result });
};
