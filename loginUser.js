import React,{useState} from "react"
// import { useHistory } from 'react-router-dom';
// import {Component} from "react"

function Login(){
    // const history = useHistory();

    const [uname,setUname]=useState("")
    const [pass,setPass]=useState("")
    const[aid,setAid]=useState("")

    // const handleButtonClick = () => {
    //     history.push('welcome.js');
    //   };
    const handleAidChange=(event)=>{
        setAid(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUname(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPass(event.target.value);
      };
      const final=(event)=>
      {
        event.preventDefault();
        alert(`are you sure you want to continue as: ${uname}?`)

      }
      


      return (
        <div>
            <h3>Welcome User</h3>
            <form onSubmit={final}>
            <label>
          Username:
          <input type="text" value={uname} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
        Adhar ID:
          <input type="number" value={aid} onChange={handleAidChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={pass} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
            </form>

            Do not have an account ?
            <button >Register</button>
        </div>
      );
      
}

// const form=()=>
// {
//     return(
//         <div>
            
//        Username: <input type="text" placeholder="name"/><br></br>
//         Password:<input type="text" placeholder="password"/><br></br><br></br>
//         <button type="submit" >submit:</button>
//         </div>
//     );
// }
 export default Login;
