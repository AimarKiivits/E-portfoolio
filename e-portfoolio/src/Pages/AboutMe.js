import React from "react";

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-me-header">
                <h1>About Me</h1>
            </div>
            <div className="about-me-content">
                    <img src="/me.png" alt="Aimar Kiivits" />
                    <p>
                        I am Aimar Kiivits, a 19 year old from Tartu, Estonia. I am currently studying software development at VOCO, aka Tartu Vocational College.
                        I have always had an interest in computers, and after trying out programming during a school event, I realized that I wanted to learn more.
                        I enjoy board games, video games, and challenging my brain with puzzles.
                        To stay physically active, I train in Olympic weightlifting four times a week.
                        <br />
                        <br />
                        <a href="/Curriculum vitae.pdf" target="_blank" rel="noopener noreferrer">My CV</a>
                    </p>
            </div>
        </div>
    );
}

export default AboutMe;