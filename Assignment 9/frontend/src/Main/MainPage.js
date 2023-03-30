import "../styles.css";
import Navbar from "../Components/Navbar/Navbar.js"
import navin from "../images/navin.png";
import linkedin from "../images/linkedIn.jpg";
import instagram from "../images/instagram.jpg";

export default function MainPage() {
    return (
        <div>
            <Navbar/>
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