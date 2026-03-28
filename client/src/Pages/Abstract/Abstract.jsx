import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

export default function Abstract() {
  window.scrollTo(0, 0);

  let variants = {};
  if (window.innerWidth > 1024) {
    variants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }
  }

  return (
    <motion.div 
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="page-title-p">Abstract Submission</p>
        <p className="page-title-p">QUITEL / CHITEL 2023</p>
      </motion.h1>

      <div className="page-info">
        <motion.div 
          className="info-box abstract-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="info-title">Important Dates</h2>
          
          <div className="dates-grid">
            <div className="date-card primary">
              <div className="date-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <div className="date-content">
                <span className="date-label">Abstract Submission Deadline</span>
                <span className="date-value">August 18th</span>
              </div>
            </div>

            <div className="date-card">
              <div className="date-icon secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </div>
              <div className="date-content">
                <span className="date-label">Modifications Requested Before</span>
                <span className="date-value">September 1st</span>
              </div>
            </div>
          </div>

          <div className="poster-info">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>Poster dimensions: <strong>120 cm length × 80 cm width</strong></span>
          </div>

          <div className="abstract-actions">
            <a 
              className="button-long-pink" 
              href="https://docs.google.com/document/d/1DG2FIFkAObM5T6Ieq0-NB5TVfEwQ0PjqkFTK7xs90VY/edit" 
              rel="noreferrer" 
              target="_blank"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Abstract Template
            </a>
            <NavLink className="button-long-blue" to="/abstract-submission-form">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
              Submit an Abstract
            </NavLink>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  )
}
