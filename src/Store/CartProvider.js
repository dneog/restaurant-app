import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState= {
    items : [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type=== 'ADD'){
        const updatedItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}
const CartProvider= (props) => {

    const [cartState, dispatchedCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) =>{
        dispatchedCartAction({type: 'ADD', item: item});
    } ;

    const removeItemFromHandler =( id) =>{
        dispatchedCartAction({type: 'REMOVE', id: id});
    } ;

    const cartContext= {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler ,
        removeItem: removeItemFromHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;