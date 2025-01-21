import React from "react";

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <p>Here are some of the projects I've worked on:</p>
            <div className="projects-content">
                <div className="project">
                    <h2>Project 1</h2>
                    <p>This is a description of project 1.</p>
                </div>
                <div className="project">
                    <h2>Project 2</h2>
                    <p>This is a description of project 2.</p>
                </div>
                <div className="project">
                    <h2>Project 3</h2>
                    <p>This is a description of project 3.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;