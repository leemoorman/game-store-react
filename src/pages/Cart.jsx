import './../css/Cart.css';
import CartItem from './../components/CartItem';
import console from './../images/playstation5.jpg';
import controller from './../images/controller.png';

const Cart = () =>{
    return(
        <main>
            <h1 id="shop-head">Your Shopping Cart</h1>
            <section id="sc-store">
                <div id="store-items">
                    <CartItem imgSrc={console} imgAlt="Console" title="Playstation 5"/>
                    <CartItem imgSrc={controller} imgAlt="Controller" title="Xbox One Controller"/>
                </div>
            </section>
            <div id="form-btn">
                <button type="submit">Check Out</button>
            </div>
        </main>
    )
};

export default Cart;