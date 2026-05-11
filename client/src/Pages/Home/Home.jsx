import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Download, MapPin, ArrowRight } from "lucide-react";

const topics = [
  "Quantum Chemistry and Methodology",
  "Medicinal Chemistry",
  "New Materials and Supramolecular Chemistry",
  "Computational Physical Chemistry",
  "Machine Learning",
  "Cheminformatics",
  "Material Sciences",
  "Computational Biology",
  "Education in Science and Science Communication",
  "Other related areas",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  window.scrollTo(0, 0);

  const doAnimate = window.innerWidth > 1024;
  const variants = doAnimate ? fadeUp : {};

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-content">
          <img
            src="assets/svg/quitel-letters.svg"
            alt="QUITEL"
            className="quitel-letters"
          />

          <div className="year-badge">
            <span className="year">XLVI Edition · 2023</span>
          </div>

          <h1 className="title">
            International Congress of Theoretical Chemists of Latin Expression
          </h1>

          <div className="date-badge">
            <span className="date">26–30 November 2023</span>
            <span className="date-location">Montevideo, Uruguay</span>
          </div>

          <div className="hero-actions">
            <NavLink to="/registration" className="hero-btn primary">
              Register now <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/about" className="hero-btn secondary">
              Learn more
            </NavLink>
          </div>
        </div>

        <a href="#congress-info" className="scroll-indicator">
          <span>Discover more</span>
          <svg
            className="scroll-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* ── Congress info ── */}
      <section className="congress-info" id="congress-info">
        <motion.div
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="info-title">What we aim for</h2>
          <div className="info-text">
            <p>
              Since its first edition in Modena, this prestigious congress aims to bring
              together scientists from all Latin American countries to share their interest
              in the field of theoretical chemistry and related sciences.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="info-title">This year&apos;s edition</h2>
          <div className="info-text">
            <p>
              This is the first edition of our QUITEL congress after the pandemic and for
              that it is so important to us to recover the capacity to be together in our
              friendly QUITEL society.
            </p>
            <br />
            <p>
              This year it will be developed in Uruguay. The 2024 edition will take place
              in Belgium and the following 2025 edition in Colombia.
            </p>
            <br />
            <p>
              The programme will be designed to attract both academic and industrial
              interests. PhD students, postdocs and young researchers will have plenty of
              opportunities to learn and to meet colleagues.
            </p>
            <br />
            <p>
              <strong>The Scientific Programme will include the following topics:</strong>
            </p>
          </div>

          <div className="topics-grid">
            {topics.map((topic, index) => (
              <div key={index} className="topic-item">
                <svg
                  className="topic-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{topic}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <a
              className="button-long-blue"
              href="assets/files/schedule-quitel2023.pdf"
              download
            >
              <Download size={16} style={{ marginRight: "6px" }} />
              Download Program
            </a>
          </div>
        </motion.div>

        <motion.div
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="info-title">Where will it take place?</h2>
          <div className="info-text">
            <p>
              QUITEL 2023 will take place at Universidad de la República, Montevideo
              Uruguay, in the emblematic multifunctional building{" "}
              <NavLink to="/venue">José Luis Massera &quot;Faro&quot;</NavLink>, ideally
              located in the heart of the city near the riverside of the Río de La Plata.
            </p>
            <br />
            <p style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <MapPin size={14} style={{ flexShrink: 0, color: "var(--sweet-blue)" }} />
              <span>Senda Nelson Landoni 631, 11200 Montevideo</span>
            </p>
            <br />
            <p>
              For more information please contact us at{" "}
              <a href="mailto:quitel2023@gmail.com">quitel2023@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
}
