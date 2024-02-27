import '../styles/about.css';

const About = () => {
  return (
    <section className='about-me' id='about_me'>
      <h1 className='title'>
        <span className='number'>01.</span>
        <span className='main'> About Me</span>
      </h1>
      <p>
        I'm a passionate front-end developer driven by the desire to craft
        exceptional digital experiences that are both engaging and accessible.
        My journey began with a deep fascination for transforming design
        concepts into functional and user-centric realities. This passion led me
        to hone my expertise in HTML, CSS, Javascript and React.js, allowing me
        to translate ideas into dynamic and interactive user interfaces.
      </p>
      <p>
        Throughout my academic journey and professional experiences at Growth99
        and Rapca Infotech Pvt. Ltd., I've consistently pursued opportunities to
        combine my technical skills with my design sensibilities.
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
          src='assets/images/js.png'
          alt='js logo'
          className='language-icon'
        />
        <img
          src='assets/images/react.png'
          alt='react logo'
          className='language-icon'
        />
        <img
          src='assets/images/mui.png'
          alt='mui logo'
          className='language-icon'
        />
        <img
          src='assets/images/bootstrap.svg'
          alt='bootstrap logo'
          className='language-icon'
        />
      </div>
    </section>
  );
};

export default About;
