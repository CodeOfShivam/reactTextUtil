import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const clearUpClick = () =>{
       text = setText("")
    }

    const copyUpClick = () =>{
        
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" placeholder='Enter the text' rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-danger mx-2" onClick={clearUpClick}>Clear</button>
            <button className="btn btn-success mx-2" onClick={copyUpClick}>Copy</button>
        </div>
        <div className='container my-3'>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} charactors</p>
        </div>
        </>
    )
}
