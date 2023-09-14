import React, { useContext } from "react";
import { AnimeContext } from "./AnimeContext";

const Favorites = () => {
  const { favorites, removeFavorites } = useContext(AnimeContext);

  const handleRemove = (mal_id) => {
    removeFavorites(mal_id);
  };

  const favElements = favorites.map((added) => (
    <div className="favorite-cointainer" key={added.mal_id}>
      <img className="favorite-img" src={added.images.jpg.image_url} />
      <h1 className="favorite-title">{added.title_english}</h1>
      <button className="remove-btn" onClick={() => handleRemove(added.mal_id)}>
        remove
      </button>
    </div>
  ));

  return (
    <>
      <h1 className="favorites-title">Favorites</h1>
      {favElements}
    </>
  );
};

export default Favorites;
