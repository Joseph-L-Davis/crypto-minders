import React from 'react';
import { ItemList } from './ItemList';

export function Body(results) {

  return (
    <div className="body">
      <ItemList results={results}/>
    </div>
  );
}
