import './../css/Dialog.css';

const ItemDialogue = (props) => {
    return (
        //https://game-store-server-728j.onrender.com/${props.img}
        <div id="item-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeItemDialog}
                    >
                        &times;
                    </span>
                    <div className="columns">
                        <img id="dialog-image" src={`https://game-store-server-728j.onrender.com/${props.img}`} alt="console" />
                        <div id="dialog-content">
                            <h3>{props.name}</h3>
                            <p>Price: {props.price}</p>
                            <p>Stock: {props.stock}</p>
                            <p>Review Score: {props.rating}</p>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDialogue;