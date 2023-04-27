import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const Course: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [lectures, setLectures] = useState({
    lecture: [],
  });

  useEffect(() => {
    const getLectures = async () => {
      let { data }: any = await supabase
        .from("course")
        .select("id, name, code, slug, level(name), profile(*), lecture(*)")
        .eq("slug", slug)
        .single();

      setLectures(data);
      console.log(data);
    };
    getLectures();
  }, []);

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
    <div className="flex min-h-screen flex-col items-center">
      <span className="mr-auto mt-[100px] ml-12 mb-10 font-semibold text-xl">
        Mt201 | Math analysis {slug}
      </span>
      {lectures &&
        lectures.lecture.map((leco: any) => (
          <span
            key={leco.id}
            className="mr-auto ml-12 mb-5 cursor-pointer underline"
            onClick={() => {
              window.open(
                "https://zhreulihvpoarexyrgyu.supabase.co/storage/v1/object/public/lectures/pdfs/" +
                  leco.url
              );
            }}
          >
            {leco.name}
          </span>
        ))}

      {user.email == "mohamedhoshame@gmail.com" && (
        <span
          className="mr-auto ml-12 mb-5 cursor-pointer underline"
          onClick={() => {
            router.push("/addlecture/" + slug);
          }}
        >
          Add Lecture +
        </span>
      )}
    </div>
  );
};

export default Course;
