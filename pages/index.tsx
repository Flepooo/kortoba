import type { NextPage } from "next";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

const Home: NextPage = ({ courses }: any) => {
  console.log(courses);

  const router = useRouter();
  return (
    <div className="mx-auto min-h-screen w-[full]">
      <div className="grid grid-cols-4 gap-10 pt-[100px] pb-10 px-10 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {courses &&
          courses.map((course: any) => (
            <div
              key={course.id}
              className="h-[190px] rounded-lg border border-spacing-1 cursor-pointer"
              onClick={() => router.push("/course/" + course.slug)}
            >
              <div className="h-[100%] p-4 flex flex-col">
                <span className="text-[#333]">Level {course.level.name}</span>
                <span className="block text-[22px]">{course.name}</span>
                <span className="block text-[18px] font-medium">
                  {course.code}
                </span>
                <span className="text-[#333] mt-auto">
                  {course.profile.email.substring(
                    0,
                    course.profile.email.indexOf("@")
                  )}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data: courses } = await supabase
    .from("course")
    .select("id, name, code, slug, level(name), profile(*)");

  return {
    props: {
      courses,
    },
  };
};
