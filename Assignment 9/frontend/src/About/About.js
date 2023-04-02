import "../styles.css";
import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js"
import navin from "../images/navin.jpeg";
import circle from "../images/circle.png";

export default function About() {
    return (
        <div>
            <Navbar />
            <div class="column_right_about">
                <h1>
                    About Me
                </h1>
                <img id="img3" src={navin} alt="image" />
                <img id="img4" src={circle} alt="image" />
                <p>
                    I am a graduate student in information systems at Northeastern University, I work hard, and I am
                    self-driven. I enjoy being pushed and working on tasks that require me to venture outside of my comfort zone
                    and knowledge base, even as I continue to learn new languages and develop the skills that are essential to
                    gaining more real world experience and making a positive contribution to an organization's success.
                </p>
                <h1>
                    Skills
                </h1>
                <div class="column1">
                    <label for="file">Java</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                    <label for="file">Python</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                    <label for="file">C#</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                    <label for="file">SQL</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                </div>
                <div class="column2">
                    <div class="years">
                        3+ Years <br />of experience
                    </div>
                    <label for="file">UiPath</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                    <label for="file">HTML / CSS</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                    <label for="file">JavaScript</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                    <label for="file">Macros</label><br />
                    <progress id="file" value="90" max="100"> 90% </progress><br /><br />
                </div>
            </div>
        </div>
    )
}