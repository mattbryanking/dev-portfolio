import ProjectBar from "./ProjectBar/ProjectBar.jsx";
import "./Projects.css";

function Projects() {
    return (
        <div className="Projects">
            <h3 className="title">Projects</h3>
            <div className="project-list">
                <ProjectBar
                    date={"2023"}
                    title={"Raycasting Arena"}
                    link={"https://github.com/mattbryanking/ARENA"}
                />
                <ProjectBar
                    date={"2023"}
                    title={"React Wordle Clone"}
                    link={"https://github.com/mattbryanking/wordle"}
                />
                <ProjectBar
                    date={"2022"}
                    title={"BombParty Bot"}
                    link={"https://github.com/mattbryanking/bomb-party-bot"}
                />
                <ProjectBar
                    date={"2022"}
                    title={"Swift Analysis"}
                    link={
                        "https://github.com/mattbryanking/Connect-4-Multi-Language"
                    }
                />
            </div>
        </div>
    );
}

export default Projects;
