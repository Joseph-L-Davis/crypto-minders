/* eslint-disable react/prop-types */
import React from 'react';
import './Items.css';



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
      <a href={link}>Click to view post</a>
    </li>
  );
}
