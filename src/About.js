import React from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleButton = () =>{
    //     console.log("toggleButton");
    //     if(myStyle.color === 'black'){
    //         setMyStyle ({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }else{
    //         setMyStyle ({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }


  let myStyle = {
      color: props.mode === 'dark' ? 'white' : '#042743',
      backgroundColor: props.mode === 'dark' ? '#0080ff' : 'white',
      border: '2px solid white'
  }
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2 className="my-2">About Us</h2>
      <div className="content p-2" style={myStyle}>
           <h3>This is heading 1</h3>
           <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aperiam laboriosam corporis, asperiores vitae natus quibusdam impedit itaque nisi? Tempore placeat dolores dolor dolorum aperiam quasi ipsa possimus nesciunt pariatur facilis alias est harum, laboriosam nostrum minus voluptatum mollitia quod! 
           </p>
           <h3>This is heading 2</h3>
           <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aperiam laboriosam corporis, asperiores vitae natus quibusdam impedit itaque nisi? Tempore placeat dolores dolor dolorum aperiam quasi ipsa possimus nesciunt pariatur facilis alias est harum, laboriosam nostrum minus voluptatum mollitia quod! 
           </p> 
           <h3>This is heading 3</h3>
           <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque aperiam laboriosam corporis, asperiores vitae natus quibusdam impedit itaque nisi? Tempore placeat dolores dolor dolorum aperiam quasi ipsa possimus nesciunt pariatur facilis alias est harum, laboriosam nostrum minus voluptatum mollitia quod! 
           </p>
      </div>
    </div>
     {/* <div className="container my-3">
     <button type="button" onClick={toggleButton} className="btn btn-primary">{btntext}</button>
    </div> */}
   </>
  );
}
