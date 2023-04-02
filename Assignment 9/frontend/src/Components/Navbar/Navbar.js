import "../../styles.css";
import React from 'react';
import {Link} from 'react-router-dom';
import home from "../../images/home.svg";
import about from "../../images/human.svg";
import jobs from "../../images/education icon.png";
import contact from "../../images/contact.svg";
import Card from "../Cards/Cards";

export default function Navbar () {
    return (
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
    )
}