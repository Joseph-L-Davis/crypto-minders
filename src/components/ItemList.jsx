/* eslint-disable max-len */
import React from 'react';
import { Item } from './Item';
import './Itemlist.css';

export function ItemList(results) {
  if(!results.results.results.length){
    return <div className="placeholder">This is where you will find the goods</div>;
  }
  return (
    <ul className="Items">
      {results.results.results.length && results.results.results.map(result => {
        return <Item key={result.link} result={result} />;
      })}
    </ul>
  );
}
