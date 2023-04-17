import type { NextPage } from "next";

const Course: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <span className="mr-auto mt-[100px] ml-12 mb-10 font-semibold text-xl">
        Mt201 | Math analysis
      </span>
      <span className="mr-auto ml-12 mb-5 cursor-pointer underline">
        Lecture 1
      </span>
      <span className="mr-auto ml-12 mb-5 cursor-pointer underline">
        Lecture 1
      </span>
      <span className="mr-auto ml-12 mb-5 cursor-pointer underline">
        Mid-term Exam
      </span>
    </div>
  );
};

export default Course;
