import React, { useState } from 'react';
import "../Login/LoginPage.css";

export default function LoginPage ({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/assignment8", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then((res) => {
            if (res.status === 200) {
                res
                .json()
                .then((user) => setUser(user))
                .catch((err) => alert(err));
            } else {
                alert("Invalid Credentials");
            }
        })
        .catch((err) => {
            alert("Invalid email or password");
        });
    }
    return(
        <div class="container">
            <form id="myForm">
                <h2>Login</h2>
                <input type="text" id="emailid" placeholder="Email ID" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                <button type="submit" id="submitButton" onClick={loginUser}>Login</button>
            </form>
        </div>
    )
}