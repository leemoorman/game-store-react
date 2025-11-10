import './../css/BuyItem.css';
import {useState} from "react";
import ItemDialog from "./ItemDialog";

const BuyItem = (props) =>{
    const [showDialog, setShowDialog] = useState(false);

    const showPopup = () =>{
        console.log("showPopup clicked");
        setShowDialog(true);
    }

    const closePopup = () =>{
        setShowDialog(false);
    }

    const imgSrc=`https://game-store-server-728j.onrender.com/${props.img}`;
    return(
        <>
            {showDialog?((console.log("dialog rendering"),
                <ItemDialog 
                    closeItemDialog={closePopup}
                    name = {props.name}
                    price = {props.price}
                    stock = {props.stock}
                    description = {props.description}
                    rating = {props.rating}
                    img = {props.img}
                />)
            ):("")}
            <div className="product-card" onClick={showPopup}>
                <img src={imgSrc}/>
                <div className="product-info">
                    <p><strong>{props.name}</strong><br /><strong>Price: </strong> {props.price}<br /><strong>In Stock:</strong> {props.stock}<br /><strong>Review Score:</strong> {props.rating}<br />{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default BuyItem;