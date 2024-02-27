import ScrollInto from 'react-scroll-into-view';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='header' id='header'>
      <section className='main'>
        <p className='intro'>Hi, my name is</p>
        <h1 className='name'>Sarthak Sharma.</h1>
        <h1 className='subtitle'>I am a Front-end Developer.</h1>
        <p className='description'>
          I am a results-driven front-end developer passionate about crafting
          exceptional user interfaces. With expertise in HTML, CSS and React.js,
          I create engaging web experiences.
        </p>
        <ScrollInto selector='#projects'>
          <button className='cta-btn'>Check out my projects!</button>
        </ScrollInto>
      </section>
    </header>
  );
};

export default Header;
