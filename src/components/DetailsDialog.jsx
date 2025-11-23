import './../css/Dialog.css';

const DetailsDialog = (props) =>{
    return(
        <div className="columms">
            <img id="dialog-image" src={"http://localhost:3001/console-images/" + props.img} alt="console" />
            <div id="dialog-content">
                <div className='columns'>
                    <h3>{props.name}</h3>
                    <a href="edit-link" onClick={props.showEdit}>&#9998;</a>
                    <a href="delete-link" onClick={props.showDelete}>&#x1F5D1;</a>
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