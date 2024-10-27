/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SearchBox.css";

const SearchBox = () => {
  //for the search
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/api/search`, {
        params: { title: query },
      });
      const searchResults = response.data; // to store the search results

      // to navigate to the subjects page (please adjust the "/subjects" accordingly)
      navigate("/subjects", { state: { searchResults } });
    } catch (error) {
      console.error("No results found:");
    }
  };

  return (
    <>
      <div className="search-box-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search-query"
            placeholder="Search for subjects, topics, or documents"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
