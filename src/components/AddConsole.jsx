import './../css/Dialog.css';
import './../css/AddConsole.css';
import React, {useState} from 'react';

//http://localhost:3001/api/consoles
//https://game-store-server-728j.onrender.com/api/consoles

const AddConsole = (props) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) =>{
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) =>{
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch("https://game-store-server-728j.onrender.com/api/consoles", {
            "method" : "post",
            "body" : formData
        });

        if(response.status === 200){
            setResult("CONSOLE ADDED TO BUYLIST");
            event.target.reset();
            props.closeDialog();
            props.updateConsoles(await response.json());   
        } else {
            setResult("ERROR ADDING CONSOLE");
        }

    }

    return (
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
                    <div id="form-container">
                        <form id="add-console-form" onSubmit={addToServer}>
                            <p>
                                <label htmlFor="name">Console Name: </label>
                                <input type="text" id="name" name="name" required />
                            </p>
                            <p>
                                <label htmlFor="price">Console Price: </label>
                                <input type="number" id="price" name="price" step="any" min="0.0" required />
                            </p>
                            <p>
                                <label htmlFor="stock">Amount in Stock: </label>
                                <input type="number" id="stock" name="stock" min="0" required />
                            </p>
                            <p>
                                <label htmlFor="rating">Console Rating: </label>
                                <input type="number" id="rating" name="rating" step="0.1" min="0.0" max="5.0" required />   
                            </p>
                            <p>
                                <label htmlFor="description">Console Description: </label>
                                <textarea type="text" id="description" name="description" required></textarea>
                            </p>
                            <section id="img-input">
                                <div>
                                    <p id="img-prev-section"> 
                                        {prevSrc !== ""? (<img id="img-prev" src={prevSrc} alt=""/>): ("")}
                                    </p>
                                </div>
                                <p id="img-upload">
                                    <label htmlFor="img">Upload Image</label>
                                    <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
                                </p>
                            </section>
                            <p>
                                <button type="submit">Submit</button>
                            </p>
                            <p>{result}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddConsole;