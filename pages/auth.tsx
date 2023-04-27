import type { NextPage } from "next";
import { supabase } from "../lib/supabase";
import { useState } from "react";

const Auth: NextPage = () => {
  const handleBtn = () => {
    alert("Check your email");
  };

  const [email, setEmail] = useState("");

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "https://kortoba.vercel.app/",
      },
    });
    if (error) {
      alert(error.message);
    } else {
      alert("link sent");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="h-auto md:border rounded-xl py-8 px-8 mt-32 sm:px-4">
        <span className="font-semibold text-xl">Sign In</span>
        <span className="block my-5">
          Welcome back! Please enter your email.
        </span>
        <input
          className="border rounded-lg px-3 h-10 md:w-[450px] w-[100%]"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="block mt-10 border py-1 px-4 border-gray-500 rounded-lg"
          onClick={signInWithEmail}
        >
          Send Link
        </button>
      </div>
    </div>
  );
};

export default Auth;
