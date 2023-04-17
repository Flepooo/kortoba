import { createClient } from "@supabase/supabase-js";

let supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
let serviceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const supabase = createClient(supabaseURL, serviceKey);
