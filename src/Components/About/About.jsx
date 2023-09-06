import "./About.css";

function About() {
    return (
        <div className="About">
            <h3 className="title">About</h3>
            <div className="about-content">
                <p className="about-me">
                    My name is <span>Matthew King</span>. I&apos;m a developer,
                    psychologist, and student, currently studying at{" "}
                    <span>Grand Valley State University</span>. I&apos;m passionate
                    about intersecting technology and psychology, resulting in
                    user-centric products that <span>better the world</span>.
                </p>
                <div className="about-tech">
                    <div>
                        <h4 className="tech-title">Languages</h4>
                        <p>React</p>
                        <p>React Native</p>
                        <p>Python</p>
                        <p>Swift</p>
                        <p>C</p>
                    </div>
                    <div>
                        <h4 className="tech-title">Technologies</h4>
                        <p>Node.js</p>
                        <p>WordPress</p>
                        <p>Git</p>
                        <p>Adobe Creative Suite</p>
                    </div>
                </div>
                <div className="about-tech">
                    <div>
                        <h4 className="tech-title">Languages</h4>
                        <p>React</p>
                        <p>React Native</p>
                        <p>Python</p>
                        <p>Swift</p>
                        <p>C</p>
                    </div>
                    <div>
                        <h4 className="tech-title">Technologies</h4>
                        <p>Node.js</p>
                        <p>WordPress</p>
                        <p>Git</p>
                        <p>Adobe Creative Suite</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
