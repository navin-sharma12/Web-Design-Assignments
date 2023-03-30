import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../Login/LoginPage.css";

const LoginPage = ({...props}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/assignment8/?emailid=${email}&password=${password}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((res) => {
            if (res.status === 200) {
                res.json().then(data => {
                if (data[0].emailid === email) {
                    props.handleLogin();
                } else {
                    alert("User not found");
                }
                })
            } else {
                alert("Invalid Credentials");
            }
            })
            .catch((err) => {
                alert("Invalid email or password");
            });
    };
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

export default LoginPage;