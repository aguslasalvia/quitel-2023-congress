import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Check, CreditCard, Building2, ArrowLeft, FileText, Info } from "lucide-react";

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

const included = [
  "Conference Pack",
  "Access to all conference sessions and exhibitions",
  "Coffee break",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

export default function Fees() {
  const navigate = useNavigate();

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
        <p className="page-title-p">Registration</p>
        <p className="page-title-p">Fees &amp; Payment</p>
      </motion.h1>

      <div className="page-info">
        {/* Discount note */}
        <motion.div
          className="info-box"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-header">
            <Info size={18} />
            <h2 className="info-title">Early bird discount</h2>
          </div>
          <div className="info-text">
            <p>
              All registrations received <strong>before August 1st</strong> will be
              favored with a <strong>10% discount</strong> on the rates shown below.
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

        {/* Included */}
        <motion.div
          className="info-box"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-header">
            <Check size={18} />
            <h2 className="info-title">What&apos;s included</h2>
          </div>
          <ul className="included-list">
            {included.map((item) => (
              <li key={item} className="included-item">
                <Check size={15} />
                {item}
              </li>
            ))}
          </ul>
          <div className="info-text" style={{ marginTop: "1rem" }}>
            <p>
              <strong>Researchers and Students belonging to PEDECIBA (Uruguay):</strong>
            </p>
            <p style={{ marginTop: "0.4rem" }}>
              Those who wish to pay through PEDECIBA must{" "}
              <a
                href="https://drive.google.com/file/d/1Ctr87tIPmz5BkRSXfdCY3ddYxlVduWxo/view"
                rel="noreferrer"
                target="_blank"
              >
                complete this form
              </a>{" "}
              and attach it to the Registration payment receipt section in the registration
              form.
            </p>
          </div>
        </motion.div>

        {/* Payment options */}
        <motion.div
          className="info-box"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-header">
            <CreditCard size={18} />
            <h2 className="info-title">Payment options</h2>
          </div>
          <div className="info-text">
            <p>
              Payments can be made with <strong>PayPal</strong> (credit or debit card) or
              by <strong>wire transfer</strong> from any bank account. We thank you in
              advance.
            </p>
          </div>
          <div className="payment-btn-group">
            <NavLink className="button-long-PP" to="/payment">
              <span style={{ color: "black", fontWeight: "800" }}>Pay via </span>
              <i>
                <span style={{ color: "#002E80", fontWeight: "800" }}>Pay</span>
                <span style={{ color: "#0094D3", fontWeight: "800" }}>Pal</span>
              </i>
            </NavLink>
            <NavLink className="button-long-PP wire" to="/bank-payment">
              <Building2 size={15} style={{ marginRight: "5px" }} />
              <span style={{ color: "#002E80", fontWeight: "800" }}>Wire Transfer</span>
            </NavLink>
          </div>
        </motion.div>

        {/* Registration form */}
        <motion.div
          className="info-box"
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-header">
            <FileText size={18} />
            <h2 className="info-title">Registration form</h2>
          </div>
          <div className="info-text">
            <p>You can submit your registration before you make a payment.</p>
          </div>
          <div className="payment-btn-group">
            <button
              className="button-long-blue"
              onClick={() => navigate("/registration-form")}
            >
              Registration form
            </button>
            <button
              className="button-long-pink"
              onClick={() => navigate("/registration")}
            >
              <ArrowLeft size={15} style={{ marginRight: "4px" }} />
              Back
            </button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
}
