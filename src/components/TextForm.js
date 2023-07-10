import React, { useState } from 'react'
import Alert from './Alert';


export default function TextForm(props) {
  const [text, setText] = useState();
  const [alert, setAlert] = useState(null);



  function handleUpClick(e) {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper case.", "Success")
  }
  function handleUpChange(e) {
    setText(e.target.value)
  }
  function handleLoClick(e) {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower case.", "Success")

  }
  function handleCopy() {
    var text = document.getElementById("myBox2")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard.", "Success");
  }

  function removeExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed.", "Success");
  }

  return (
    <>
      <div className="container my-4" style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light' }}>
        <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.mainHeading}</h3>
        <div className="mb-3">
          <textarea className="form-control" id="myBox1" onChange={handleUpChange} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8">{props.textareaText}</textarea>
        </div>
        <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>{props.upperCaseButton}</button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>{props.lowerCaseButton}</button>
        {/* <button className="btn btn-primary mx-3" onClick={handleUpClick}>Upper Case</button> */}
      </div>

      <div className="container my-4">
        <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.convertedHeading}</h3>

        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox2" rows="8">{props.convertedText}</textarea>

        </div>
        <button className="btn btn-primary mx-3 my-1" onClick={removeExtraSpaces}>{props.spaceButton}</button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleCopy}>{props.copyButton}</button><br />
      </div>
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <h3>{props.summaryHeading}</h3> */}
        {/* <p>{text.split(" ").length} words and {text.length} characters.</p> */}
        {/* <p> {0.008 * text.split(" ").length} minutes to read</p> */}
      </div>
    </>
  )
}


TextForm.defaultProps = {
  mainHeading: "Enter your text to analyze:",
  textareaText: "Enter your text here...",
  convertedText: "Your converted text here...",
  upperCaseButton: "Upper case",
  lowerCaseButton: "Lower case",
  copyButton: "Copy Text",
  spaceButton: "Remove extra spaces",
  convertedHeading: "Your converted text here:",
  summaryHeading: "Your text summary:"
}