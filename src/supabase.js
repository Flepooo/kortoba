import { createClient } from "@supabase/supabase-js";

let supabaseURL = "https://zhreulihvpoarexyrgyu.supabase.co" || "";
let serviceKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpocmV1bGlodnBvYXJleHlyZ3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0MzA5MDIsImV4cCI6MTk5MzAwNjkwMn0.GrlmAiME4sap39EMEwhysPdndWwpN11qNbMPQB4N3II" ||
  "";
const supabase = createClient(supabaseURL, serviceKey);

export { supabase };
