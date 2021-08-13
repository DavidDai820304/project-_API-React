import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="searchPage">
      <div className="searchButton">
        <input
          type="text"
          placeholder="Type something to search"
          onChange={inputHandler}
        />
        <button onClick={search} className="search">
          Search
        </button>
      </div>
      <br />
      <div>
        <p>
          API from <a href="https://www.pexels.com/zh-tw/">Pexels</a>
        </p>
      </div>
    </div>
  );
};

export default Search;
