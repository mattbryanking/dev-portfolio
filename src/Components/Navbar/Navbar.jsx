import "./Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="left">
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <p className="center">Matthew King</p>
            <div className="right">
                <a
                    href="https://github.com/mattbryanking"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
                <a>Resume</a>
                <a
                    href="mailto:matthewkingstudent@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
                </a>
            </div>
        </div>
    );
}

export default Navbar;
