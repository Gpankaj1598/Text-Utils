import React from "react";

const features = () => {
  let bar = {
    width: "500px",
  };
  return (
    <div>
      <h2>Features Section</h2>
      <p>We have provide different type of features in textutils app...</p>

      <label htmlFor="">
        <strong>UpperCase:</strong>
      </label>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
        style={bar} >
        <div className="progress-bar w-50"></div>
      </div>

      <label htmlFor="">
        <strong>LowerCase:</strong>
      </label>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
        style={bar} >
        <div className="progress-bar w-50"></div>
      </div>

      <label htmlFor="">
        <strong>CopyText:</strong>
      </label>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
        style={bar} >
        <div className="progress-bar w-50"></div>
      </div>

      <label htmlFor="">
        <strong>Remove Extra space:</strong>
      </label>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
        style={bar} >
        <div className="progress-bar w-50"></div>
      </div>

      <label htmlFor="">
        <strong>Clear Text:</strong>
      </label>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
        style={bar} >
        <div className="progress-bar w-50"></div>
      </div>
    </div>
  );
};

export default features;
