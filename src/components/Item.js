import React from "react";
import {useState} from 'react';

function Item({ name, category }) {
  const [addCart, setAddCart] = useState (false)

  function addC () {
    setAddCart(addCart => !addCart)
  }
  const addD = addCart? "in-cart" : ""
  const addE = addCart? "Remove From" : "Add to"
  return (
    <li className={addD}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addC}>{addE} Cart</button>
    </li>
  );
}

export default Item;
