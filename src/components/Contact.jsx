import '../styles/contact.css';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h1 className='title'>
        <span className='number'>04.</span>{' '}
        <span className='main'>Get In Touch</span>
      </h1>
      <p className='message'>
        I'm open to new opportunities right now! Feel free to reach out if you
        have any questions or interesting ideas.
      </p>
      <a href='mailto:sarthaksharm372@gmail.com'>
        <button className='big-btn contact-btn'>Say Hello</button>
      </a>
    </section>
  );
};

export default Contact;
