import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [status, setStatus] = useState("this doesn't do anything... yet :)");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const { firstName, lastName, email, message } = formData;

        if (!firstName || !lastName || !email || !message) {
            setStatus("Please fill out all required fields");
            return;
        }

        setStatus("Your message has been sent");
    };

    // the standard invalid popups should probably exist on mobile
    const handleInvalid = (e) => {
        e.preventDefault();
        console.log(formData);

        const email = formData[2];
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            setStatus("Please enter a valid email address");
            return;
        }
    };

    return (
        <div className="Contact">
            <h3 className="title">Contact</h3>
            <div className="contact-content">
                <h1>
                    Let&apos;s Get <br /> In Touch.
                </h1>
                <form
                    className="form"
                    onSubmit={handleSubmit}
                    onInvalid={handleInvalid}
                >
                    <div className="first-name">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            autoComplete="given-name"
                        />
                    </div>
                    <div className="last-name">
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            autoComplete="family-name"
                        />
                    </div>
                    <div className="email">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                        />
                    </div>
                    <div className="phone">
                        <input
                            type="tel"
                            placeholder="Phone (Optional)"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                        />
                    </div>
                    <div className="message">
                        <textarea
                            rows="3"
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-bottom-row">
                        <button className="submit" type="submit">
                            Submit
                        </button>
                        <p className="form-status">{status}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
