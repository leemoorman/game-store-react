import AboutSection from './../components/AboutSection';
import founder from './../images/founder.png';
import location from './../images/columbiagamehub.png';
import Contact from './../components/Contact';

const About = () =>{
    return(
        <main>
            <AboutSection imgSrc={location} imgAlt="Founder" headerText="About Us" aboutDescOne="We are Columbia Game Store, your local destination for everything to do with games! Located in the heart of Columbia, South Carolina, we’re passionate about bringing people together through consoles, games, and community events. Whether you’re hunting for the latest releases, shopping for retro classics, or just stopping by to connect with fellow players, our store has something for everyone." aboutDescTwo="Location: 123 Main Street"/>
            <AboutSection imgSrc={founder} imgAlt="Location" headerText="About the Owner" aboutDescOne="The Columbia Game Hub was founded by a passionate visionary dedicated to bringing gamers together in Columbia, SC. With a sharp eye for community and innovation, he created a space where players of all backgrounds can connect, compete, and celebrate gaming culture. His commitment to fostering creativity and collaboration has made the hub a cornerstone for local gaming enthusiasts and a welcoming home for both casual players and serious competitors." aboutDescTwo="Jonathan Mulanies"/>
            <div id="cu">
                <h2>Contact Us</h2>
            </div>
            <Contact 
                name = "Message"
            />
        </main>
    );
};

export default About;