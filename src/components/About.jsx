import '../styles/about.css';

const About = () => {
  return (
    <section className='about-me' id='about_me'>
      <h1 className='title'>
        <span className='number'>01.</span>
        <span className='main'> About Me</span>
      </h1>
      <p>
        Hello! My name is Sarthak and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS!
      </p>
      <p>
        Fast-forward to today, and I’ve had the privilege of working at an
        advertising agency, a start-up, a huge corporation, and a student-led
        design studio. My main focus these days is building accessible,
        inclusive products and digital experiences at Upstatement for a variety
        of clients.
      </p>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <div className='tech-stack'>
        <img
          src='assets/images/html.png'
          alt='html logo'
          className='language-icon'
        />
        <img
          src='assets/images/css.png'
          alt='css logo'
          className='language-icon'
        />
        <img
          src='assets/images/sass.png'
          alt='sass logo'
          className='language-icon'
        />
        <img
          src='assets/images/bootstrap.svg'
          alt='bootstrap logo'
          className='language-icon'
        />
        <img
          src='assets/images/js.png'
          alt='js logo'
          className='language-icon'
        />
        <img
          src='assets/images/react.png'
          alt='react logo'
          className='language-icon'
        />
      </div>
    </section>
  );
};

export default About;
