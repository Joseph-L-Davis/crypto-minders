import { Body } from '../Body';
import React from 'react';
import { useState, useEffect } from 'react';
import { Search } from '../Search';
import './App.css';
const URL = 'https://project-scrape.herokuapp.com/api/v1/results';


export default function App() {
  const [response, setResponse] = useState([]);

  // useEffect(() => {
  //   handleSearch();
   
  // }, [1]);
  const handleSearch = (searchTerm, cityTerm) => {
    console.log(searchTerm, cityTerm);
    return fetch(`${URL}/${searchTerm}/${cityTerm}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => setResponse(response))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <Body results={response}/>
    </div>
  ); 
}
