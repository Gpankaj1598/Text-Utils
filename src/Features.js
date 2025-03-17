import React from "react";

const Features = (props) => {

  let bar = {
    width: "300px",
    style: "width: 25%", 
  };

  let myStyle = {
    dark_color: props.mode === 'dark' ? '#000' : '#fff',
    backgroundColor: props.mode === 'dark' ? '#0080ff' : '0080ff',
    // border: '2px solid white' 
  }

  return (
    <div style={{color: props.mode === 'dark'?'white':'#000'}}>
        <h2>Features Section</h2>
        <div className="content p-2" style={myStyle}>

              <p>We have provide different type of features in text utils app...</p>

              <label htmlFor="">
                <strong>UpperCase:</strong>
              </label>
              <div className="progress" role="progressbar" aria-label="Basic example" 
              aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" 
                style={bar} >
                <div className="progress-bar w-50"></div>
              </div> 

              <br />

              <label htmlFor="">
                <strong>LowerCase:</strong>
              </label>
              <div className="progress" role="progressbar" aria-label="Basic example" 
              aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
                style={bar} >
                <div className="progress-bar w-50"></div>
              </div>

              <br />

              <label htmlFor="">
                <strong>CopyText:</strong>
              </label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
                style={bar} >
                <div className="progress-bar w-50"></div>
              </div>

              <br />

              <label htmlFor="">
                <strong>Remove Extra space:</strong>
              </label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
                style={bar} >
                <div className="progress-bar w-50"></div>
              </div>

              <br />

              <label htmlFor="">
                <strong>Clear Text:</strong>
              </label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
                style={bar} >
                <div className="progress-bar w-50"></div>
              </div>
              <br />
          </div>    

        <button type="submit">Click Here</button>
    </div>
  );
};

export default Features;
