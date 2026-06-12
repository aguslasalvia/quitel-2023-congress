import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { Navigation, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Venue() {
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
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">QUITEL / CHITEL 2023</p>
        <h1 className="page-header-title">
          Venue &amp; <em>accommodation.</em>
        </h1>
        <p className="page-header-lead">
          In the heart of Montevideo, near the riverside of the Río de la Plata.
        </p>
      </motion.header>

      <div className="page-body">
        {/* Conference venue */}
        <motion.section
          className="editorial-section"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-label">
            <span className="section-num">01</span>
            <h2 className="section-title">The venue</h2>
          </div>
          <div className="section-content prose">
            <figure className="figure" style={{ marginBottom: "1.5rem" }}>
              <img
                src="assets/images/venue.jpg"
                alt="Edificio Polifuncional José Luis Massera"
              />
              <figcaption>
                Edificio Polifuncional &ldquo;José Luis Massera&rdquo; · Universidad de la República
              </figcaption>
            </figure>

            <p>
              The congress will be held at the emblematic multifunctional building{" "}
              <strong>José Luis Massera &ldquo;Faro&rdquo;</strong>, Universidad de la
              República — Senda Nelson Landoni 631, 11200 Montevideo, Uruguay.
            </p>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5502.116798662225!2d-56.169693107256265!3d-34.9170327549731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81a27b71199f%3A0x4ece30db435561f!2sEdificio%20Polifuncional%20%22Jose%20Luis%20Massera%22%2C%20Senda%20Ing.%20Nelson%20Landoni%20631%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1sen!2sus!4v1686526405383!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              />
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <a
                className="btn-editorial outline"
                href="https://www.google.com/maps/dir//Edificio+Polifuncional+Jos%C3%A9+Luis+Massera"
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={15} />
                Get Directions
              </a>
            </div>
          </div>
        </motion.section>

        {/* Hotel */}
        <motion.section
          className="editorial-section"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-label">
            <span className="section-num">02</span>
            <h2 className="section-title">Recommended hotel</h2>
          </div>
          <div className="section-content prose">
            <p>
              We suggest the{" "}
              <a
                href="https://all.accor.com/hotel/9712/index.es.shtml"
                target="_blank"
                rel="noreferrer"
              >
                Hotel Ibis Styles Montevideo <ArrowUpRight size={12} style={{ verticalAlign: "baseline" }} />
              </a>{" "}
              for attending the conference.
            </p>

            <div className="dates-list" style={{ maxWidth: "420px" }}>
              <div className="date-row">
                <span className="date-row-label">Single room</span>
                <span className="date-row-value">USD 68 / night</span>
              </div>
              <div className="date-row">
                <span className="date-row-label">Double room</span>
                <span className="date-row-value">USD 75 / night</span>
              </div>
              <div className="date-row">
                <span className="date-row-label">Breakfast</span>
                <span className="date-row-value">Included</span>
              </div>
            </div>

            <p>
              Make your reservation by contacting manager Marcelo Fernández at{" "}
              <a href="mailto:marcelo.fernandez@accor.com">marcelo.fernandez@accor.com</a>{" "}
              and mention you are a QUITEL attendee.
            </p>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13086.172833122882!2d-56.1567834!3d-34.9179112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8130b6c1568d%3A0x21eba0b3fa139548!2sHotel%20Ibis%20Styles%20Montevideo!5e0!3m2!1ses!2suy!4v1686961862688!5m2!1ses!2suy"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              />
            </div>

            <div style={{ marginTop: "1.25rem" }}>
              <a
                className="btn-editorial outline"
                href="https://www.google.com/maps/dir//Hotel+Ibis+Styles+Montevideo"
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={15} />
                Get Directions
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}
