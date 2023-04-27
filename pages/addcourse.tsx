import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../lib/supabase";
import { useState } from "react";

const AddCourse: NextPage = () => {
  const [newUUID, setNewUUID] = useState(uuidv4());

  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseLevel, setCourseLevel] = useState("");

  const addCourse = async () => {
    const { error } = await supabase.from("course").insert({
      id: newUUID,
      name: courseName,
      slug: (courseName.replace(/ /g, "") + courseCode).toLowerCase(),
      code: courseCode,
      level_fk: courseLevel,
      uploder_fk: "403e2d5f-91c7-4af4-aae8-80edd9cd1b8f",
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
        Add Course
      </span>
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course UUID :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder={newUUID}
        value={newUUID}
      />
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course Name :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course Code :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="Code"
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
      />
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course Slug :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="Slug"
        value={(courseName.replace(/ /g, "") + courseCode).toLowerCase()}
      />
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course Level :</span>
      <select
        id="levels"
        name="levels"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        onChange={(e) => setCourseLevel(e.target.value)}
      >
        <option value="6f920c6f-2e56-48f1-a2b2-738d0e8c29c8">Level 1</option>
        <option value="4f0fae8d-4c4b-4e33-8d84-5846bde734eb">Level 2</option>
        <option value="4c4a4ee4-3147-4ea5-ae59-5761d51f60e5">Level 3</option>
        <option value="e2c819a1-9c1b-4e90-9c32-7be923d3f3b7">Level 4</option>
      </select>
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Publisher :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="mohamedhoshame"
        value="mohamedhoshame"
      />
      <button
        className="mb-5 h-11 text-white bg-gray-400 mx-12 my-4 border border-spacing-1 rounded-lg"
        onClick={() => {
          addCourse();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddCourse;
