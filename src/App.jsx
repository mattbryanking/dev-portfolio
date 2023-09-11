import { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Upper from "./Components/Upper/Upper";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
    const [dark, setDark] = useState(true);
    const [expanded, setExpanded] = useState(false);

    const upperRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const refs = {
        upperRef,
        projectsRef,
        aboutRef,
        contactRef,
    };

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const toggleTheme = () => {
        setExpanded(true);
        console.log("toggleTheme");
    };

    useEffect(() => {
        if (expanded) {
            setTimeout(() => {
                setExpanded(false);
                setDark(!dark);
            }, 1000);
        }
    }, [expanded]);

    useEffect(() => {
        const handleClipScroll = () => {
            document.documentElement.style.setProperty(
                "--scroll-y",
                `${window.scrollY}px`
            );
        };

        window.addEventListener("scroll", handleClipScroll);

        return () => {
            window.removeEventListener("scroll", handleClipScroll);
        };
    }, []);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
        setDark(darkModeMediaQuery.matches);

        const handlePref = (event) => {
            setDark(event.matches);
        };

        darkModeMediaQuery.addEventListener("change", handlePref);

        return () => {
            darkModeMediaQuery.removeEventListener("change", handlePref);
        };
    }, []);

    return (
        <>
            <div
                className={`App Light ${dark ? "clip" : ""} ${
                    expanded ? "expanded" : ""
                }`}
            >
                <div className="theme-toggle-wrapper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        onClick={!dark ? toggleTheme : () => {}}
                    >
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                </div>
                <Navbar scroll={scrollTo} refs={refs} />
                <Upper ref={upperRef} />
                <Projects ref={projectsRef} />
                <About ref={aboutRef} />
                <Contact ref={contactRef} />
                <Footer />
            </div>
            <div
                className={`App Dark ${!dark ? "clip" : ""} ${
                    expanded ? "expanded" : ""
                }`}
            >
                <div className="theme-toggle-wrapper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        onClick={dark ? toggleTheme : () => {}}
                    >
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                </div>
                <Navbar scroll={scrollTo} refs={refs} />
                <Upper ref={upperRef} darkMode={true} />
                <Projects ref={projectsRef} />
                <About ref={aboutRef} />
                <Contact ref={contactRef} />
                <Footer />
            </div>
        </>
    );
};

export default App;
