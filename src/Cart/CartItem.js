import './CartItem.css';
const CartItem = (props)=> {
    const price = `$${props.price}`;


return (
    <li>
        <div className='display'>
            <span className="foodName">{props.name}</span>
          
           <div>
           <span>{price}</span>
           </div>


        </div>
       
    </li>
)
}
export default CartItem;