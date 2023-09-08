import "./Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>King - {year}</p>
        </div>
    );
};

export default Footer;
