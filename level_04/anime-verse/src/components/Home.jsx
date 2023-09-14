import React, { useContext, useState } from "react";
import { AnimeContext } from "./AnimeContext";
import SearchBar from "./SearchBar";
import { Link } from  "react-router-dom"
import animeBG from "../images/anime-bg.png";

const Home = () => {
  const { animeVerse } = useContext(AnimeContext);
  const [searchResults, setSearchResults] = useState([]); //hold search results
  const [searchQuery, setSearchQuery] = useState(""); //stores query entered by the user after they click "search"

  const handleSearch = (query) => {
    const filteredResults = animeVerse.filter((anime) =>
      anime.title.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
    setSearchQuery(query);
  };

  return (
    <div className="home-wraper">
      <img src={animeBG} className="img-bg"/>
      <h1 className="home-title">Anime Verse</h1>
      <SearchBar onSearch={handleSearch}  />
      <div className="search-bar-container">
        {searchQuery && <h4 className="search-for">Search Results for:</h4>}
        <ul>
          {searchResults.map((anime) => (
            <div key={anime.mal_id}>
              <Link className="title-link"to={`/anime/${anime.mal_id}`}>{anime.title_english} </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
