import { useState } from 'react';
import '../styles/navbar.css';
import ScrollInto from 'react-scroll-into-view';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navItems = [
    { title: 'About', id: 'about_me' },
    { title: 'Projects', id: 'projects' },
    { title: 'Contact', id: 'contact' },
  ];

  const openPDF = () => {
    window.open(`${process.env.PUBLIC_URL}/assets/resume.pdf`, '_blank');
  };

  return (
    <nav className='navbar'>
      <div className='demo'>
        <div className='menu-icon'>
          <input
            className='menu-icon__cheeckbox'
            type='checkbox'
            checked={toggle}
            onChange={() => {
              setToggle(!toggle);
            }}
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`${toggle ? 'menu show' : 'menu'} menu-container`}>
        <div className='container'>
          <ul className='list'>
            {navItems.map((item, i) => (
              <ScrollInto
                selector={'#' + item.id}
                style={{ marginRight: '2rem', cursor: 'pointer' }}
                key={item.id}
                onClick={() => setToggle(false)}
              >
                <li>
                  <a className='item'>
                    <span>0{i + 1}.</span>
                    {item.title}
                  </a>
                </li>
              </ScrollInto>
            ))}
            <li
              onClick={() => {
                setToggle(!toggle);
                openPDF();
              }}
            >
              <a href='#contact' className='item green'>
                Resume
              </a>
            </li>
            <li>
              <button className='resume_btn' onClick={openPDF}>
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
