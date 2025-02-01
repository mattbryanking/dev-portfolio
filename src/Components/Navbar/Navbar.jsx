import "./Navbar.css";

const Navbar = ({ scroll, refs }) => {
  return (
    <div className="Navbar">
      <div className="left">
        <p onClick={() => scroll(refs.projectsRef)}>Projects</p>
        <p onClick={() => scroll(refs.aboutRef)}>About</p>
        <p onClick={() => scroll(refs.contactRef)}>Contact</p>
      </div>
      <p onClick={() => scroll(refs.upperRef)} className="center">
        Matthew King
      </p>
      <div className="right">
        <a
          href="https://github.com/mattbryanking"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="/MKing_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/matthewbryanking/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Navbar;
