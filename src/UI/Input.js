import './Input.css';

const Input = props => {
    return (
        <div className='input'>
            <label className='label' htmlFor={props.input.id}>{props.label}</label>
            <input className='num' {...props.input} />
        </div>
    )
}
export default Input;