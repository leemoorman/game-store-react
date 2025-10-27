import './../css/Position.css';

const Position = (props) =>{
    return(
        <section className="position"> 
            <div className="position-items">
                <div className="position-item">
                    <img src={props.imgSrc} alt={props.imgAlt}/>
                </div>
            </div>
            <p>{props.title}</p>
            <p>{props.pay}</p>
        </section>
    );
};

export default Position;