import { forwardRef } from "react";
import "./About.css";

const About = forwardRef((props, ref) => {
    return (
        <div className="About" ref={ref}>
            <h3 className="title">About</h3>
            <div className="about-content">
                <p className="about-me">
                    My name is <span>Matthew King</span>. I&apos;m a developer,
                    psychologist, and student, currently studying at{" "}
                    <span>Grand Valley State University</span>. I&apos;m
                    passionate about intersecting technology with psychology,
                    resulting in user-centric products that{" "}
                    <span> empower individuals through intuitive design</span>.
                </p>
                <div className="about-tech">
                    <div>
                        <h4 className="tech-title">Languages</h4>
                        <p>React</p>
                        <p>React Native</p>
                        <p>Python</p>
                        <p>SQL</p>
                    </div>
                    <div>
                        <h4 className="tech-title">Technologies</h4>
                        <p>Node.js</p>
                        <p>Vite</p>
                        <p>Github</p>
                        <p>WordPress</p>
                    </div>
                </div>
                <div className="about-edu">
                    <div>
                        <h4 className="tech-title">Education</h4>
                        <h5>Grand Valley State University</h5>
                        <p>B.S. Computer Science</p>
                        <p>Minor in Psychology</p>
                        <p>Expected Dec. 2023</p>
                    </div>
                    <div>
                        <h4 className="tech-title">Experience</h4>
                        <h5>Challenge Manufacturing</h5>
                        <p>Application Developer Intern</p>
                        <p>Jun. 2023 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

About.displayName = "About";

export default About;
