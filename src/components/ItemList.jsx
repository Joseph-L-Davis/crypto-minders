/* eslint-disable max-len */
import React from 'react';
import { Item } from './Item';

export function ItemList(results) {
  // console.log(results.results.results);
  if(!results.results.results.length){
    return <div>hello</div>;
  }
  return (
    <ul className="Items">
      {results.results.results.length && results.results.results.map(result => {
        console.log(result);
        return <Item key={result.link} result={result} />;
      })}
    </ul>
  );
}
