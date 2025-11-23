import './../css/Dialog.css';
import './../css/DeleteDialog.css';
import React, {useState} from 'react';

const DeleteDialog = (props) =>{
    const[result, setResult] = useState('');

    const deleteConsole = async() =>{
        const response = await fetch(`http://localhost:3001/api/consoles/${props._id}`, {
            method: "DELETE"
        });

        if(response.status === 200){
            setResult("Console Deleted");
            props.closeDialog();
            props.hideConsole();
        } else {
            setResult("Could Not Delete Console");
        }
    };

    return(
        <div id="delete-dialog">
            <h3>Are you sure you want to delete {props.name}?</h3>
            <section>
                <button id="no-button" onClick={props.closeDialog}>No</button>
                <button id="yes-button" onClick={deleteConsole}>Yes</button>
            </section>
            <span>{result}</span>
        </div>
    );
}

export default DeleteDialog;