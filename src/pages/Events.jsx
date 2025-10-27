import './../css/Events.css';
import UpEvent from './../components/UpEvent';
import sale from './../images/sale.png';
import tournament from './../images/tournament.png';

const Events = () =>{
    return(
        <main>
            <div id="main-content">
                <UpEvent imgSrc={sale} imgAlt="Sale" text="BIG SALE ON CONSOLES, GAMES, AND HARDWAREUP TO 70% OFF ON ITEMS SEPT. 28 - 31" />
                <UpEvent imgSrc={tournament} imgAlt="Tournament" text="SUPER SMASH BROS ULTIMATE IN PERSON TOURNAMENT $200 CASH PRIZE FOR WINNER OCT. 11 - 13" />
            </div>
            <section id="sale-text">
                <h1><strong>ALL EVENTS ARE ONLY AVAILABLE AT THE PHYSICAL LOCATION IN COLUMBIA, SC</strong></h1>
            </section>
        </main>
    );
};

export default Events;