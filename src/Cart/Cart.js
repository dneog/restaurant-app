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

    const CartItemRemoveHandler =(id)=> {
        CartCtx.removeItem(id)
    }
    const CartItemAddHandler = (item)=> {
      CartCtx.addItem({...item, amount: 1})
    }
    const CartItems= <ul>
     {CartCtx.items.map((item)=>
     <li className='item-Name'>
    <CartItem key={item.id}
    name={item.name}
      amount= {item.amount} price={item.price} onRemove= {CartItemRemoveHandler.bind(null, item.id)}
      onAdd= {CartItemAddHandler.bind(null, item)}
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