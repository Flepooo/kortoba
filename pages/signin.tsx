import type { NextPage } from "next";
import { useRouter } from "next/router";

const Course: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <div className="p-6 flex flex-col border border-spacing-1 rounded-lg">
        <span className="mb-3 font-medium text-[20px]">Enter your email :</span>
        <input
          className="border border-spacing-1 rounded-[4px] h-[34px]"
          type="email"
          name="email"
        />
        <button
          className="bg-indigo-900 text-white w-[40%] h-8 rounded-[5px] mt-4 ml-auto"
          onClick={() => {
            router.push("/");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Course;
