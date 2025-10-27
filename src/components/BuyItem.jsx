import './../css/BuyItem.css';

const BuyItem = (props) =>{
    return(
        <div className="product-card">
            <img src={props.imgSrc} alt={props.imgAlt} />
            <div className="product-info">
                <p><strong>{props.name}</strong><br /><strong>Price: </strong> {props.price}<br /><strong>In Stock:</strong> {props.stock}<br /><strong>Review Score:</strong> {props.rating}<br />{props.description}</p>
            </div>
        </div>
    );
};

export default BuyItem;