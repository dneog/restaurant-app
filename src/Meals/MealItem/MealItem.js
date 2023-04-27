import React, { useContext } from 'react';

import './MealItem.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/CartContext';

const MealItem = (props) => {
 const cartCtx=  useContext(CartContext)
  const addTocartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount, 
      price: props.price
    });
  }
  return (
   <li>
   <div className='li'>
    <div className='details'>
    <div className='name'>{props.name}</div>
    <div className='description'>{props.description}</div>
    <div className='price'>{`$${props.price}`}</div>
    </div>
    <div>
      <MealItemForm onAddToCart= {addTocartHandler} />
    </div>
    </div>
   </li>
  )
}

export default MealItem;