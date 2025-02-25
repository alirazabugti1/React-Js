import React, { useState } from 'react';

export default function Textform(props) {

    const [text, setText] = useState('Enter Text Here');
    //For Upper Case
    const handleUpClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText);
    };
    //Function For Lower Case
    const handleUpClickk = () => {
        let New = text.toLowerCase(); 
        setText(New);
    };
//Function For Clearing
const handleUpClickkk = () => {
   
    setText(" ");
};

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="container">
          <h3 style={{ marginLeft: "400px" }}>{props.Heading}</h3>

            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"></label>
                <textarea 
                    className="form-control" 
                    value={text}
                    onChange={handleOnChange} 
                    id="exampleFormControlTextarea1" 
                    rows="8"
                ></textarea>
            </div>
            <div className="d-flex gap-2 mt-2" style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to Uppercase
            </button>

            <button className="btn btn-success" onClick={handleUpClickk}>
                Convert to LowerCase
            </button>
            <button className="btn btn-danger" onClick={handleUpClickkk}>
                Clear Text
            </button>
            </div>
        </div>
    );
}
