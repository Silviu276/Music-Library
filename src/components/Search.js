import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../index.css";
import data from "../data.json";

const Search = () => {
  //const [search, setSearch] = useState("");
  const [autocomp, setAutocomp] = useState("");
  const allSongs = [];
  var searchSong = "",
    songs = [];

  function GetSongs(artist, album) {
    data[artist].albums[album].songs.forEach((song) => allSongs.push(song.title.toLowerCase()));
  }
  GetSongs(0, 0);
  GetSongs(0, 1);
  GetSongs(1, 0);
  GetSongs(1, 1);
  GetSongs(2, 0);
  GetSongs(2, 1);
  GetSongs(3, 0);
  GetSongs(3, 1);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    //setSearch(event.target.value.toLowerCase());
    let search = event.target.value;
    songs = allSongs.filter((s) => s.includes(search));
    if (search.length) 
        setAutocomp(songs[0]);
    else setAutocomp("");
  }

  return (
    <div className="container">
      <FaSearch className="search-icon" />
      <form onSubmit={handleSubmit}>
        <input className="search-input" type="text" onChange={handleChange}></input>
        <p className="search-text">{autocomp} </p>
      </form>
    </div>
  );
};

export default Search;
