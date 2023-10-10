import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../Styles/Register.css'
import { SERVER } from '../config';

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) =>  {
    e.preventDefault();

    const response = await fetch(`${SERVER}/api/Register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email.trim(),
            password: email.trim()
        }),
    })

    const jsonData = await response.json();

    console.log(jsonData)
    
    if(response.status === 200) {
        localStorage.setItem('futstal-token', jsonData.data.token)
        navigate('/dashboard')
    }  else {
        alert("Invalid Username or password");
    }
}


return (
<div>
<form onSubmit={handleSubmit}>
    <div className="box-form">
    <div className="left">
        <div className="overlay">
        <h1>National Sport Center</h1>
        <p>The best place to experience the sports activities with your friends to make you healthy and fit.</p>
        </div>
    </div>
    <div className="right">
    <h5>Sign Up</h5>
    <div className="inputs">
        <input type="Name" placeholder='Name' required name="Name" />
        <input type="Name" placeholder='Username' required name="Name" />
        <input type="email" placeholder='Email' required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder='Phone Number' required name="Number" />
        
        <input type="password" placeholder='Password' required name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
        <button type='submit'>Sign Up</button>
    </div>
</div>
</form>
</div>
);
};

export default Registration;
