import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Login/LoginPage.css";

export default function LoginPage ({...props}) {
    const navigate = useNavigate();
    const handleSignIn = () => {
        props.handleLogin();
        navigate('/main')
    }
    return(
        <div class="container">
            <form id="myForm">
                <h2>Login</h2>
                <input type="text" id="emailid" placeholder="Email ID" /><br/>
                <input type="password" id="password" placeholder="Password" /><br/>
                <button type="submit" id="submitButton" onClick={handleSignIn}>Login</button>
            </form>
        </div>
    )
}