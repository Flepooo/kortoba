import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AddLecture: NextPage = () => {
  const [newUUID, setNewUUID] = useState(uuidv4());
  const [lecName, setLecName] = useState("");

  const router = useRouter();
  const { slug } = router.query;

  async function handleFileUpload(event: any) {
    const file = event.target.files[0];
    const { data, error } = await supabase.storage
      .from("lectures")
      .upload("pdfs/" + newUUID, file, {
        cacheControl: "3600",
        upsert: false,
      });
  }

  const addLecture = async () => {
    const { error } = await supabase
      .from("lecture")
      .insert({ name: "lec1", url: newUUID, course: null });
    if (error) {
      alert("error");
    } else {
      alert("added");
    }
  };

  const [course, setCourse] = useState({
    id: "loading",
  });

  useEffect(() => {
    const getLectures = async () => {
      let { data }: any = await supabase
        .from("course")
        .select("id, name, code, slug, level(name), profile(*), lecture(*)")
        .eq("slug", slug)
        .single();

      setCourse(data);
    };
    getLectures();
    console.log(course);
  }, []);

  const addLectureData = async () => {
    const { error } = await supabase.from("lecture").insert({
      url: newUUID,
      course: course.id,
      name: lecName,
    });
    if (error) {
      alert("error");
    } else {
      alert("added");
    }
  };

  return (
    <div className="flex min-h-screen flex-col ">
      <span className="mr-auto mt-[100px] ml-12 mb-10 font-semibold text-xl">
        Add Lecture
      </span>
      <span className="mr-auto ml-12 mb-5 cursor-pointer">
        Course UUID : {course && course.id}
      </span>
      <span className="mr-auto ml-12 mb-5 cursor-pointer">
        Course Slug : {slug}
      </span>

      <span className="mr-auto ml-12 mb-5 cursor-pointer">Lecture Name :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="Name"
        onChange={(e) => setLecName(e.target.value)}
        value={lecName}
      />

      <span className="mr-auto ml-12 mb-5 cursor-pointer">
        Upload Lecture :
      </span>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileUpload}
        className="mr-auto ml-12 mb-5"
      />
      <button
        className="mb-5 h-11 text-white bg-gray-400 mx-12 my-4 border border-spacing-1 rounded-lg"
        onClick={() => {
          addLectureData();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddLecture;
