import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Contact() {
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
        transition={{ duration: 0.4 }}
      >
        <p className="page-title-p">Contact</p>
        <p className="page-title-p">Get in touch</p>
      </motion.h1>

      <div className="page-info">
        <motion.div 
          className="info-box contact-page-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="contact-hero">
            <h2>Have questions?</h2>
            <p>We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
          </div>

          <div className="contact-cards-grid">
            <a href="mailto:quitel2023@gmail.com" className="contact-card-large">
              <div className="contact-card-icon-wrapper primary">
                <Mail size={28} />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-type">Email</span>
                <span className="contact-card-value-large">quitel2023@gmail.com</span>
              </div>
              <ArrowRight size={20} className="contact-card-arrow" />
            </a>

            <a href="https://www.instagram.com/quitel_2023/" target="_blank" rel="noreferrer" className="contact-card-large">
              <div className="contact-card-icon-wrapper instagram">
                <InstagramIcon />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-type">Instagram</span>
                <span className="contact-card-value-large">@quitel_2023</span>
              </div>
              <ArrowRight size={20} className="contact-card-arrow" />
            </a>

            <a href="https://twitter.com/quitel_2023" target="_blank" rel="noreferrer" className="contact-card-large">
              <div className="contact-card-icon-wrapper twitter">
                <TwitterIcon />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-type">Twitter / X</span>
                <span className="contact-card-value-large">@quitel_2023</span>
              </div>
              <ArrowRight size={20} className="contact-card-arrow" />
            </a>
          </div>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <MapPin size={18} />
              <span>Montevideo, Uruguay</span>
            </div>
            <div className="contact-meta-item">
              <Calendar size={18} />
              <span>November 26-30, 2023</span>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  )
}
