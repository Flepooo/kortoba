import type { NextPage } from "next";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

const Home: NextPage = ({ courses }: any) => {
  console.log(courses);

  //console.log(supabase.auth.getUser());
  const router = useRouter();
  return (
    <div className="mx-auto min-h-screen w-[full]">
      <div className="grid grid-cols-4 gap-10 pt-[100px] pb-10 px-10 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        <div
          className="h-[380px] rounded-lg border border-spacing-1 cursor-pointer"
          onClick={() => {
            router.push("/course");
          }}
        >
          <div className="h-[50%]"></div>
          <div className="h-[50%] p-4 flex flex-col">
            <span className="text-[#333]">Level 1</span>
            <span className="block text-[22px]">differential equations </span>
            <span className="block text-[18px] font-medium">MT201</span>
            <span className="text-[#333] mt-auto">Dr. Nasr</span>
          </div>
        </div>
        <div className="h-[380px] rounded-lg border border-spacing-1">
          <div className="h-[50%]"></div>
          <div className="h-[50%] p-4 flex flex-col">
            <span className="text-[#333]">Level 2</span>
            <span className="block text-[22px]">
              System analysis and design
            </span>
            <span className="block text-[18px] font-medium">MT201</span>
            <span className="text-[#333] mt-auto">Dr. Nasr</span>
          </div>
        </div>
        <div className="h-[380px] rounded-lg border border-spacing-1">
          <div className="h-[50%]"></div>
          <div className="h-[50%] p-4 flex flex-col">
            <span className="text-[#333]">Level 3</span>
            <span className="block text-[22px]">differential equations </span>
            <span className="block text-[18px] font-medium">MT201</span>
            <span className="text-[#333] mt-auto">Dr. Nasr</span>
          </div>
        </div>
        <div className="h-[380px] rounded-lg border border-spacing-1">
          <div className="h-[50%]"></div>
          <div className="h-[50%] p-4 flex flex-col">
            <span className="text-[#333]">Level 4</span>
            <span className="block text-[22px]">differential equations </span>
            <span className="block text-[18px] font-medium">MT201</span>
            <span className="text-[#333] mt-auto">Dr. Nasr</span>
          </div>
        </div>
        <div className="h-[380px] rounded-lg border border-spacing-1">
          <div className="h-[50%]"></div>
          <div className="h-[50%] p-4 flex flex-col">
            <span className="text-[#333]">Level 1</span>
            <span className="block text-[22px]">differential equations </span>
            <span className="block text-[18px] font-medium">MT201</span>
            <span className="text-[#333] mt-auto">Dr. Nasr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
export const getStaticProps = async () => {
  const { data: courses } = await supabase.from("course").select("*");

  return {
    props: {
      courses,
    },
  };
};
*/
