import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Calendar, FileText, Download, Send, Maximize } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Abstract() {
  window.scrollTo(0, 0);

  const doAnimate = window.innerWidth > 1024;
  const variants = doAnimate ? fadeUp : {};

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
        <p className="page-title-p">Abstract Submission</p>
        <p className="page-title-p">QUITEL / CHITEL 2023</p>
      </motion.h1>

      <div className="page-info">
        <motion.div
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-header">
            <Calendar size={18} />
            <h2 className="info-title">Important Dates</h2>
          </div>

          <div className="dates-grid">
            <div className="date-card primary">
              <div className="date-icon">
                <Calendar size={16} />
              </div>
              <div className="date-content">
                <span className="date-label">Abstract Submission Deadline</span>
                <span className="date-value">August 18th</span>
              </div>
            </div>

            <div className="date-card">
              <div className="date-icon secondary">
                <FileText size={16} />
              </div>
              <div className="date-content">
                <span className="date-label">Modifications Requested Before</span>
                <span className="date-value">September 1st</span>
              </div>
            </div>
          </div>

          <div className="poster-info">
            <Maximize size={15} />
            <span>
              Poster dimensions:{" "}
              <strong>120 cm length × 80 cm width</strong>
            </span>
          </div>

          <div className="abstract-actions">
            <a
              className="button-long-pink"
              href="https://docs.google.com/document/d/1DG2FIFkAObM5T6Ieq0-NB5TVfEwQ0PjqkFTK7xs90VY/edit"
              rel="noreferrer"
              target="_blank"
            >
              <Download size={15} style={{ marginRight: "6px" }} />
              Download Abstract Template
            </a>
            <NavLink className="button-long-blue" to="/abstract-submission-form">
              <Send size={15} style={{ marginRight: "6px" }} />
              Submit an Abstract
            </NavLink>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
