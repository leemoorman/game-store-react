import './../css/Buy.css';
import BuyItem from './../components/BuyItem'
import React, {useState, useEffect} from "react";
import AddConsole from './../components/AddConsole';
import axios from 'axios';

const Buy = () =>{
    const [buyItems, setBuyItems] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () =>{
        setShowAddDialog(true);
    }

    const closeAddDialog = () =>{
        setShowAddDialog(false);
    }

    const updateConsoles = (buyItem) => {
        setBuyItems((buyItems)=>[...buyItems, buyItem]);
    };

    useEffect(() => {
        (async () =>{
            const response = await axios.get(
                
                //http://localhost:3001/api/consoles
                //"https://game-store-server-728j.onrender.com/api/consoles"
                
                "http://localhost:3001/api/consoles"
            );
            setBuyItems(response.data);
        })();
    }, []);

    return(
        <main>
            {showAddDialog?((console.log("dialog rendering"),
                <AddConsole 
                    closeDialog={closeAddDialog}
                    updateConsoles={updateConsoles}
                />)
            ):("")}
            <div id="button-container">
                <button id="add-button"  onClick={openAddDialog}>+</button>
            </div>
            <div id="store-container">
                <aside id="sidebar">
                    <h3 id="active">Consoles</h3>
                    <h3>Games</h3>
                    <h3>Hardware</h3>
                </aside>
                <section id="products">
                    {buyItems.map((props) =>{
                       return( 
                        <BuyItem 
                            key = {props.name}
                            _id = {props._id}
                            name = {props.name}
                            price = {props.price}
                            stock = {props.stock}
                            description = {props.description}
                            rating = {props.rating}
                            img = {props.img}
                        />
                       );
                    })}
                </section>
            </div>
        </main>
    );
};

export default Buy;