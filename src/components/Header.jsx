/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
// import { link } from 'react-dom';
import './Header.css';
const URL = 'https://project-scrape.herokuapp.com/api/v1/results';
export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityTerm, setCityTerm] = useState('');


  const handClick = e => {
    e.preventDefault();
    alert('dcsjlc');
  };

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleCityChange = e => {
    setCityTerm(e.target.value);
  };

  const handleSearch = () => {

    return fetch(`${URL}/${searchTerm}/${cityTerm}`, {
      method: 'GET'
    })
      .then(response => response.json())
      // redirects to the Details component, passes the response as a prop so it is accessible in that component
      .then(response => console.log(response))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <header className="header">
      <h1>SCRAPE APE</h1>
      <div className="inputs">
        <input type="text" className="searchTerm" placeholder="Search" onChange={handleSearchChange}/>
        <input type="text" className="cityTerm" placeholder="City" onChange={handleCityChange}/>
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
}
