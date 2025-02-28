import React from "react";

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me-header">
                <h1>About Me</h1>
            </div>
            <div className="about-me-content">
                <img src="/me.jpeg" alt="Aimar Kiivits" />
                <div className="about-me-text">
                    <p>
                        I am Aimar Kiivits, a 19 year old from Tartu, Estonia. I am currently studying software development at VOCO, aka Tartu Vocational College.
                        I have always had an interest in computers, and after trying out programming during a school event, I realized that I wanted to learn more.
                        I enjoy board games, video games, and challenging my brain with puzzles.
                        To stay physically active, I train in Olympic weightlifting four times a week.
                    </p>
                    <a href="/Curriculum vitae.pdf" target="_blank" rel="noopener noreferrer">My CV</a>
                    <p>My skills:</p>
                    <div className="skills">
                        <div className="skill">
                            <img src="/html5.png" alt="HTML5" />
                        </div>
                        <div className="skill">
                            <img src="/css3.png" alt="CSS3" />
                        </div>
                        <div className="skill">
                            <img src="/javascript.png" alt="JavaScript" />
                        </div>
                        <div className="skill">
                            <img src="/react.png" alt="React" />
                        </div>
                        <div className="skill">
                            <img src="/python.png" alt="Python" />
                        </div>
                        <div className="skill">
                            <img src="/mysql.png" alt="MySQL" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;