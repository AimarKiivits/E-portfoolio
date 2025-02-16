import React, {useState} from "react";

const Projects = () => {
    const [biscuit, setBiscuit] = useState(false);

    return (
        <div className="projects">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <p>Here are some of the projects I've worked on:</p>
            <div className="projects-content">
                <div className="project-card" onClick={() => setBiscuit(true)}>
                    <h2 className="">Biscuit Tapper</h2>
                    <img src="/biscuit.png" alt="Biscuit" />
                </div>
                {biscuit && (
                    <div className={`modal-overlay ${biscuit ? "show" : ""}`}>
                        <div className="modal-content">
                            <h2>Biscuit Tapper</h2>
                            <p>Biscuit Tapper is a copy of cookie clicker. I made it because I wanted to see how hard it would be to make the basic parts of a clicker game (upgrades, gaining clicks over time, etc).</p>
                            <p>It was made using React, Express, MySQL and Node.js.</p>
                            <button 
                            className="close-button"
                            onClick={() => setBiscuit(false)}
                            >
                            Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;