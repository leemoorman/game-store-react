import './../css/Dialog.css';
import React, {useState} from 'react';
import DeleteDialog from './DeleteDialog';
import DetailsDialog from './DetailsDialog';
import EditDialog from './EditDialog';

const ItemDialogue = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) =>{
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) =>{
        e.preventDefault();
        setShowContent("delete");
    }

    return (
        
        //http://localhost:3001/${props.img}
        //https://game-store-server-728j.onrender.com/${props.img}
        
        <div id="item-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeDialog}
                    >
                        &times;
                    </span>
                    <div id="dialog-content">
                        {showContent==="details"? (
                            <DetailsDialog
                                showEdit = {showEdit}
                                showDelete = {showDelete}
                                img = {props.img}
                                name = {props.name}
                                price = {props.price}
                                stock = {props.stock}
                                rating = {props.rating}
                                description = {props.description}
                            />
                        ): showContent==="edit"?(
                            <EditDialog
                                _id = {props._id}
                                name = {props.name}
                                price = {props.price}
                                stock = {props.stock}
                                rating = {props.rating}
                                description = {props.description}
                                closeDialog = {props.closeDialog}
                                updateConsole = {props.updateConsole}
                                />
                        ):(
                            <DeleteDialog
                                _id = {props._id}
                                name = {props.name}
                                closeDialog = {props.closeDialog}
                                hideConsole = {props.hideConsole}
                            />
                        )}   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDialogue;
