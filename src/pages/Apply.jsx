import './../css/Apply.css';
import './../css/UpEvent.css';
import Position from './../components/Position';
import employee from './../images/employee.png';
import tournyorganizer from './../images/tournyorganizer.png';

const Apply = () =>{
    return(
        <main>
            <h1 id="an">OPEN POSITIONS</h1>
            <section id="up-content">
                <Position imgSrc={employee} imgAlt="Cashier" title="Cashier: operating the point-of-sale system to process customer transactions, accurately handle payments, and provide excellent customer service" pay="Pay: $16 an hour"/>
                <Position imgSrc={tournyorganizer} imgAlt="Tournament Organizer" title="Tournament Organizer: operating the point-of-sale system to process customer transactions, accurately handle payments, and provide excellent customer service" pay="Pay: $35 an hour"/>
            </section>
            <section id="apply-form">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Please enter" />
                    </div>
                    <div class="form-group">
                        <label for="address">Email</label>
                        <input type="text" id="email" placeholder="Please enter" />
                    </div>
                    <div class="form-group">
                        <label for="resume">Resume</label>
                        <textarea id="resume" rows="8" placeholder="Please enter"></textarea>
                    </div>
                    <div class="form-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Apply;