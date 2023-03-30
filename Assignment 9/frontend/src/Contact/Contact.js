import "../styles.css";
import React from 'react';
import {Link} from 'react-router-dom';
import home from "../images/home.svg";
import about from "../images/human.svg";
import jobs from "../images/education icon.png";
import contact from "../images/contact.svg";

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
            <div class="column_right_about">
                <h1>
                    Contact
                </h1>
                <div class="float-container">

                    <div class="float-child">
                        <a href="tel:+1617-961-9878" target="_blank">
                            <img src="images/phone.png" alt="icon"/>
                            <label for="icon">Phone: <br/> +1 (617) 961 9878</label>
                        </a>
                    </div>

                    <div class="float-child2">
                        <a href="mailto:sharma.navi@northeastern.edu" target="_blank">
                            <img src="images/email.png" alt="icon"/>
                            <label for="icon">Email: <br/> sharma.navi@northeastern.edu</label>
                        </a>
                    </div>

                    <div class="float-child3">
                        <img src="images/location.png" alt="icon"/>
                        <label for="icon">Location: <br/> 886 Huntington Ave, Boston, MA - 02115</label>
                    </div>

                    <div class="float-child4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.481697331845!2d-71.11360238450135!3d42.33225244484974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3799a90498641%3A0xf69c3cceedb590!2s886%20Huntington%20Ave%2C%20Boston%2C%20MA%2002115!5e0!3m2!1sen!2sus!4v1674633171997!5m2!1sen!2sus"
                            >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}