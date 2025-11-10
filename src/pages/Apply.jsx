import './../css/Apply.css';
import './../css/UpEvent.css';
import Position from './../components/Position';
import employee from './../images/employee.png';
import tournyorganizer from './../images/tournyorganizer.png';
import Contact from './../components/Contact';
import './../css/Contact.css'

const Apply = () =>{
    return(
        <main>
            <h1 id="an">OPEN POSITIONS</h1>
            <section id="up-content">
                <Position imgSrc={employee} imgAlt="Cashier" title="Cashier: operating the point-of-sale system to process customer transactions, accurately handle payments, and provide excellent customer service" pay="Pay: $16 an hour"/>
                <Position imgSrc={tournyorganizer} imgAlt="Tournament Organizer" title="Tournament Organizer: operating the point-of-sale system to process customer transactions, accurately handle payments, and provide excellent customer service" pay="Pay: $35 an hour"/>
            </section>
            <Contact 
                name = "Resume"
            />
        </main>
    );
};

export default Apply;