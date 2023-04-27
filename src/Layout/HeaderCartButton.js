import  './HeaderCartButton.css';
import { useContext } from 'react';
import CartContext from '../Store/CartContext';


const HeaderCartButton= (props)=> {

  const cartCtx= useContext(CartContext);

  const numberOfCartItems= cartCtx.items.reduce((curNumber, item)=> {
    return curNumber + item.amount;
  }, 0);

    return <button className='button' onClick={props.onClick}>
        <span className='icon'>
        <i class="bi bi-cart3"></i>
        </span>
        <span className='icon2'>Your Cart</span>
        <span className='icon3'>{numberOfCartItems}</span>
    </button>
}
export default HeaderCartButton;