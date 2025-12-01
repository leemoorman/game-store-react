import './../css/Dialog.css';

const DetailsDialog = (props) =>{
    return(
        <div className="columms">
            <img id="dialog-image" src={`https://game-store-server-728j.onrender.com/console-images/${props.img}`} alt="console" />
            <div id="dialog-content">
                <div className='columns'>
                    <h3>{props.name}</h3>
                    <button className="dialog-button" onClick={(e) => { e.preventDefault(); props.showEdit(e); }}>&#9998;</button>
                    <button className="dialog-button" onClick={(e) => { e.preventDefault(); props.showDelete(e); }}>&#x1F5D1;</button>
                </div>
                <p>Price: {props.price}</p>
                <p>Stock: {props.stock}</p>
                <p>Rating: {props.rating}</p>
                <p>Description: {props.description}</p>
            </div>
        </div>
    );
}

export default DetailsDialog;