import './Input.css';
import React from 'react';
const Input = React.forwardRef((props, ref) => {
    return (
        <div className='input'>
            <label className='label' htmlFor={props.input.id}>{props.label}</label>
            <input className='num' ref={ref} {...props.input} />
        </div>
    )
})
export default Input;