import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Calendar, FileText, Download, Send, Maximize, UserPlus, ClipboardCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45 },
  }),
};

export default function Registration() {
  window.scrollTo(0, 0);

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
        transition={{ duration: 0.45 }}
      >
        <p className="page-title-p">QUITEL / CHITEL 2023</p>
        <p className="page-title-p">Registration</p>
      </motion.h1>

      <div className="page-info">
        {/* Option cards */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="reg-options-grid">
            <div className="reg-option-card blue">
              <div className="reg-option-icon blue">
                <UserPlus size={28} />
              </div>
              <h2 className="reg-option-title">Pre-registration</h2>
              <p className="reg-option-text">
                Submit the pre-registration form to receive information about the congress
                and confirm your interest in attending.
              </p>
              <NavLink className="button-long-blue" to="/preregistration-form">
                <UserPlus size={15} style={{ marginRight: "5px" }} />
                Pre-register now
              </NavLink>
            </div>

            <div className="reg-option-card pink">
              <div className="reg-option-icon pink">
                <ClipboardCheck size={28} />
              </div>
              <h2 className="reg-option-title">Registration</h2>
              <p className="reg-option-text">
                Ready to attend? Submit the full registration form and complete your
                payment to secure your spot at the congress.
              </p>
              <NavLink className="button-long-pink" to="/registration-info">
                <ClipboardCheck size={15} style={{ marginRight: "5px" }} />
                Register now
              </NavLink>
            </div>
          </div>
        </motion.div>

        {/* Abstract submission */}
        <motion.div
          className="info-box"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            <span>
              Poster dimensions: <strong>120 cm length × 80 cm width</strong>
            </span>
          </div>

          <div className="abstract-actions">
            <a
              className="button-long-blue"
              href="https://docs.google.com/document/d/1DG2FIFkAObM5T6Ieq0-NB5TVfEwQ0PjqkFTK7xs90VY/edit"
              rel="noreferrer"
              target="_blank"
            >
              <Download size={16} style={{ marginRight: "6px" }} />
              Download Abstract Template
            </a>
            <NavLink className="button-long-pink" to="/abstract-submission-form">
              <Send size={16} style={{ marginRight: "6px" }} />
              Submit an Abstract
            </NavLink>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
