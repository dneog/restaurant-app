import React from 'react';
import { useContext } from 'react';
import Model from '../UI/Model';
import CartItem from './CartItem';

import './Cart.css';
import CartContext from '../Store/CartContext';
const Cart = (props) => {
    const CartCtx= useContext(CartContext)
    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
    const checkItems = CartCtx.items.length > 0
    const CartItems= <ul>
     {CartCtx.items.map((item)=>
     <li className='item-Name'>
    <CartItem key={item.id}
    name={item.name}
      amount= {item.amount} price={item.price}
    />
     </li>) }
      </ul>
  return (
   
   <Model onClose={props.onClose}>
    {CartItems}
    <div className='amounts'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    <div className='btns'>
        <button className='close' onClick={props.onClose}>Close</button>
      { checkItems &&  <button className='order'>Order</button>}
    </div>
    </Model>
   
  
  );
}

export default Cart