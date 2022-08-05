import React, {useState} from 'react'

export default function TextForm(props) {
  //Handle On Upper Click Function
  const handleUpperClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase","success");
  }
  //Handle On Lower Click Function
  const handleLowerClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
  }
  //Handle On First Letter to uppercase Click Function
  const handleFirstClick = ()=>{
    let newText = text.charAt(0).toUpperCase();
    let secondHalf = newText + text.slice(1).toLowerCase();
    setText(secondHalf);
    props.showAlert("First letter converted to Uppercase","success");
  }
  //Handle Clear Click Function
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  //Handle Copy to Clipboard Click Function
  const handleCopyClick = ()=>{
    let copy = document.getElementById('myBox');
    copy.select();
    navigator.clipboard.writeText(copy.value);
    props.showAlert("Text copied to clipboard","success");
  }
  //Handle Remove Extra Spaces Click Function
  const handleExtraSpacesClick = ()=>{
    let remove = text.split(/[ ]+/);
    setText(remove.join(" "));
    props.showAlert("Extra spaces removed from the text","success");
  }
  //Handle On Change Function
  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  //UseState for text
  const [text, setText] = useState('');

  const replace = (t)=>{
    let newText = t.trim();
    return newText;
  }
  
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        {/*Heading*/}
        <h1>{props.titleHeading}</h1>
        {/*Text Area*/}
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}}></textarea>
        </div>
        {/*Button*/} 
        <button className="btn btn-primary" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleFirstClick}>Convert First Letter to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      {/*Word count and character length*/}
      <p>{replace(text).split(" ").length} words and {text.length} characters</p>
      {/*Time taken to read total words*/}
      <p>{0.008 * replace(text).length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0?text:'Enter text in the above box to preview it here'}</p>
    </div>
    </>
  )
}
