import './../css/UpEvent.css';

const UpEvent = (props) =>{
    return(
        <section className="up-event">
            <div className="up-event-items">
                <div className="up-item">
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>
            </div>
            <p>{props.text}</p>
        </section>
    );
};

export default UpEvent;