import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Calendar, FileText, Download, Send, Maximize } from "lucide-react";

export default function Registration() {
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
        <p className="page-title-p">Registration</p>
        <p className="page-title-p">QUITEL / CHITEL 2023</p>
      </motion.h1>

      <div className="page-info">
        <motion.div 
          className="info-box registration-option"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="option-icon blue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <line x1="20" y1="8" x2="20" y2="14"/>
              <line x1="23" y1="11" x2="17" y2="11"/>
            </svg>
          </div>
          <h2 className="info-title">Pre-registration</h2>
          <div className="info-text">
            <p>
              In order to receive information about the congress you will need to submit the pre-registration form.
            </p>
          </div>
          <NavLink className="button-long-blue" to="/preregistration-form">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <line x1="20" y1="8" x2="20" y2="14"/>
              <line x1="23" y1="11" x2="17" y2="11"/>
            </svg>
            I want to pre-register
          </NavLink>
        </motion.div>

        <motion.div 
          className="info-box registration-option"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="option-icon pink">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 className="info-title">Registration</h2>
          <div className="info-text">
            <p>
              If you want to attend the congress, you will need to submit the registration form.
            </p>
          </div>
          <NavLink className="button-long-pink" to="/registration-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            I want to register
          </NavLink>
        </motion.div>

        <motion.div 
          className="info-box abstract-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="section-header">
            <FileText size={18} />
            <h2 className="info-title">Abstract Submission</h2>
          </div>
          
          <div className="dates-grid">
            <div className="date-card primary">
              <div className="date-icon">
                <Calendar size={18} />
              </div>
              <div className="date-content">
                <span className="date-label">Abstract Submission Deadline</span>
                <span className="date-value">August 18th</span>
              </div>
            </div>

            <div className="date-card">
              <div className="date-icon secondary">
                <FileText size={18} />
              </div>
              <div className="date-content">
                <span className="date-label">Modifications Requested Before</span>
                <span className="date-value">September 1st</span>
              </div>
            </div>
          </div>

          <div className="poster-info">
            <Maximize size={16} />
            <span>Poster dimensions: <strong>120 cm length × 80 cm width</strong></span>
          </div>

          <div className="abstract-actions">
            <a 
              className="button-long-blue" 
              href="https://docs.google.com/document/d/1DG2FIFkAObM5T6Ieq0-NB5TVfEwQ0PjqkFTK7xs90VY/edit" 
              rel="noreferrer" 
              target="_blank"
            >
              <Download size={18} style={{ marginRight: '8px' }} />
              Download Abstract Template
            </a>
            <NavLink className="button-long-pink" to="/abstract-submission-form">
              <Send size={18} style={{ marginRight: '8px' }} />
              Submit an Abstract
            </NavLink>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  )
}
