import "./App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabase.js";

function Course() {
  let { slug } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  async function getData() {
    const { data } = await supabase
      .from("lecture")
      .select()
      .eq("course_slug", slug);
    setData(data);
  }

  return (
    <div className="App">
      <header>
        <p>Kortoba</p>
      </header>
      <main>
        <p className="title">{slug}</p>
        {data.map((item, i) => (
          <a key={i} className="linkA" href={item.url}>
            {item.lec_num}
          </a>
        ))}
      </main>
    </div>
  );
}

export default Course;
