import * as React from 'react';
import { StoreItem } from "./StoreItem";
import "./StoreGrid.css";


export function StoreGrid({ display, cart, add, remove }) {
  return (
    <div className='StoreGrid'>
      {display.map((item, index) => (
        <StoreItem 
          add={add}
          item={item}
          cart={cart}
          remove={remove}
        ></StoreItem>
      ))}
    </div>
  );
}

export default StoreGrid;