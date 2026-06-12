import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Download, Send, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
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
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">QUITEL / CHITEL 2023</p>
        <h1 className="page-header-title">
          Join the <em>congress.</em>
        </h1>
      </motion.header>

      <div className="page-body">
        {/* Option panels */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="reg-options-grid">
            <div className="reg-option-panel">
              <p className="eyebrow">Step one</p>
              <h2 className="reg-option-title">
                <em>Pre-</em>registration
              </h2>
              <p className="reg-option-text">
                Submit the pre-registration form to receive information about the congress
                and confirm your interest in attending.
              </p>
              <NavLink className="btn-editorial outline" to="/preregistration-form">
                Pre-register now <ArrowRight size={15} />
              </NavLink>
            </div>

            <div className="reg-option-panel">
              <p className="eyebrow">Step two</p>
              <h2 className="reg-option-title">
                Full <em>registration</em>
              </h2>
              <p className="reg-option-text">
                Ready to attend? Submit the full registration form and complete your
                payment to secure your spot at the congress.
              </p>
              <NavLink className="btn-editorial accent" to="/registration-info">
                Register now <ArrowRight size={15} />
              </NavLink>
            </div>
          </div>
        </motion.div>

        {/* Abstract submission */}
        <motion.section
          className="editorial-section"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-label">
            <span className="section-num">→</span>
            <h2 className="section-title">Abstract submission</h2>
          </div>
          <div className="section-content prose">
            <div className="dates-list" style={{ maxWidth: "480px" }}>
              <div className="date-row primary">
                <span className="date-row-label">Submission deadline</span>
                <span className="date-row-value">August 18th</span>
              </div>
              <div className="date-row">
                <span className="date-row-label">Modifications requested before</span>
                <span className="date-row-value">September 1st</span>
              </div>
            </div>

            <p className="poster-info">
              Poster dimensions: <strong>120 cm length × 80 cm width</strong>
            </p>

            <div className="abstract-actions">
              <a
                className="btn-editorial outline"
                href="https://docs.google.com/document/d/1DG2FIFkAObM5T6Ieq0-NB5TVfEwQ0PjqkFTK7xs90VY/edit"
                rel="noreferrer"
                target="_blank"
              >
                <Download size={15} />
                Download Abstract Template
              </a>
              <NavLink className="btn-editorial" to="/abstract-submission-form">
                <Send size={15} />
                Submit an Abstract
              </NavLink>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}
