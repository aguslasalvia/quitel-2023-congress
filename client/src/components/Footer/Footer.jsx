import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <NavLink to="/">
              <img
                src="assets/images/stamp.png"
                alt="QUITEL 2023"
                className="footer-logo"
              />
            </NavLink>
            <div>
              <p className="footer-title">QUITEL / CHITEL</p>
              <p className="footer-subtitle">XLVI Congress · 2023</p>
            </div>
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

          <div className="footer-info">
            <p className="footer-info-title">XLVI International Congress of</p>
            <p className="footer-info-title">Theoretical Chemists of Latin Expression</p>
            <p className="footer-text" style={{ marginTop: "0.5rem" }}>
              26–30 November 2023
            </p>
            <p className="footer-text">Montevideo, Uruguay</p>
            <a href="mailto:quitel2023@gmail.com" className="footer-email">
              quitel2023@gmail.com
            </a>
          </div>

          <div className="social-section">
            <span className="social-label">Follow us</span>
            <div className="social-media">
              <a
                href="https://www.instagram.com/quitel_2023/"
                rel="noreferrer"
                target="_blank"
                className="sm-icon"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com/quitel_2023"
                rel="noreferrer"
                target="_blank"
                className="sm-icon"
                aria-label="Twitter"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2023 QUITEL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
