import './../css/Buy.css';
import BuyItem from './../components/BuyItem';
import XboxOne from './../console-images/xbox-one.png';

const Buy = () =>{
    return(
        <main>
            <div id="store-container">
                <aside id="sidebar">
                    <h3 id="active">Consoles</h3>
                    <h3>Games</h3>
                    <h3>Hardware</h3>
                </aside>
                <section id="products">
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                    <BuyItem imgSrc={XboxOne} imgAlt="Console" name="Xbox One" price="149.99" stock="7" rating="3.8" description="An eighth-generation home video game console developed by Microsoft"/>
                </section>
            </div>
        </main>
    );
};

export default Buy;