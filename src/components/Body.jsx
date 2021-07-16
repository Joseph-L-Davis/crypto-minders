import React from 'react';
import { ItemList } from './ItemList.jsx';

export function Body(results) {

  return (
    <div className="body">
      <ItemList results={results}/>
    </div>
  );
}
