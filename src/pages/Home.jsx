import './../css/Home.css';
import Item from './../components/Item';
import Slideshow from './../components/Slideshow'
import playstation5 from './../images/playstation5.jpg';
import game from './../images/game.png';
import controller from './../images/controller.png';
import sale from './../images/sale.png';
import tournament from './../images/tournament.png'

const Home = () =>{
    return(
        <main>
            <h1 id="sc">We supply all game related needs at a great price in Columbia, South Carolina</h1>
            <Slideshow />
            <section className="main-content">
                <h2>STORE  <span>Available for in–store pick up or delivery</span></h2>
                <div className="items">
                    <Item imgSrc={playstation5} imgAlt="Consoles" title="Consoles" />
                    <Item imgSrc={game} imgAlt="Game" title="Game" />
                    <Item imgSrc={controller} imgAlt="Controller" title="Controller" />
                </div>
            </section>
            <section className="main-content">
                <h2>Upcoming Events</h2>
                <div className="items">
                    <Item imgSrc={sale} imgAlt="sale" title="BIG SALE – UP TO 70% OFF SEP 28 to SEP 31" />
                    <Item imgSrc={tournament} imgAlt="tournament" title="SMASH BROS ULTIMATE TOURNAMENT – OCT 11 – OCT 13" />
                </div>
            </section>
        </main>
    );
};

export default Home;