import React, { useState } from "react";

export default function TextForm(props) {

  // let layout = {
  //    position: relative
  // }

    const [text, setText] = useState("");

    const handleonChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value);
    }

    const clickUppercase = ()=>{
        // console.log("clickUppercase" + text);
        let upper_case = text.toUpperCase();
        setText(upper_case);
        props.showAlert("Convert to Uppercase!!", "success");
    }

    const clickLowercase = ()=>{
      console.log("textarea is empty")
        let lower_case = text.toLowerCase();
        setText(lower_case);
        props.showAlert("Convert to lowercase!!", "success");
    }

    const clearText = ()=>{
      let clear_text = '';
      setText(clear_text);
      props.showAlert("Text Cleared!!", "success");
    }

    const removeSpace = ()=>{
      let remove_space = text.split(" ").join("");
        setText(remove_space);
        props.showAlert("Extra Spaces Remove!!", "success");
    }

    const copyText = ()=>{
        let copy_text = document.getElementById("box");
        copy_text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(copy_text.value);
        props.showAlert("Copied to Clipboard Text!!", "success");
    }

  return (
    <>
          <div className="container" style={{color: props.mode ==='dark' ? 'white' : '#042743'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1">Enter Your Text Here...</label>
              <textarea className="form-control" value={text} onChange={handleonChange} id="box" rows="3" 
              style={{backgroundColor: props.mode ==='dark' ? '#0080ff' : 'white', color: props.mode ==='dark' ? 'white' : '#042743'}}></textarea>
            </div>

            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={clickUppercase}>Convert to UpperCase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={clickLowercase}>Convert to LowerCase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeSpace}>Remove Extra Space</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
            
          </div>
          <div className="container my-2" style={{color: props.mode ==='dark' ? 'white' : '#042743'}}>
              <h2>Your text summary</h2>
              <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
              <p></p>
              <h2>Preview</h2>
              <p>{text.length > 0 ? text :"Enter something in textbox to preview it here..."}</p>
          </div>
    </>
  );
}
