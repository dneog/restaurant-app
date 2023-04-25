import React from 'react'
import './MealItem.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
  return (
   <li>
   <div className='li'>
    <div className='details'>
    <div className='name'>{props.name}</div>
    <div className='description'>{props.description}</div>
    <div className='price'>{`$${props.price}`}</div>
    </div>
    <div>
      <MealItemForm />
    </div>
    </div>
   </li>
  )
}

export default MealItem;