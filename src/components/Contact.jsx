import { useState } from 'react';
import './../css/Contact.css';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "f2df5de1-9907-4ec3-afcf-039d1f086810");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div id="apply-form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label for="name">Name: </label>
                <input type="text" name="name" required/>
            </div>
            <div className="form-group">
                <label for="email">Email: </label>
                <input type="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="message">Message: </label>
                <textarea name="message" required></textarea>
            </div>
            <div className="form-btn">
                <button type="submit">Submit Form</button>
            </div>
            <span>{result}</span>
        </form>
    </div>
  );
}

