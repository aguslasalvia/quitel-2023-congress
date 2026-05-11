import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, ArrowRight } from "lucide-react";

const InstagramIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const contacts = [
  {
    type: "Email",
    value: "quitel2023@gmail.com",
    href: "mailto:quitel2023@gmail.com",
    icon: <Mail size={26} />,
    colorClass: "primary",
  },
  {
    type: "Instagram",
    value: "@quitel_2023",
    href: "https://www.instagram.com/quitel_2023/",
    icon: <InstagramIcon />,
    colorClass: "instagram",
  },
  {
    type: "Twitter / X",
    value: "@quitel_2023",
    href: "https://twitter.com/quitel_2023",
    icon: <TwitterIcon />,
    colorClass: "twitter",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45 },
  }),
};

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
            <p>
              We&apos;d love to hear from you. Reach out through any of the channels
              below and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="contact-cards-grid">
            {contacts.map((c, i) => (
              <motion.a
                key={c.type}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="contact-card-large"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <div className={`contact-card-icon-wrapper ${c.colorClass}`}>
                  {c.icon}
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-type">{c.type}</span>
                  <span className="contact-card-value-large">{c.value}</span>
                </div>
                <ArrowRight size={18} className="contact-card-arrow" />
              </motion.a>
            ))}
          </div>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <MapPin size={16} />
              <span>Montevideo, Uruguay</span>
            </div>
            <div className="contact-meta-item">
              <Calendar size={16} />
              <span>November 26–30, 2023</span>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
