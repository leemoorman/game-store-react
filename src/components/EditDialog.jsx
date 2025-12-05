import './../css/Dialog.css';
import React, {useState} from 'react';

const EditDialog = (props) => {

    const [result, setResult] = useState('');
    const [prevSrc, setPrevSrc] = useState(`https://game-store-server-728j.onrender.com/console-images/${props.img}`);

    const uploadImage = (event) =>{
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) =>{
        event.preventDefault();
        setResult('... Sending');

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`https://game-store-server-728j.onrender.com/api/consoles/${props._id}` ,{
            method: "PUT",
            body: formData
        });

        if(response.status === 200){
            setResult("Console Updated!");
            event.target.reset();
            props.updateConsole(await response.json());
            props.closeDialog();
        } else {
            setResult('Error Editing Consoles');
        }

    };

    return (  
                    <div id="form-container">
                        <form onSubmit={onSubmit}>
                            <p>
                                <label htmlFor="name">Console Name: </label>
                                <input type="text" id="name" name="name"  defaultValue={props.name} required />
                            </p>
                            <p>
                                <label htmlFor="price">Console Price: </label>
                                <input type="number" id="price" name="price" step="any" min="0.0" defaultValue={props.price} required />
                            </p>
                            <p>
                                <label htmlFor="stock">Amount in Stock: </label>
                                <input type="number" id="stock" name="stock" min="0" defaultValue={props.stock} required />
                            </p>
                            <p>
                                <label htmlFor="rating">Console Rating: </label>
                                <input type="number" id="rating" name="rating" step="0.1" min="0.0" max="5.0" defaultValue={props.rating} required />   
                            </p>
                            <p>
                                <label htmlFor="description">Console Description: </label>
                                <textarea type="text" id="description" name="description" defaultValue={props.description} required></textarea>
                            </p>
                            <section id="img-input">
                                <div>
                                    <p id="img-prev-section"> 
                                        {prevSrc !== ""? (<img id="img-prev" src={prevSrc} alt=""/>): ("")}
                                    </p>
                                </div>
                                <p id="img-upload">
                                    <label htmlFor="img">Upload Image</label>
                                    <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                                </p>
                            </section>
                            <p>
                                <button type="submit">Submit</button>
                            </p>
                            <p>{result}</p>
                        </form>
                    </div>
    );
};

export default EditDialog;