import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import FeeTables from "../../components/FeeTables/FeeTables";
import { ExternalLink } from "lucide-react";

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
  hidden: { opacity: 0, y: 16 },
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
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Payment</p>
        <h1 className="page-header-title">
          Pay via <em>PayPal.</em>
        </h1>
        <p className="page-header-lead">
          Payments can be made with PayPal using a credit or debit card. Please kindly
          specify in the PayPal note which fees are being paid. We thank you in advance.
        </p>
      </motion.header>

      <div className="page-body">
        {/* Pricing tables */}
        <motion.section
          className="editorial-section"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-label">
            <span className="section-num">01</span>
            <h2 className="section-title">Rates</h2>
          </div>
          <div className="section-content">
            <FeeTables />
          </div>
        </motion.section>

        {/* Steps */}
        <motion.section
          className="editorial-section"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-label">
            <span className="section-num">02</span>
            <h2 className="section-title">How to pay via PayPal</h2>
          </div>
          <div className="section-content">
            <div className="steps-list">
              {steps.map((step, i) => (
                <div key={i} className="step-item">
                  <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                  <div className="step-content">
                    <p className="step-text">{step.text}</p>
                    <img src={step.image} alt={step.alt} className="step-image" />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.75rem" }}>
              <a
                className="btn-editorial"
                href="https://www.paypal.com/paypalme/fundaquim"
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink size={15} />
                Continue to PayPal
              </a>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}
