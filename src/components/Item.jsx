/* eslint-disable react/prop-types */
import React from 'react';



export function Item({ result: {
  title,
  price,
  link,
  image
} }) {

  return (
    <li className="Item">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <h3>{price}</h3>
      <h3>{link}</h3>
    </li>
  );
}
