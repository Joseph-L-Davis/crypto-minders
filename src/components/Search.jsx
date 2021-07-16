/* eslint-disable max-len */
import { ItemList } from './ItemList';
import React from 'react';
import { useState } from 'react';
// import { link } from 'react-dom';
import './Search.css';

export function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityTerm, setCityTerm] = useState('');


  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleCityChange = e => {
    setCityTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchTerm, cityTerm);
  };

  return (
    <header className="header">
      <h1>SCRAPE APE</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input type="text" className="searchTerm" placeholder="Search" onChange={handleSearchChange}/>
          <input type="text" className="cityTerm" placeholder="City" onChange={handleCityChange}/>
          <button>Search</button>
        </div>
      </form>
    </header>
  );
}
