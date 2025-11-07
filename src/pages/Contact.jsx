import { useRef, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const sendEmail = async (e) => {
    e.preventDefault();
  
    const res = await fetch("http://localhost:5050/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.current.name.value,
        email: form.current.email.value,
        message: form.current.message.value,
      }),
    });
  
    if (res.ok) {
      setStatus("success");
      form.current.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="contact-container">
      <h1 className="contact-title">Let’s Collaborate</h1>
      <p className="contact-text">
        Have a project in mind or need a voice for your next production?  
        Send me a message — I’d love to connect!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required className="contact-input" />
        <input type="email" name="email" placeholder="Your Email" required className="contact-input" />
        <textarea name="message" placeholder="Your Message" required className="contact-textarea" />
        <button type="submit" className="contact-button">Send Message</button>
      </form>

      {status === "success" && <div className="status success">✅ Message Sent Successfully!</div>}
      {status === "error" && <div className="status error">❌ Oops! Something went wrong.</div>}
    </section>
  );
}
