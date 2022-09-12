import "./App.css";
import sanityClient from "@sanity/client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Course() {
  let { slug } = useParams();
  const [data, setData] = useState([]);

  const client = sanityClient({
    projectId: "b8o3o28i",
    dataset: "production",
    useCdn: true,
  });

  useEffect(() => {
    client
      .fetch(
        `*[_type == "link"]{
          title,
          link,
          "slug": course->title
        }`
      )
      .then((res) => setData(res))
      .catch(console.error);
  });

  return (
    <div className="App">
      <header>
        <p>Kortoba</p>
      </header>
      <main>
        <p className="title">{slug}</p>
        {data
          .filter((item) => item.slug == slug)
          .map((item, i) => (
            <a key={i} className="linkA" href={item.link}>
              {item.title}
            </a>
          ))}
      </main>
    </div>
  );
}

export default Course;
