import { useState, useEffect } from "react";
import "./Blob.css";

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

const Blob = ({ darkMode }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [filterProps, setFilterProps] = useState({
        blur2: 50,
        brightness2: 100,
        brightness3: 0,
    });

    useEffect(() => {
        const handleMouseMove = throttle((event) => {
            const x = (window.innerWidth / 2 - event.clientX) / 30;
            const y = (window.innerHeight / 2 - event.clientY) / 30;

            const distanceFromCenter = Math.sqrt(x * x + y * y);
            const maxDistanceFromCenter = Math.sqrt(
                Math.pow(window.innerWidth / 2 / 50, 2) +
                    Math.pow(window.innerHeight / 2 / 50, 2)
            );

            const blur2 =
                50 +
                20 *
                    (1 -
                        Math.max(
                            0,
                            distanceFromCenter / maxDistanceFromCenter - 0.4
                        ) /
                            0.6);
            const brightness2 =
                100 +
                15 *
                    (1 -
                        Math.max(
                            0,
                            distanceFromCenter / maxDistanceFromCenter - 0.4
                        ) /
                            0.6);

            const brightness3 =
                distanceFromCenter / maxDistanceFromCenter > 0.4
                    ? 100 *
                      (1 -
                          (distanceFromCenter / maxDistanceFromCenter - 0.4) /
                              0.6)
                    : 100;

            setFilterProps({ blur2, brightness2, brightness3 });
            setPosition({ x: -x, y: -y });
        }, 50);

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="Blob"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                id="blobSvg"
                style={{ opacity: 1 }}
                transform="rotate(0)"
            >
                <defs>
                    <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                    >
                        <stop offset="0%" style={{ stopColor: "#A4BFEF" }} />
                        <stop offset="100%" style={{ stopColor: "#6A93CB" }} />
                    </linearGradient>
                </defs>

                <path
                    id="blob"
                    fill="url(#gradient)"
                    d="M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z"
                >
                    <animate
                        attributeName="d"
                        dur="12s"
                        repeatCount="indefinite"
                        direction="alternate"
                        values="M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z"
                    />
                </path>
            </svg>
            {darkMode && (
                <>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 500"
                        id="blobSvg"
                        style={{
                            opacity: 1,
                            filter: `brightness(${filterProps.brightness2}%) blur(${filterProps.blur2}px)`,
                        }}
                        transform="rotate(0)"
                    >
                        <defs>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    style={{ stopColor: "#A4BFEF" }}
                                />
                                <stop
                                    offset="100%"
                                    style={{ stopColor: "#6A93CB" }}
                                />
                            </linearGradient>
                        </defs>

                        <path
                            id="blob"
                            fill="url(#gradient)"
                            d="M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z"
                        >
                            <animate
                                attributeName="d"
                                dur="12s"
                                repeatCount="indefinite"
                                direction="alternate"
                                values="M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M420.7122,331.4339Q380.09423,412.86779,301.16508,392.29219Q222.23594,371.7166,157.11322,349.24982Q91.99051,326.78305,53.64135,232.38203Q15.29219,137.98101,118.09898,129.47187Q220.90577,120.96273,294.67458,111.25967Q368.44339,101.55661,414.88678,175.77831Q461.33017,250,420.7122,331.4339Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z"
                            />
                        </path>
                    </svg>
                    
                </>
            )}
        </div>
    );
};

export default Blob;
