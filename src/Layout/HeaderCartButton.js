import  './HeaderCartButton.css';

const HeaderCartButton= (props)=> {
    return <button className='button' onClick={props.onClick}>
        <span className='icon'>
        <i class="bi bi-cart3"></i>
        </span>
        <span className='icon2'>Your Cart</span>
        <span className='icon3'>3</span>
    </button>
}
export default HeaderCartButton;