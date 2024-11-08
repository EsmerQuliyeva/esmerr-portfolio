import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_opkfeds",
        "template_y4id8yo",
        e.target,
        "8-FibKJW0XagsC3FV"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact_details">
          <div className="contact_detail">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>esmerquliyeva8@gmail.com</h5>
            <a
              href="mailto:esmerquliyeva8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="contact_detail">
            <TbBrandMessenger className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Esmer Quliyeva</h5>
            <a
              href="https://m.me/esmer.quliyeva.1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </div>
          <div className="contact_detail">
            <FaWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <h5>0503658844</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+994553658844"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </div>
        </div>
        <div className="contact_informs">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="textarea"
              name="message"
              rows="7"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
