import ScrollInto from 'react-scroll-into-view';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='header' id='header'>
      <section className='main'>
        <p className='intro'>Hi, my name is</p>
        <h1 className='name'>Sarthak Sharma.</h1>
        <h1 className='subtitle'>I build things for the web.</h1>
        <p className='description'>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
        <ScrollInto selector='#projects'>
          <button className='cta-btn'>Check out my projects!</button>
        </ScrollInto>
      </section>
    </header>
  );
};

export default Header;
