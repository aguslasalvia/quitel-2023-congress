import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

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
  "Other related areas"
];

export default function Home() {
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
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero">
        <div className="hero-content">
          <img 
            src="assets/svg/quitel-letters.svg" 
            alt="QUITEL" 
            className="quitel-letters" 
          />

          <div className="year-badge">
            <span className="year">2023</span>
          </div>

          <h1 className="title">
            XLVI International Congress of Theoretical Chemists of Latin Expression
          </h1>

          <div className="date-badge">
            <span className="date">26-30th NOVEMBER 2023</span>
            <span className="date-location">Montevideo, Uruguay</span>
          </div>
        </div>

        <a href="#congress-info" className="scroll-indicator">
          <span>Discover more</span>
          <svg className="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>

      <section className="congress-info" id="congress-info">
        <motion.div 
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="info-title">What we aim for</h2>
          <div className="info-text">
            <p>
              Since its first edition in Modena, this prestigious congress aims to bring together scientists from all Latin American countries to share their interest in the field of theoretical chemistry and related sciences.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="info-title">This year&apos;s edition</h2>
          <div className="info-text">
            <p>
              This is the first edition of our QUITEL congress after pandemic and for that is so important to us to recover the capacity to be together in our friendly QUITEL society.
            </p>
            <br />
            <p>
              This year it will be developed in Uruguay, the 2024 edition will take place in Belgium and the following 2025 edition in Colombia.
            </p>
            <br />
            <p>
              The programme will be designed to attract both academic and industrial interests. PhD students, postdocs and young researchers will have plenty of opportunities to learn and to meet colleagues of their field of interest, as well as colleagues and works from other fields, given the interdisciplinary spectrum that make great this event.
            </p>
            <br />
            <p><strong>This year, the Scientific Programme will include the following topics:</strong></p>
          </div>
          
          <div className="topics-grid">
            {topics.map((topic, index) => (
              <div key={index} className="topic-item">
                <svg className="topic-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span>{topic}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a className="button-long-blue" href="assets/files/schedule-quitel2023.pdf" download>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Program
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="info-title">Where will it take place?</h2>
          <div className="info-text">
            <p>
              QUITEL 2023 will take place at Universidad de la República, Montevideo Uruguay, in a great and emblematic multifunctional building <NavLink to="/venue">José Luis Massera &quot;Faro&quot;</NavLink>, ideally located in the heart of the city near the nice riverside of Rio de La Plata river.
            </p>
            <br />
            <p>
              For more information please contact us at <a href="mailto:quitel2023@gmail.com">quitel2023@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  )
}
