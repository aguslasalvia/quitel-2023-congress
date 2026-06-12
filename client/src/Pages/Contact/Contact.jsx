import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    type: "Email",
    value: "quitel2023@gmail.com",
    href: "mailto:quitel2023@gmail.com",
  },
  {
    type: "Instagram",
    value: "@quitel_2023",
    href: "https://www.instagram.com/quitel_2023/",
  },
  {
    type: "Twitter / X",
    value: "@quitel_2023",
    href: "https://twitter.com/quitel_2023",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.45 },
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
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Contact</p>
        <h1 className="page-header-title">
          Get in <em>touch.</em>
        </h1>
        <p className="page-header-lead">
          We&apos;d love to hear from you. Reach out through any of the channels below
          and we&apos;ll respond as soon as possible.
        </p>
      </motion.header>

      <div className="page-body">
        <div className="contact-rows" style={{ paddingTop: "1rem" }}>
          {contacts.map((c, i) => (
            <motion.a
              key={c.type}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel={c.href.startsWith("mailto") ? undefined : "noreferrer"}
              className="contact-row"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="contact-row-label">{c.type}</span>
              <span className="contact-row-value">{c.value}</span>
              <ArrowUpRight size={18} className="contact-row-arrow" />
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
      </div>

      <Footer />
    </motion.div>
  );
}
