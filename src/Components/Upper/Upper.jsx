import { forwardRef } from "react";
import Blob from "./Blob/Blob";
import "./Upper.css";

const Upper = forwardRef(({ darkMode }, ref) => {
    return (
        <div className="Upper" ref={ref}>
            <div className="title">
                <h2>Hello, I&apos;m</h2>
                <Blob darkMode={darkMode} />
                <h1>Matthew King</h1>
                <h2>
                    a full-stack developer based <br /> in Grand Rapids, MI
                </h2>
            </div>
        </div>
    );
});

Upper.displayName = "Upper";

export default Upper;
