import React, { useState } from 'react'
import '../Styles/Login.css';
import {useNavigate} from 'react-router-dom';
import { SERVER } from '../config';
import { useEffect } from 'react';
import { useAuth } from '../context/authentication';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail]  = useState("")
    const [password, setPassword]  = useState("")
    const {isAuthenticated, login} = useAuth()

    useEffect   (() => {
        if(isAuthenticated) {
            navigate('/profile')
        }
    }, [isAuthenticated, navigate])

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
    
            const response = await fetch(`${SERVER}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.trim(),
                    password: password.trim()
                }),
            })
    
            const jsonData = await response.json();
            
            if(response.status === 200) {
                login(jsonData.token)
                navigate('/profile')
            }  else {
                alert("Invalid Username or password");
            }
        }
            catch(error){
                console.error('An error occurred:', error);
            }
    };
    

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
            <h5>Login</h5>
            <p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p>
            <div className="inputs">
                <input type="email" placeholder='Email' required name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' required name="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
                <button type='submit'>Login</button>
            </div>
        </div>
        </form>
    </div>
    )
}

export default Login
