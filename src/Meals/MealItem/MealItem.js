import React from 'react'
import './MealItem.css';
const MealItem = (props) => {
  return (
   <li className='li'>
    <div className='details'>
    <div className='name'>{props.name}</div>
    <div className='description'>{props.description}</div>
    <div className='price'>{`$${props.price}`}</div>
    </div>
    <div>

    </div>
   </li>
  )
}

export default MealItem;