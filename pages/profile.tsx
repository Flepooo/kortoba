import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const Profile: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    email: "Loading",
  });
  useEffect(() => {
    const getUser = async () => {
      let { data }: any = await supabase.auth.getUser();
      console.log(data.user);
      setLoading(false);
      setUser(data.user);
    };
    getUser();
  }, []);
  return (
    <div className="flex min-h-screen px-10 flex-col pt-[100px]">
      <div className="flex flex-col">
        <span>Email : {user && user.email}</span>
        <span>
          IS A <span className="text-[#ffd700]">CLUB MEMBER</span>
        </span>
        <div className="w-[100%] flex mt-14">
          <span>Your Courses : </span>
          <span
            className="ml-auto underline cursor-pointer"
            onClick={() => {
              router.push("/addcourse");
            }}
          >
            Add One
          </span>
        </div>
        <div className="grid grid-cols-4 gap-10 pt-[20px] pb-10 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          <div className="h-[190px] rounded-lg border border-spacing-1 cursor-pointer">
            <div className="h-[100%] p-4 flex flex-col">
              <span className="text-[#333]">Level 1</span>
              <span className="block text-[22px]">differential equations </span>
              <span className="block text-[18px] font-medium">MT201</span>
              <span className="text-[#333] mt-auto">Dr. Nasr</span>
            </div>
          </div>
          <div className="h-[190px] rounded-lg border border-spacing-1 cursor-pointer">
            <div className="h-[100%] p-4 flex flex-col">
              <span className="text-[#333]">Level 1</span>
              <span className="block text-[22px]">differential equations </span>
              <span className="block text-[18px] font-medium">MT201</span>
              <span className="text-[#333] mt-auto">Dr. Nasr</span>
            </div>
          </div>
          <div className="h-[190px] rounded-lg border border-spacing-1 cursor-pointer">
            <div className="h-[100%] p-4 flex flex-col">
              <span className="text-[#333]">Level 1</span>
              <span className="block text-[22px]">differential equations </span>
              <span className="block text-[18px] font-medium">MT201</span>
              <span className="text-[#333] mt-auto">Dr. Nasr</span>
            </div>
          </div>
          <div className="h-[190px] rounded-lg border border-spacing-1 cursor-pointer">
            <div className="h-[100%] p-4 flex flex-col">
              <span className="text-[#333]">Level 1</span>
              <span className="block text-[22px]">differential equations </span>
              <span className="block text-[18px] font-medium">MT201</span>
              <span className="text-[#333] mt-auto">Dr. Nasr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
