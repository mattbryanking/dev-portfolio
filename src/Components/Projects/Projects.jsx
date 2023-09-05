import ProjectBar from "./ProjectBar/ProjectBar.jsx";
import "./Projects.css";

function Projects() {
    return (
        <div className="Projects">
            <h3 className="title">Projects</h3>
            <div className="project-list">
                <ProjectBar date={"2023"} title={"Raycasting Arena"} />
                <ProjectBar date={"2023"} title={"React Wordle Clone"} />
                <ProjectBar date={"2022"} title={"BombParty Bot"} />
                <ProjectBar date={"2022"} title={"Swift Analysis"} />
            </div>
        </div>
    );
}

export default Projects;
