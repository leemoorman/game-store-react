import './../css/CartItem.css';

const CartItem = (props) =>{
    return(
        <div className="sc-item">
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <p>{props.title}</p>
            <p>Remove</p>
        </div>
    );
};

export default CartItem;