import React, { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import { Link } from "react-router-dom";

const ListOfAnimes = () => {
  const { animeVerse } = useContext(AnimeContext);

    return (
      <div className="list-container">
      <h1 className="list-title">List of Animes</h1>
      {animeVerse.map((item) => (
        <div className="list-item" key={item.mal_id}>
          <Link to={`/anime/${item.mal_id}`}>{item.title_english}</Link>
        </div>
      ))}
    </div>
    );
  };



export default ListOfAnimes;
