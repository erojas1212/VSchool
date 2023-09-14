import React, { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { mal_id } = useParams();
  const { animeVerse, addToFavorites } = useContext(AnimeContext);

  const animeInfo = animeVerse.find(
    (info) => info.mal_id === parseInt(mal_id, 10)
  );

  const handleAddToFavoreites = () => {
    addToFavorites(animeInfo)
  }

  return (
    <div className="anime-details-container">
      <h2 className="detail-title">Anime Detail</h2>
      <h2 className="anime-detial-title">{animeInfo.title_english}</h2>
      <img className="detail-img" src={animeInfo.images.jpg.image_url} />
      <p className="detail-aired">aired: {animeInfo.aired.string}</p>
      <p className="detail-rating">Rating: {animeInfo.rating}</p>
      <p className="detail-genre">Genres: {animeInfo.genres.map((genre) => genre.name).join(", ")}</p>
      <p className="detail-sypnosis">Synopsis: {animeInfo.synopsis}</p>
      <button className="add-to-favorties-btn" onClick={handleAddToFavoreites}>Add to Favorites</button>
    </div>
  );
};

export default AnimeDetail;
