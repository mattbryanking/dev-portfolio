import { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Upper from "./Components/Upper/Upper";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
    const upperRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scroll = (ref) => {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = ref.current.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    return (
        <div className="App">
            <Navbar
                scroll={scroll}
                refs={{ upperRef, projectsRef, aboutRef, contactRef }}
            />
            <Upper ref={upperRef} />
            <Projects ref={projectsRef} />
            <About ref={aboutRef} />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    );
};

export default App;
