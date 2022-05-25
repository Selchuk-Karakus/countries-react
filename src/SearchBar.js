import React from "react";

const SearchBar = ({ handleOnChange, input }) => {
  return (
    <div className="searchBar-container">
      <input
        className="searchBar-inputField"
        placeholder="Search for a country"
        id="name"
        type="text"
        value={input}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
