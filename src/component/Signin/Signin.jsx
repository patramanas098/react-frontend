import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {BASE_URL} from "../Combined/Helper.jsx";
import './Signin.css';

function Signin() {
    const [credentials, setCredentials] = useState({name:"",email:"",password:""});


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch (`${BASE_URL}/creatuser/`,{
      method:'POST',
      headers:{
          'Content-Type' : 'application/json'
      },
      body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
    });
    const json = await response.json()
    console.log(json);


    if(!json.success){
      alert("enter valid credentials")
    }
    setCredentials({ name: '', email: '', password: '' });
    alert("Successfully Signed in");
  }
  const onChange=(event)=>{
setCredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div className="signincontainer">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="string"
            name='name'
            id="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
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
        <li><Link to="/Login/1">Already a user</Link></li>
        <button type="submit" className='signinbutton'> Sign Up</button>
      </form>
    </div>
  );
}

export default Signin;
