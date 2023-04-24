import type { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";

const AddCourse: NextPage = () => {
  const newUUID = uuidv4();
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
      />
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course Code :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="Code"
      />
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course Slug :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="Slug"
      />
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Course Level :</span>
      <select
        id="levels"
        name="levels"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
      >
        <option value="volvo">Level 1</option>
        <option value="saab">Level 2</option>
        <option value="fiat">Level 3</option>
        <option value="fiat">Level 4</option>
      </select>
      <span className="mr-auto ml-12 mb-5 cursor-pointer">Publisher :</span>
      <input
        type="text"
        className="mb-5 mx-12 border border-spacing-1 rounded-lg"
        placeholder="Flepooo"
        value="Flepooo"
      />
      <button
        className="mb-5 h-11 text-white bg-gray-400 mx-12 my-4 border border-spacing-1 rounded-lg"
        onClick={() => {
          alert("coming soon");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddCourse;
