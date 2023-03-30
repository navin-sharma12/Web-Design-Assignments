import "../styles.css";
import React from 'react';
import {Link} from 'react-router-dom';
import home from "../images/home.svg";
import about from "../images/human.svg";
import jobs from "../images/education icon.png";
import contact from "../images/contact.svg";
import navin from "../images/navin.png";
import linkedin from "../images/linkedIn.jpg";
import instagram from "../images/instagram.jpg";

export default function MainPage() {
    return (
        <div>
            <div class="column_left">
                <nav>
                    <p>NAVIN SHARMA</p>
                    <li class="home">
                        <Link to='/main'>
                            <img src={home} alt="icon"/>
                            Home
                        </Link>
                    </li><br/>
                    <li class="about">
                        <Link to='/about'>
                            <img src={about} alt="icon"/>
                            About
                        </Link>
                    </li><br/>
                    <li class="education">
                        <Link to='/jobs'>
                            <img src={jobs} alt="icon"/>
                            Jobs
                        </Link>
                    </li><br/>
                    <li class="contact">
                        <Link to='/contact'>
                            <img src={contact} alt="icon"/>
                            Contact
                        </Link>
                    </li>
                </nav>
            </div>
            <div class="column_right">
                <img id="img2" src={navin} alt="image"/>
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
                    <img class="column_right_img1" src={linkedin} alt="icon"/>
                </a>
                <a href="https://www.instagram.com/">
                    <img class="column_right_img2" src={instagram} alt="icon"/>
                </a>
            </div>
        </div>
    )
}