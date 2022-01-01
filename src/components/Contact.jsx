import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="title">
        <span className="number">03.</span>{" "}
        <span className="main">Get In Touch</span>
      </h1>
      <p className="message">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a href="mailto:sarthaksharm372@gmail.com">
        <button className="big-btn contact-btn">Say Hello</button>
      </a>
    </section>
  );
};

export default Contact;
