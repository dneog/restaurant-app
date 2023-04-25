import React from 'react';
import Model from '../UI/Model'
import './Cart.css';
const Cart = (props) => {
    const CartItems= <ul> {[
        {
            id: 'c1',
            name: 'Suchi',
            amount: 2,
            price: 12.09
        }
    ].map((item)=> <li className='item-Name'>{item.name}</li>) } </ul>
  return (
   
   <Model>
    {CartItems}
    <div className='amounts'>
        <span>Total Amount</span>
        <span>35.62</span>
    </div>
    <div className='btns'>
        <button className='close'>Close</button>
        <button className='order'>Order</button>
    </div>
    </Model>
   
  
  );
}

export default Cart