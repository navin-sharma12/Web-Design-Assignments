import "../styles.css";
import React from 'react';
import {Link} from 'react-router-dom';

export default function About() {
    return (
        <div>
            <div class="column_left">
                <nav>
                <p>NAVIN SHARMA</p>
                    <li class="home">
                        <Link to='/main'>
                            <img src="images/home.svg" alt="icon"/>
                            Home
                        </Link>
                    </li><br/>
                    <li class="about">
                        <Link to='/about'>
                            <img src="images/human.svg" alt="icon"/>
                            About
                        </Link>
                    </li><br/>
                    <li class="education">
                        <Link to='/education'>
                            <img src="images/education icon.png" alt="icon"/>
                            Education
                        </Link>
                    </li><br/>
                    <li class="projects">
                        <Link to='/certificates'>
                            <img src="images/project.png" alt="icon"/>
                            Certificates
                        </Link>
                    </li><br/>
                    <li class="contact">
                        <Link to='/contact'>
                            <img src="images/contact.svg" alt="icon"/>
                            Contact
                        </Link>
                    </li>
                </nav>
            </div>
            <div class="column_right_about">
                <h1>
                    About Me
                </h1>
                <img id="img3" src="images/navin.jpeg" alt="image"/>
                <img id="img4" src="images/circle.png" alt="image"/>
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
                    <label for="file">Java</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                    <label for="file">Python</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                    <label for="file">C#</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                    <label for="file">SQL</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                </div>
                <div class="column2">
                    <div class="years">
                        3+ Years <br/>of experience
                    </div>
                    <label for="file">UiPath</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                    <label for="file">HTML / CSS</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                    <label for="file">JavaScript</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                    <label for="file">Macros</label><br/>
                    <progress id="file" value="90" max="100"> 90% </progress><br/><br/>
                </div>
            </div>
        </div>
    )
}