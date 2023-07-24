import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import {BASE_URL} from "../Combined/Helper.jsx";
import './Login.css';

function Login() {
    const [credentials, setCredentials] = useState({email:"",password:""});
    let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch (`${BASE_URL}/loginuser`,{
      method:'POST',
      headers:{
          'Content-Type' : 'application/json'
      },
      body:JSON.stringify({email:credentials.email, password:credentials.password})
    });
    const json = await response.json()
    console.log(json);

    if(!json.success){
      alert("enter valid credentials")
    }
    if(json.success){
      localStorage.setItem("authToken",json.authToken);
      console.log( localStorage.getItem("authToken"));
      navigate("/");
    }
  }
  const onChange=(event)=>{
setCredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Log In</h2>
     
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name='password'
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <li><Link to="/Signin/1">Create new account</Link></li>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
