import React, { createContext, useState, useEffect } from "react";

const AnimeContext = createContext();
function AnimeProvider(props) {
  const [animeVerse, setAnimeVerse] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const baseUrl = "https://api.jikan.moe/v4/anime";
  

  const addToFavorites = (anime) => {
    setFavorites([...favorites, anime]);
  };

  const removeFavorites = (mal_id) => {
    const updatedFavorites = favorites.filter((anime) => anime.mal_id !== mal_id)
    setFavorites(updatedFavorites)
  }

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("API Response:", res);
        setAnimeVerse(res.data);
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  return (
    <AnimeContext.Provider value={{ animeVerse, favorites, addToFavorites, removeFavorites  }}>
      {props.children}
    </AnimeContext.Provider>
  );
}
export { AnimeContext, AnimeProvider };
