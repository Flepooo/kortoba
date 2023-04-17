import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabase.js";

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  async function getData() {
    const { data } = await supabase.from("course").select();
    setData(data);
  }

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
                to={"/kortoba/course/" + item.slug}
                className="news-card__card-link"
              ></Link>
              <img
                src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="news-card__image"
              />
              <div className="news-card__text-wrapper">
                <h2 className="news-card__title">{item.name}</h2>
                <div className="news-card__post-date">{item.created_at}</div>
                <div className="news-card__details-wrapper">
                  <p className="news-card__excerpt">{item.name}</p>
                  <Link
                    to={"/kortoba/course/" + item.slug}
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
