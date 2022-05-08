import React, { useState } from "react";
import "./SearchBar.css"

function SearchBar({ setSearchTerm, setStartIndex }) {
  const[word, setWord] = useState("")
  let setTerm = (e) => {
    if (e.key === "Enter") {
      setWord(e.target.value
        .replace(
          /(^\w|\s\w)(\S*)/g,
          (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
        )
        .replace(/ /g, "+"));

      setSearchTerm(word);
      setStartIndex(0);
      // console.log(word);
    }
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        onKeyPress={setTerm}
        onKeyUp={(e) => {
          setWord(e.target.value
            .replace(
              /(^\w|\s\w)(\S*)/g,
              (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
            )
            .replace(/ /g, "+"));
        }}
      />
      <button
        className="search-button"
        onClick={() => {
          console.log(word)
          setSearchTerm(word);
          setStartIndex(0);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default SearchBar;
