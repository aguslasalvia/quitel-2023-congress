import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-signoff">
          See you in <em>Montevideo.</em>
        </p>

        <div className="footer-main">
          <div className="footer-info">
            <p className="footer-info-title">
              XLVI International Congress of Theoretical Chemists of Latin Expression
            </p>
            <p className="footer-text">26–30 November 2023 · Montevideo, Uruguay</p>
            <a href="mailto:quitel2023@gmail.com" className="footer-email">
              quitel2023@gmail.com
            </a>
          </div>

          <div className="footer-nav">
            <p className="footer-nav-label">Navigation</p>
            <ul className="footer-nav-list">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/registration">Registration</NavLink></li>
              <li><NavLink to="/speakers">Speakers</NavLink></li>
              <li><NavLink to="/venue">Venue</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-nav">
            <p className="footer-nav-label">Follow us</p>
            <ul className="footer-nav-list">
              <li>
                <a href="https://www.instagram.com/quitel_2023/" rel="noreferrer" target="_blank">
                  Instagram ↗
                </a>
              </li>
              <li>
                <a href="https://twitter.com/quitel_2023" rel="noreferrer" target="_blank">
                  Twitter ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <img src="assets/images/stamp.png" alt="QUITEL 2023" className="footer-logo" />
            <span className="footer-title">QUITEL / CHITEL · XLVI Congress</span>
          </div>
          <p className="footer-copyright">© 2023 QUITEL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
