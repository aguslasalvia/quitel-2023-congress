import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const navItems = ["Home", "About", "Speakers", "Venue", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="navbar-header">
        <div className="header-visible">
          <NavLink to="/" className="wordmark" onClick={closeMenu}>
            <img src="assets/images/stamp.png" alt="QUITEL 2023" className="wordmark-logo" />
          </NavLink>

          <nav className="nav-desktop">
            <ul id="menu">
              {navItems.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <NavLink className="nav-link" to={path}>
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <NavLink to="/registration" className="nav-cta">
              Register <ArrowUpRight size={14} />
            </NavLink>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <nav className={`nav-mobile ${isOpen ? "open" : ""}`}>
        <ul id="menu-mobile">
          {[...navItems, "Registration"].map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <motion.li
                key={item}
                initial={false}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 16 }}
                transition={{ delay: isOpen ? 0.08 + index * 0.05 : 0, duration: 0.35, ease: "easeOut" }}
              >
                <NavLink className="nav-link-mobile" to={path} onClick={closeMenu}>
                  <span className="nav-link-num">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
        <div className="nav-mobile-foot">
          <span>XLVI Congress · 26–30 Nov 2023</span>
          <span>Montevideo, Uruguay</span>
        </div>
      </nav>
    </>
  );
}
