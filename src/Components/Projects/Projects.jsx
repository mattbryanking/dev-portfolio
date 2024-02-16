import { forwardRef } from "react";
import ProjectBar from "./ProjectBar/ProjectBar.jsx";
import "./Projects.css";

const Projects = forwardRef((props, ref) => {
    return (
        <div className="Projects" ref={ref}>
            <h3 className="title">Projects</h3>
            <div className="project-list">
                <ProjectBar
                    date={"2023"}
                    title={"Native iOS Camera"}
                    link={"https://github.com/mattbryanking/iOSCameraClone"}
                />{" "}
                <ProjectBar
                    date={"2023"}
                    title={"Raycasting Arena"}
                    link={"https://github.com/mattbryanking/ARENA"}
                />
                <ProjectBar
                    date={"2022"}
                    title={"BombParty Bot"}
                    link={"https://github.com/mattbryanking/bomb-party-bot"}
                />
                <ProjectBar
                    date={"2022"}
                    title={"Multi-Lang Analysis"}
                    link={
                        "https://github.com/mattbryanking/Connect-4-Multi-Language"
                    }
                />
            </div>
        </div>
    );
});

Projects.displayName = "Projects";

export default Projects;
