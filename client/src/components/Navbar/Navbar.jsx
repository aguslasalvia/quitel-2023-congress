import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <header className="navbar-header">
        <div className="header-visible">
          <img
            src="assets/images/stamp.png"
            alt="QUITEL 2023"
            className="stamp"
            onClick={navigateHome}
          />

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu size={24} />
          </button>

          <nav className="nav-desktop">
            <ul id="menu">
              {['Home', 'About', 'Registration', 'Speakers', 'Venue', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' :
                  `/${item.toLowerCase().replace(/ /g, '-')}`;
                return (
                  <li key={item}>
                    <NavLink
                      className="nav-link"
                      to={path}
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <div className={`nav-backdrop ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <nav className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <div className="nav-mobile-header">
          <button className="nav-close-btn" onClick={closeMenu} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>
        <ul id="menu-mobile">
          {['Home', 'About', 'Registration', 'Speakers', 'Venue', 'Contact'].map((item, index) => {
            const path = item === 'Home' ? '/' :
              `/${item.toLowerCase().replace(/ /g, '-')}`;
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                transition={{ delay: index * 0.06 }}
              >
                <NavLink
                  className="nav-link"
                  to={path}
                  onClick={closeMenu}
                >
                  {item}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </>
  )
}
