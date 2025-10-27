import './../css/Item.css';

const Item = (props) =>{
    return(
        <div className="item">
            <img src={props.imgSrc} alt={props.imgAlt} />
            <p>{props.title}</p>
        </div>
    );
};

export default Item;