import { useState, forwardRef } from "react";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
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

    const email = formData[2];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address");
      return;
    }
  };

  return (
    <div className="Contact" ref={ref}>
      <h3 className="title">Contact</h3>
      <div className="contact-content">
        <div className="left-contact-container">
          <h1>
            Let&apos;s Get <br /> In Touch.
          </h1>
          <div className="icon-container">
            <a
              href="/MKing_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
              </svg>
            </a>
            <a
              href="https://github.com/mattbryanking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/matthewbryanking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.6c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zM20.45 20.45h-3.5v-5.57c0-1.33-.03-3.05-1.85-3.05-1.85 0-2.13 1.44-2.13 2.94v5.68h-3.5V9h3.36v1.56h.05c.47-.89 1.6-1.83 3.29-1.83 3.53 0 4.18 2.32 4.18 5.34v6.38z" />
              </svg>
            </a>
          </div>
        </div>
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
});

Contact.displayName = "Contact";

export default Contact;
