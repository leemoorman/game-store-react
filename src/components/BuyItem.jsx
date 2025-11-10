import './../css/BuyItem.css';

const BuyItem = (buyItem) =>{
    const imgSrc=`http://localhost:3001/${buyItem.img}`;
    return(
        <div className="product-card">
            <img src={imgSrc}/>
            <div className="product-info">
                <p><strong>{buyItem.name}</strong><br /><strong>Price: </strong> {buyItem.price}<br /><strong>In Stock:</strong> {buyItem.stock}<br /><strong>Review Score:</strong> {buyItem.rating}<br />{buyItem.description}</p>
            </div>
        </div>
    );
};

export default BuyItem;