import Blob from "./Blob/Blob";
import "./Upper.css";

function Upper() {
    return (
        <div className="Upper">
            <div className="title">
                <h2>Hello, I&apos;m</h2>
                <Blob />
                <h1>Matthew King</h1>
                <h2>
                    a developer based in <br /> Grand Rapids, MI
                </h2>
            </div>
        </div>
    );
}

export default Upper;
