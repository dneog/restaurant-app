import './CartItem.css';
const CartItem = (props)=> {
    const price = `$${props.price}`;


return (
    <li className='border-bottom'>
        <div className='main'>
        <div className='display'>
            <span className="foodName">{props.name}</span>
          
           <div>
           <span>{price}</span>
           <span className='nums'> x{props.amount}</span>
           </div>


        </div>
        <div>
            <button className='minus' onClick={props.onRemove}>-</button>
            <button className='plus' onClick={props.onAdd}>+</button>

        </div>
        </div>
       
    </li>
)
}
export default CartItem;