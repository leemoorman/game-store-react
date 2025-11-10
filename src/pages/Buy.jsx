import './../css/Buy.css';
import BuyItem from './../components/BuyItem'
import React, {useState, useEffect} from "react";
import axios from 'axios';

const Buy = () =>{
    const [buyItem, setBuyItem] = useState([]);
    useEffect(() => {
        (async () =>{
            const response = await axios.get(
                "https://game-store-server-728j.onrender.com/api/consoles"
            );
            setBuyItem(response.data);
        })();
    }, []);

    return(
        <main>
            <div id="store-container">
                <aside id="sidebar">
                    <h3 id="active">Consoles</h3>
                    <h3>Games</h3>
                    <h3>Hardware</h3>
                </aside>
                <section id="products">
                    {buyItem.map((props) =>{
                       return( 
                        <BuyItem 
                            key = {props.name}
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