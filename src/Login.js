
import React,{useState} from "react"

const Login=()=>{
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setpassErr]=useState("");



    const submit=(e)=>{
        e.preventDefault();
        if(user.length < 6 || password.length <4){
            alert("Please fill the input filed.");
        }else{
            alert("Form Submit Sucessfully");
        }
    }

    const userHandler=(e)=>{
        const item = e.target.value;
        if(item.length < 6){
            setUserErr(true);
        }else{
            setUserErr(false);
        }
        setUser(item)
    }

    const passHandler=(e)=>{
        const item = e.target.value;
        if(item.length < 4){
            setpassErr(true);
        }else{
            setpassErr(false);
        }
       // console.log(e.target.value.length);
       setPassword(item)
    }


    return(
        <div>
            <h2>Form Validations</h2>
            <h3>Login Form</h3>
            <form onSubmit={submit}>

                <label style={{fontFamily:"cursive", fontWeight:"bold"}}>Name: </label> <input type="text" placeholder="Name" onChange={userHandler} required/>
                {userErr ? <span> User Name is not valid</span>:""} <br /> <br />

                <label style={{fontFamily:"cursive", fontWeight:"bold"}}>Password: </label> <input type="text" placeholder="Password" onChange={passHandler} required/>
                {passErr ? <span> Password Invalid</span>:""}<br /> <br />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default Login



// eeee:eeee?""