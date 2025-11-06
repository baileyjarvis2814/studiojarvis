import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Let’s Collaborate</h1>
      <p className="contact-text">
        Have a project in mind or need a voice for your next production?
        Send me a message — I’d love to connect!
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required className="contact-input" />
        <input type="email" placeholder="Your Email" required className="contact-input" />
        <textarea placeholder="Your Message" required className="contact-textarea" />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}
