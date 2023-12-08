import React from "react";

function Cv() {
    return (
        <div className="cv">
            <div className="left-side">
                <div className="experience">
                    <div className="exper-head" style={{ textAlign: 'left' }}>
                        Education
                    </div>
                    <div className="internship">
                        <div className="inter-head">
                            Dhirubhi Ambani Institute of ICT
                        </div>
                        <div className="inter-head" id="desktop">
                            BTech in Information and Communication Technology
                        </div>
                        <div className="inter-head" id="mobile">
                            BTech in ICT
                        </div>
                        <div className="inter-head">
                            Gandhinagar | Aug 2019 - Jun 2023
                        </div>
                        <div className="inter-head">
                            CGPA: 6.34/10
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="exper-head" style={{ textAlign: 'left' }}>
                        INTERNSHIP
                    </div>
                    <div className="internship">
                        <div className="inter-head">
                            CLOMOTECH PVT LTD | Frontend Developer
                        </div>

                        <div className="inter-head">
                            Feb 2023 - Jul 2023 | Remote | Experiece Latter
                        </div>
                        <div className="inter-disc">
                            <ul>
                                <li>At Clomotech, I contributed to the development of a Web Application forICICI
                                    Lombard, one of the leading insurance companies in India</li>
                                <li>I created user-friendly and interactive UI elements, using Angular and other
                                    web technologies. I also solved bugs, improved performance, and implemented
                                    new features to enhance the Customer Representative experience.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="exper-head" style={{ textAlign: 'left' }}>
                        PROJECTS
                    </div>
                    <div className="internship">
                        <div className="inter-head">
                            ANGULAR CRUD MEN’S FASHION WEB-APP
                        </div>

                        <div className="inter-head">
                            Skills Developed: Angular, TypeScript, JavaScript | Repository Link
                        </div>
                        <div className="inter-disc">
                            <ul>
                                <li>I developed E-commerce Fashion Web Application using Angular 15.</li>
                                <li>The primary focus is to build a good, user-interactive Single Page Application.</li>
                                <li>This application allows sellerto perform all CRUD operations on the products.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="internship">
                        <div className="inter-head">
                            HARDWARE MANUFACTURING TASK MANAGEMENT SYSTEM
                        </div>
                        <div className="inter-head">
                            Skills Developed: SQL, DBMS | Project Link
                        </div>
                        <div className="inter-disc">
                            <ul>
                                <li>I developed E-commerce Fashion Web Application using Angular 15.</li>
                                <li>The primary focus is to build a good, user-interactive Single Page Application.</li>
                                <li>This application allows sellerto perform all CRUD operations on the products.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="internship">
                        <div className="inter-head">
                            DNA BASED CRYPTOGRAPHY
                        </div>
                        <div className="inter-head">
                            Skills Developed: C/C++, OOPs, Algorithms | Repository Link
                        </div>
                        <div className="inter-disc">
                            <ul>
                                <li>Develop algorithms that encode the information using DNA sequences.</li>
                                <li>DNA based Steganography approach.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <div className="exper-head" style={{ textAlign: 'left' }}>
                        CERTIFICATIONS
                    </div>
                    <div className="internship">
                        <div className="inter-head">
                            PROBLEM SOLVING INTERMEDIATE
                        </div>

                        <div className="inter-head">
                            Aug 2022 | Certificate Link
                        </div>
                        <div className="inter-disc">
                            <ul>
                                <li>It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and
                                    Algorithms (such as Optimal Solutions)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="internship">
                        <div className="inter-head">
                            Basic C++
                        </div>

                        <div className="inter-head">
                            Sep 2020 | Certificate Link
                        </div>
                        <div className="inter-disc">
                            <ul>
                                <li>It covers topics of Object-oriented programming, Operators, Functions,
                                    Inheritance, Pointers, Polymorphism.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="profile-img" style={{display:'flex', justifyContent:'center',marginTop:'1rem'}}>
                    <img className="cv-profile" src={require('../asset/1670786805272.jpg')} alt="Tarun's profile pitcure" />
                </div>
                <div className="name">Tarun Boricha</div>
                <div className="contact-detail">
                    <div>Software Developer</div>
                    <div>tarunboricha2092001@gmail.com</div>
                    <div>+919374930055</div>
                </div>
                <div className="exper-head" style={{ textAlign: 'left' }}>
                    COURSEWORK
                </div>
                <ul style={{ color: 'white', marginBottom: '15%' }}>
                    <li>Data Structures</li>
                    <li>Programming Language C++</li>
                    <li>Operating Systems</li>
                    <li>Database Management System</li>
                    <li>Object-oriented programming</li>
                    <li>Algorithms</li>
                </ul>
                <div className="exper-head" style={{ textAlign: 'left' }}>
                    SKILLS
                </div>
                <div className="inter-head">
                    TECHNICAL
                </div>
                <ul>
                    <div className="skil-list">
                        <li>C++</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </div>
                    <div className="skil-list">
                        <li>SQL</li>
                        <li>OOPs</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </div>
                    <div className="skil-list">
                        <li>Angular</li>
                        <li>pgAdmin</li>
                        <li>Git</li>
                    </div>
                    <div className="skil-list">
                        <li style={{margin:'0'}}>Basic Express</li>
                        <li style={{margin:'0', marginRight:'-9%', marginLeft:'9%'}}>Basic Unix Command Line</li>
                    </div>
                </ul>
                <div className="inter-head">
                    NON TECHNICAL
                </div>
                <ul>
                    <div className="skil-list">
                        <li>Problem Solving</li>
                        <li>Communication</li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Cv;