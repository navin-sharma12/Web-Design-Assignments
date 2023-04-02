import React, { useState } from 'react';
import "../Login/LoginPage.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ ...props }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const loginUser = async (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/assignment8/login", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailid: email,
                password: pass,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data == true) {
                    props.handleLogin(true);
                    navigate("/main");
                } else {
                    alert("Invalid Username or Password");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div class="container">
            <form id="myForm">
                <h2>Login</h2>
                <input type="text" id="emailid" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="password" id="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit" id="submitButton" onClick={loginUser}>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;