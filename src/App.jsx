import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        if (expanded) {
            setTimeout(() => {
                setExpanded(false);
                setDark(!dark);
            }, 1000);
        }
    }, [expanded]);

    useEffect(() => {
        const handleScroll = () => {
            document.documentElement.style.setProperty(
                "--scroll-y",
                `${window.scrollY}px`
            );
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleTheme = () => {
        setExpanded(true);
    };

    return (
        <>
            <div
                className={`App Light ${dark ? "clip" : ""} ${
                    expanded ? "expanded" : ""
                }`}
                onClick={dark ? toggleTheme : () => {}}
            >
                <Navbar />
                <Upper />
                <Projects />
                <About />
                <Contact />
                <Footer />
            </div>
            <div
                className={`App Dark ${!dark ? "clip" : ""} ${
                    expanded ? "expanded" : ""
                }`}
                onClick={!dark ? toggleTheme : () => {}}
            >
                <Navbar />
                <Upper />
                <Projects />
                <About />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
