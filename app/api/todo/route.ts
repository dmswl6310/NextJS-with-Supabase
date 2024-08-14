import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase=await createServerSideClient();
  const result = await supabase
  .from("todo_no_rls")
  .select("*")
  .is("deleted_at", null)
  .order("id", {
    ascending: false,
  });

  console.log("ping GET API Income",result);
  return NextResponse.json({ ...result });
};
