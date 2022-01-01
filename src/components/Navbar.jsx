import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="demo">
        <div className="menu-icon">
          <input
            className="menu-icon__cheeckbox"
            type="checkbox"
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
      <div className={`${toggle ? "menu show" : "menu"} menu-container`}>
        <div className="container">
          <ul className="list">
            <li>
              <a href="/#about_me" className="item">
                <span>01.</span>About
              </a>
            </li>
            <li>
              <a href="#projects" className="item">
                <span>02.</span>Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="item">
                <span>03.</span>Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="item green">
                Resume
              </a>
            </li>
            <li>
              <button className="resume_btn">Resume</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
