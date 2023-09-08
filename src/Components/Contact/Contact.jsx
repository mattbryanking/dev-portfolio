import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    return (
        <div className="Contact">
            <h3 className="title">Contact</h3>
            <div className="contact-content">
                <h1>
                    Let&apos;s Get <br /> In Touch.
                </h1>
                <form className="form">
                    <div className="first-name">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="given-name"
                            autoComplete="family-name"
                        />
                    </div>
                    <div className="last-name">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="family-name"
                            autoComplete="family-name"
                        />
                    </div>
                    <div className="email">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="phone">
                        <input
                            type="tel"
                            placeholder="Phone (Optional)"
                            name="tel"
                            autoComplete="tel"
                        />
                    </div>
                    <div className="message">
                        <textarea
                            rows="3"
                            placeholder="Message"
                            name="message"
                        />
                    </div>

                    {/* <button className="submit">Submit</button> */}
                </form>
            </div>
        </div>
    );
}

export default Contact;
