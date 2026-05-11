import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { MapPin, Navigation, Building, Coffee, ExternalLink, Bed, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
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
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="page-title-p">Venue &amp; Accommodation</p>
        <p className="page-title-p">QUITEL / CHITEL 2023</p>
      </motion.h1>

      <div className="page-info">
        {/* Conference venue */}
        <motion.div
          className="info-box venue-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="venue-image-container">
            <img
              src="assets/images/venue.jpg"
              className="venue-image"
              alt="Edificio Polifuncional José Luis Massera"
            />
          </div>

          <h2 className="info-title">
            Edificio Polifuncional &ldquo;José Luis Massera&rdquo;
          </h2>

          <div className="info-text">
            <p>
              <MapPin
                size={14}
                style={{ marginRight: "4px", verticalAlign: "middle", color: "var(--sweet-blue)" }}
              />
              Senda Nelson Landoni 631, 11200 Montevideo, Uruguay
            </p>
          </div>

          <div className="venue-highlights">
            <div className="venue-highlight">
              <MapPin size={12} />
              <span>Heart of Montevideo</span>
            </div>
            <div className="venue-highlight">
              <Navigation size={12} />
              <span>Near Río de la Plata</span>
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="info-title">Venue on Map</h2>
          <div className="map-container">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5502.116798662225!2d-56.169693107256265!3d-34.9170327549731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81a27b71199f%3A0x4ece30db435561f!2sEdificio%20Polifuncional%20%22Jose%20Luis%20Massera%22%2C%20Senda%20Ing.%20Nelson%20Landoni%20631%2C%2011200%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1sen!2sus!4v1686526405383!5m2!1sen!2sus"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            />
          </div>
          <a
            className="button-long-blue"
            href="https://www.google.com/maps/dir//Edificio+Polifuncional+Jos%C3%A9+Luis+Massera"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: "1rem" }}
          >
            <Navigation size={15} style={{ marginRight: "6px" }} />
            Get Directions
          </a>
        </motion.div>

        {/* Hotel */}
        <motion.div
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="section-header">
            <Building size={18} />
            <h2 className="info-title">Recommended Hotel</h2>
          </div>

          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--black)",
              marginBottom: "0.75rem",
            }}
          >
            Ibis Styles Montevideo
          </h3>

          <div className="rates-grid">
            <div className="rate-card">
              <div className="rate-icon">
                <Bed size={18} />
              </div>
              <div className="rate-info">
                <span className="rate-type">Single room</span>
                <span className="rate-price">USD 68</span>
              </div>
            </div>

            <div className="rate-card">
              <div className="rate-icon double">
                <Users size={18} />
              </div>
              <div className="rate-info">
                <span className="rate-type">Double room</span>
                <span className="rate-price">USD 75</span>
              </div>
            </div>
          </div>

          <div className="rate-note">
            <Coffee size={14} />
            <span>Rates include breakfast</span>
          </div>

          <div className="info-text" style={{ marginTop: "1rem" }}>
            <p>
              We suggest the{" "}
              <a
                href="https://all.accor.com/hotel/9712/index.es.shtml"
                target="_blank"
                rel="noreferrer"
              >
                Hotel Ibis Styles Montevideo <ExternalLink size={12} />
              </a>{" "}
              for attending the conference.
            </p>
            <br />
            <p>
              Make your reservation by contacting manager Marcelo Fernández at{" "}
              <a href="mailto:marcelo.fernandez@accor.com">
                marcelo.fernandez@accor.com
              </a>{" "}
              and mention you are a QUITEL attendee.
            </p>
          </div>
        </motion.div>

        {/* Hotel map */}
        <motion.div
          className="info-box"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="info-title">Hotel Location on Map</h2>
          <div className="map-container">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13086.172833122882!2d-56.1567834!3d-34.9179112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8130b6c1568d%3A0x21eba0b3fa139548!2sHotel%20Ibis%20Styles%20Montevideo!5e0!3m2!1ses!2suy!4v1686961862688!5m2!1ses!2suy"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
            />
          </div>
          <a
            className="button-long-pink"
            href="https://www.google.com/maps/dir//Hotel+Ibis+Styles+Montevideo"
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: "1rem" }}
          >
            <Navigation size={15} style={{ marginRight: "6px" }} />
            Get Directions
          </a>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
