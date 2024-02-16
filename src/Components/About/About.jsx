import { forwardRef } from "react";
import "./About.css";

const About = forwardRef((props, ref) => {
    return (
        <div className="About" ref={ref}>
            <h3 className="title">About</h3>
            <div className="about-content">
                <p className="about-me">
                    My name is <span>Matthew King</span>. I&apos;m a full stack
                    developer who studied Computer Science and Psychology at
                    Grand Valley State University. I&apos;m passionate about
                    intersecting technology with psychology, resulting in
                    user-centric products that{" "}
                    <span>empower individuals through intuitive design</span>.
                </p>
                <div className="about-tech">
                    <div>
                        <h4 className="tech-title">Languages</h4>
                        <span>
                            <a className="underline-text">React</a>
                        </span>
                        <span>
                            <a className="underline-text">Python</a>
                        </span>
                        <span>
                            <a className="underline-text">Swift</a>
                        </span>
                        <span>
                            <a className="underline-text">C</a>
                        </span>
                    </div>
                    <div>
                        <h4 className="tech-title">Technologies</h4>
                        <span>
                            <a className="underline-text">Node</a>
                        </span>
                        <span>
                            <a className="underline-text">XCode</a>
                        </span>
                        <span>
                            <a className="underline-text">Git</a>
                        </span>
                        <span>
                            <a className="underline-text">Azure</a>
                        </span>
                    </div>
                </div>
                <div className="about-edu">
                    <div>
                        <h4 className="tech-title">Education</h4>
                        <h5>Grand Valley State University</h5>
                        <p>B.S. Computer Science</p>
                        <p>Minor in Psychology</p>
                        <p>Graduated Dec. 2023</p>
                    </div>
                    <div>
                        <h4 className="tech-title">Experience</h4>
                        <h5>Challenge Manufacturing</h5>
                        <p>Full Stack Developer</p>
                        <p>April. 2023 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

About.displayName = "About";

export default About;
