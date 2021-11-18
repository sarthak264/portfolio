import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h3 className="number-heading">04. What’s Next?</h3>
      <h1 className="title">Get In Touch</h1>
      <p className="message">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <button className="big-btn contact-btn">
        <a href="mailto:sarthaksharm372@gmail.com">Say Hello</a>
      </button>
    </section>
  );
};

export default Contact;
