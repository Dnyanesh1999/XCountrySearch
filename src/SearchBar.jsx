import React from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <input
      type="text"
      placeholder="Search for countries..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      style={inputStyle}
    />
  );
};

const inputStyle = {
  margin: "30px",
  padding: "10px",
  width: "700px",
  fontSize: "16px",
};

export default SearchBar;
