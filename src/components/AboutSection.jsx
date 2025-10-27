import './../css/AboutSection.css';

const AboutSection = (props) =>{
    return(
        <section id="about-section">
            <div id="about-image">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div id="about-text">
                <h2>{props.headerText}</h2>
                <strong><p>{props.aboutDescTwo}</p></strong>
                <p>{props.aboutDescOne}</p>
            </div>
        </section>
    );
};

export default AboutSection;