export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <img 
              src="assets/images/stamp.png" 
              alt="QUITEL 2023" 
              className="footer-logo" 
            />
            <div>
              <p className="footer-subtitle">QUITEL / CHITEL 2023</p>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-info">
            <p className="footer-text">
              <strong>XLVI International Congress of</strong>
            </p>
            <p className="footer-text">
              <strong>Theoretical Chemists of Latin Expression</strong>
            </p>
            <p className="footer-text" style={{ marginTop: '0.5rem' }}>
              26-30th November 2023
            </p>
            <p className="footer-text">
              Montevideo, Uruguay
            </p>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/quitel_2023" 
                rel="noreferrer" 
                target="_blank" 
                className="sm-icon"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2023 QUITEL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
