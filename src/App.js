
import "./App.css";
import Content from "./Content"
import About from "./About";
import React, { useState } from 'react';
import TextForm from "./TextForm";
import Alert from "./Alert";
import Features from "./Features";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  // let space = {
  //     padding: "200px", 
  // };

  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert =(message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 3000);
  }

      const toggleMode =() =>{
          if(mode === 'light'){
            setMode ('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled..", "success");
            // document.title = 'TextUtils -Dark Mode';
          }else{
            setMode ('light');
            document.body.style.backgroundColor = '#DCDCDC';
            showAlert("Light mode has been enabled...", "success");
           // document.title = 'TextUtils -Light Mode';
          }
      }
     
      return(
        <Router>
            <Content title="Text-Utils" about="About Us" mode={mode} 
            toggleMode={toggleMode}></Content>
            <Alert alert={alert}/>

            <div className="container my-4">
              <Switch>
                  <Route exact path="/about" >
                    <About mode={mode} />
                  </Route>     

                  <Route exact path="/">
                      <TextForm showAlert={showAlert} 
                      heading="Enter Your Text here to analyze..." 
                      mode={mode} />
                  </Route> 

                  <Route exact path="/features">
                    <Features />
                  </Route>    
              </Switch> 
            </div>
        </Router>
      );
}

export default App;


