import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import { CreditCard, ExternalLink } from "lucide-react";

const earlyRows = [
  { label: "Postdocs / Researchers / Professors", price: "USD 405" },
  { label: "Master / PhD Students", price: "USD 270" },
  { label: "Undergraduate Student", price: "USD 225" },
];

const earlyExtras = [
  { label: "Accompanying", price: "USD 180" },
  { label: "Closing dinner", price: "USD 40" },
];

const lateRows = [
  { label: "Postdocs / Researchers / Professors", price: "USD 450" },
  { label: "Master / PhD Students", price: "USD 300" },
  { label: "Undergraduate Student", price: "USD 250" },
];

const lateExtras = [
  { label: "Accompanying", price: "USD 200" },
  { label: "Closing dinner", price: "USD 40" },
];

const steps = [
  {
    text: 'Click the "Send" / "Enviar" button on the PayPal page.',
    image: "/assets/images/paypal/1.png",
    alt: "Step 1 – PayPal send button",
  },
  {
    text: "You will be prompted to sign in or create a PayPal account.",
    image: "/assets/images/paypal/2.png",
    alt: "Step 2 – Sign in or create account",
  },
  {
    text: "Once logged in, fill in the amount to be paid and, if possible, specify which fees are being paid.",
    image: "/assets/images/paypal/3.png",
    alt: "Step 3 – Fill in the amount",
  },
  {
    text: "Fill in the remaining information PayPal will ask for and select your card to proceed.",
    image: "/assets/images/paypal/4.png",
    alt: "Step 4 – Select card and complete payment",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

export default function Payment() {
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
        transition={{ duration: 0.45 }}
      >
        <p className="page-title-p">Payment</p>
        <p className="page-title-p">PayPal Payment</p>
      </motion.h1>

      <div className="page-info">
        {/* Intro */}
        <motion.div
          className="info-box"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-header">
            <CreditCard size={18} />
            <h2 className="info-title">Registration fee payment</h2>
          </div>
          <div className="info-text">
            <p>
              Payments can be made with <strong>PayPal</strong> using a credit or debit
              card. The fees are the same as specified on the previous page.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Please kindly specify in the PayPal note which fees are being paid. We
              thank you in advance.
            </p>
          </div>
        </motion.div>

        {/* Pricing table */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="pricing-section">
            <div className="pricing-card">
              <div className="pricing-header">
                <p className="pricing-eyebrow">Early registration</p>
                <p className="pricing-period">Until August 18th</p>
              </div>
              <div className="pricing-body">
                <p className="pricing-section-label">By level</p>
                {earlyRows.map((row) => (
                  <div key={row.label} className="pricing-row">
                    <span className="pricing-row-label">{row.label}</span>
                    <span className="pricing-price">{row.price}</span>
                  </div>
                ))}
                <p className="pricing-section-label">Additional</p>
                {earlyExtras.map((row) => (
                  <div key={row.label} className="pricing-row">
                    <span className="pricing-row-label">{row.label}</span>
                    <span className="pricing-price">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-header late">
                <p className="pricing-eyebrow">Standard registration</p>
                <p className="pricing-period">From August 18th</p>
              </div>
              <div className="pricing-body">
                <p className="pricing-section-label">By level</p>
                {lateRows.map((row) => (
                  <div key={row.label} className="pricing-row">
                    <span className="pricing-row-label">{row.label}</span>
                    <span className="pricing-price">{row.price}</span>
                  </div>
                ))}
                <p className="pricing-section-label">Additional</p>
                {lateExtras.map((row) => (
                  <div key={row.label} className="pricing-row">
                    <span className="pricing-row-label">{row.label}</span>
                    <span className="pricing-price">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="info-box"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="info-title" style={{ marginBottom: "1rem" }}>
            How to pay via PayPal
          </h2>
          <div className="steps-list">
            {steps.map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-number">{i + 1}</div>
                <div className="step-content">
                  <p className="step-text">{step.text}</p>
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="step-image"
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "1.75rem" }}>
            <a
              className="button-long-PP"
              href="https://www.paypal.com/paypalme/fundaquim"
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink size={15} style={{ marginRight: "6px" }} />
              <span style={{ color: "black", fontWeight: "800" }}>Continue to </span>
              <i>
                <span style={{ color: "#002E80", fontWeight: "800" }}>Pay</span>
                <span style={{ color: "#0094D3", fontWeight: "800" }}>Pal</span>
              </i>
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
