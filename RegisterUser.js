import React, { useState } from 'react';


const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const[aid,setAid]=useState("");
  const[DOB,setDOB]=useState("");

  const handleAidChange=(event)=>{
    setAid(event.target.value);
};

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmChange = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the registration data to the server
    // ...
    if (password!==confirmpass)
    alert("password not matched! try again ");
  };
  const handleDOBChange=(event)=>{
    setDOB=event.target.value;
  }

  return (
    <div>
        <h1>Registration Page</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label><br>
      </br>
      {/* <label>
        UserEmail:
        <input type="email" value={email} onChange={handleEmailChange} />
        <br></br>
      </label> */}
      <label for ="datemax">
        DOB:
        <input type='date' value={DOB} onChange={handleDOBChange} max="2003-12-1"/>
      </label><br></br>
      <label><br></br>
        Adhar ID:
          <input type="number" value={aid} onChange={handleAidChange} />
        </label><br></br>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label><br></br>
        <label>
            Confirm password:
            <input type="password" value={confirmpass} onChange={handleConfirmChange} />
        </label><br></br>
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationPage;
