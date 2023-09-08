import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Upper from "./Components/Upper/Upper";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Upper />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default App;
