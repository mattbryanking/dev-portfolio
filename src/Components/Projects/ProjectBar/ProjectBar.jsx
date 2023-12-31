import "./ProjectBar.css";

function ProjectBar({ date, title, link }) {
    return (
        <div className="ProjectBar">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="wrapper">
                    <div className="left-bar">
                        <h2 className="project-date">{date}</h2>
                        <h1 className="project-title">{title}</h1>
                    </div>
                    <p className="project-view">View Repo</p>
                </div>
            </a>
        </div>
    );
}

export default ProjectBar;
