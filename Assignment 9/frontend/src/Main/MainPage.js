import "../styles.css";
import React from 'react';
import {Link} from 'react-router-dom';

export default function MainPage() {
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
            <div class="column_right">
                <img id="img2" src="images/navin.png" alt="image"/>
                <h3>
                    Hello, I'm Navin Sharma
                </h3>
                <h1>
                    <span>
                        Software
                    </span>
                    <span>
                        Engineer
                    </span>
                </h1>
                <p>
                    I am a Software Engineer based in USA, over 3 years of professional experience.
                </p>
                <a href="https://www.linkedin.com/in/navin-sharma">
                    <img class="column_right_img1" src="images/linkedIn.jpg" alt="icon"/>
                </a>
                <a href="https://www.instagram.com/">
                    <img class="column_right_img2" src="images/instagram.jpg" alt="icon"/>
                </a>
            </div>
        </div>
    )
}