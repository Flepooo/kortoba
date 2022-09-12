import "./App.css";
import sanityClient from "@sanity/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const client = sanityClient({
    projectId: "b8o3o28i",
    dataset: "production",
    useCdn: true,
  });

  useEffect(() => {
    client
      .fetch(
        `*[_type == "course"] {
          title,
          slug,
          body,
          author,
          mainImage {
              asset -> {
                  _id,
                  url
              },
              alt
          },
          publishedAt,
          "categories": categories[]->title
      }`
      )
      .then((res) => setData(res))
      .catch(console.error);
  });

  return (
    <div className="App">
      <header>
        <p>Kortoba</p>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
      </header>

      <div className="content-wrapper">
        {data
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, i) => (
            <div className="news-card" key={i}>
              <Link
                to={"/kortoba/course/" + item.title}
                className="news-card__card-link"
              ></Link>
              <img
                src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="news-card__image"
              />
              <div className="news-card__text-wrapper">
                <h2 className="news-card__title">{item.title}</h2>
                <div className="news-card__post-date">{item.publishedAt}</div>
                <div className="news-card__details-wrapper">
                  <p className="news-card__excerpt">{item.discretion}</p>
                  <Link
                    to={"/kortoba/course/" + item.title}
                    className="news-card__read-more"
                  >
                    Open Links <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
