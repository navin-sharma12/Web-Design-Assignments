import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Login/LoginPage.css";

export default function LoginPage({...props}){
    const navigate = useNavigate();
    const handleSignIn = () => {
        props.handleLogin();
        navigate('/main')
    }
    return(
        <div className="login-page">
            <h1> Login Page</h1>
            <form>
                <label>
                    Username:
                    <input type="text" className="login-input" />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" className="login-input" />
                </label>
                <br/>
                <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    )
}