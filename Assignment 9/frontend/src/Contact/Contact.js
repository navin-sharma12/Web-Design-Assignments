import "../styles.css";
import React from 'react';
import Navbar from "../Components/Navbar/Navbar.js"
import phone from "../images/phone.png";
import email from "../images/email.png";
import location from "../images/location.png";

export default function MainPage() {
    return (
        <div>
            <Navbar/>
            <div class="column_right_about">
                <h1>
                    Contact
                </h1>
                <div class="float-container">

                    <div class="float-child1">
                        <a href="tel:+1617-961-9878" target="_blank">
                            <img src={phone} alt="icon"/>
                            <label for="icon">Phone: <br/> +1 (617) 961 9878</label>
                        </a>
                    </div>

                    <div class="float-child2">
                        <a href="mailto:sharma.navi@northeastern.edu" target="_blank">
                            <img src={email} alt="icon"/>
                            <label for="icon">Email: <br/> sharma.navi@northeastern.edu</label>
                        </a>
                    </div>

                    <div class="float-child3">
                        <img src={location} alt="icon"/>
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