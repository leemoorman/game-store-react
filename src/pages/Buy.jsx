import './../css/Buy.css';
import BuyItem from './../components/BuyItem';
import React, {useState, useEffect} from "react";
import axios from 'axios';

const Buy = () =>{
    const [buyItem, setBuyItem] = useState([]);
    useEffect(() => {
        (async () =>{
            const response = await axios.get(
                "http://localhost:3001/api/consoles/"
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
                    {buyItem.map((buyItem) =>{
                       return( 
                        <BuyItem 
                            key = {buyItem.name}
                            name = {buyItem.name}
                            price = {buyItem.price}
                            stock = {buyItem.stock}
                            description = {buyItem.description}
                            rating = {buyItem.rating}
                            img = {buyItem.img}
                        />
                       );
                    })}
                </section>
            </div>
        </main>
    );
};

export default Buy;