import Blob from "./Blob/Blob";
import "./Upper.css";

function Upper() {
    return (
        <div className="Upper">
            <div className="title">
                <Blob />
                <div className="container">
                    <div className="box">
                        <p style={{ "--i": -6 }}>M</p>
                        <p style={{ "--i": -5 }}>A</p>
                        <p style={{ "--i": -4 }}>T</p>
                        <p style={{ "--i": -3 }}>T</p>
                        <p style={{ "--i": -2 }}>H</p>
                        <p style={{ "--i": -1 }}>E</p>
                        <p style={{ "--i": 0 }}>W</p>
                        <p style={{ "--i": 1 }}> </p>
                        <p style={{ "--i": 2 }}>K</p>
                        <p style={{ "--i": 3 }}>I</p>
                        <p style={{ "--i": 4 }}>N</p>
                        <p style={{ "--i": 5 }}>G</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upper;
