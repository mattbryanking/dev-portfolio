import "./ProjectBar.css";

function ProjectBar({ date, title }) {
    return (
        <div className="ProjectBar">
            <div className="wrapper">
                <div className="left-bar">
                    <h2 className="project-date">{date}</h2>
                    <h1 className="project-title">{title}</h1>
                </div>
                <p className="project-view">View</p>
            </div>
        </div>
    );
}

export default ProjectBar;
