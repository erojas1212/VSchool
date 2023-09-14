import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")//store the user's input as they type in to the search input

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search anime"
        className="search-bar-input"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
