import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Download, ArrowRight, ArrowUpRight } from "lucide-react";

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
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
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
      {/* ── Hero: magazine cover ── */}
      <div className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              XLVI International Congress · QUITEL / CHITEL
            </p>

            <h1 className="hero-title">
              Theoretical Chemists of <em>Latin Expression,</em> together again.
            </h1>

            <div className="hero-meta">
              <span className="hero-meta-item">26–30 November 2023</span>
              <span className="hero-meta-sep" aria-hidden="true" />
              <span className="hero-meta-item">Montevideo, Uruguay</span>
            </div>

            <div className="hero-actions">
              <NavLink to="/registration" className="btn-editorial">
                Register now <ArrowRight size={15} />
              </NavLink>
              <NavLink to="/about" className="btn-text">
                Read about the congress
              </NavLink>
            </div>
          </div>

          <figure className="figure hero-figure">
            <img src="assets/images/montevideo.png" alt="Montevideo seen from the Río de la Plata" />
            <figcaption>Montevideo · Río de la Plata</figcaption>
          </figure>
        </div>
      </div>

      {/* ── Congress info ── */}
      <section className="page-body" id="congress-info">
        <motion.div
          className="editorial-section"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-label">
            <span className="section-num">01</span>
            <h2 className="section-title">What we aim for</h2>
          </div>
          <div className="section-content prose">
            <p>
              Since its first edition in Modena, this prestigious congress aims to bring
              together scientists from all Latin American countries to share their interest
              in the field of theoretical chemistry and related sciences.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="editorial-section"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-label">
            <span className="section-num">02</span>
            <h2 className="section-title">This year&apos;s edition</h2>
          </div>
          <div className="section-content prose">
            <p>
              This is the first edition of our QUITEL congress after the pandemic and for
              that it is so important to us to recover the capacity to be together in our
              friendly QUITEL society.
            </p>
            <p>
              This year it will be developed in Uruguay. The 2024 edition will take place
              in Belgium and the following 2025 edition in Colombia.
            </p>
            <p>
              The programme will be designed to attract both academic and industrial
              interests. PhD students, postdocs and young researchers will have plenty of
              opportunities to learn and to meet colleagues.
            </p>
            <p>
              <strong>The Scientific Programme will include the following topics:</strong>
            </p>

            <ul className="numbered-list two-col">
              {topics.map((topic, index) => (
                <li key={index}>
                  <span className="li-num">{String(index + 1).padStart(2, "0")}</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "1.5rem" }}>
              <a
                className="btn-editorial outline"
                href="assets/files/schedule-quitel2023.pdf"
                download
              >
                <Download size={15} />
                Download Program
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="editorial-section"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-label">
            <span className="section-num">03</span>
            <h2 className="section-title">Where will it take place?</h2>
          </div>
          <div className="section-content prose">
            <p>
              QUITEL 2023 will take place at Universidad de la República, Montevideo
              Uruguay, in the emblematic multifunctional building{" "}
              <NavLink to="/venue">José Luis Massera &quot;Faro&quot;</NavLink>, ideally
              located in the heart of the city near the riverside of the Río de La Plata.
            </p>
            <p>Senda Nelson Landoni 631, 11200 Montevideo.</p>
            <p>
              For more information please contact us at{" "}
              <a href="mailto:quitel2023@gmail.com">quitel2023@gmail.com</a>
            </p>
            <div style={{ marginTop: "1.25rem" }}>
              <NavLink to="/venue" className="btn-text">
                Discover the venue <ArrowUpRight size={14} />
              </NavLink>
            </div>
          </div>
        </motion.div>

        {/* ── CTA band ── */}
        <motion.div
          className="cta-band"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="cta-band-title">
            Join us in <em>Montevideo</em> this November.
          </h2>
          <NavLink to="/registration" className="btn-editorial accent">
            Register now <ArrowRight size={15} />
          </NavLink>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
}
