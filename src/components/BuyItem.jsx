import './../css/BuyItem.css';
import {useState} from "react";
import ItemDialog from "./ItemDialog";

const BuyItem = (props) =>{
    const [console, setConsole] = useState(props);
    const [showConsole, setShowConsole] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    const showConsoleDetails = () =>{
        setShowDialog(true);
    }

    const closeConsoleDetails = () =>{
        setShowDialog(false);
    }
    
    const updateConsole = (console) =>{
        setConsole(console);
    }

    const hideConsole = () =>{
        setShowConsole(false);
    }
    //http://localhost:3001/${props.img}
    //https://game-store-server-728j.onrender.com/${props.img}
    
    return(
        <>
        {showDialog?(
            <ItemDialog closeDialog={closeConsoleDetails}
                _id = {console._id}
                name = {console.name}
                price = {console.price}
                stock = {console.stock}
                rating = {console.rating}
                description = {console.description}
                img = {console.img}
                updateConsole = {updateConsole}
                hideConsole = {hideConsole}
            />
        ):('')}
        {showConsole?(       
            <div className='product-card' onClick={showConsoleDetails}>
                <img src={`https://game-store-server-728j.onrender.com/console-images/${console.img}`} alt="console" />
                <section className='product-info'>
                    <p>
                        <strong>{console.name}</strong>
                        <br />
                        <strong>Price: </strong>{console.price}
                        <br />
                        <strong>In Stock: </strong>{console.stock}
                        <br />
                        <strong>Rating: </strong>{console.rating}
                        <br />
                        {console.description}
                    </p>
                </section>
            </div>
        ):('')}
    </>
    );
};

export default BuyItem;