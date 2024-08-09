/* eslint-disable no-unused-vars */
import React from 'react';
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <>
    <div className='search-box-container'>
        <form>
            <input type="text" name="search-query" placeholder='Search for modules, topics, or documents'/>
            <button>Search</button>
        </form>
        
    </div>

    </>
  )
}

export default SearchBox