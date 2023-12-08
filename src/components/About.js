import React from "react";

function About() {
    return (
        <div className="bio">
            <div className="profile-img">
                <img  src={require('../asset/PXL_20231114_031151750~3.jpg')} alt="Tarun's profile pitcure" />
            </div>
            <div className="bio-data">
                <div className="head-bio">
                    A Tech Enthusiast And a Fresher in Software Domain
                </div>
                <div className="bio-disc">I am Tarun, and I am from Gujarat. I am a B.Tech graduate specialized in Information and Communication Technology from Dhirubhai Ambani Institute, Gandhinagar. I am really passionate about programming. Regarding my professional background, I have a six-month internship experience at Clomotech PVT Ltd, where I joined during my final semester of graduation. I was hired as a front-end developer and worked on a live project for ICICI Lombard Web Application development. In the internship, I gained web development skills like Angular, Typescript, and JavaScript, and my responsibilities included resolving bugs, developer testing, and implementing new features to enhance the Customer Representative experience.</div>
                <div className="icons">
                    <a href="https://twitter.com/TarunBoricha1" target="_blank" rel="noreferrer"><i class="bi bi-twitter"></i></a>
                    <a href="https://www.instagram.com/tarunborichaa/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
                    <a href="https://github.com/tarunboricha" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/tarunboricha/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}

export default About;