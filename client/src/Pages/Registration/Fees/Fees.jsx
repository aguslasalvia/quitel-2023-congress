import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import FeeTables from "../../../components/FeeTables/FeeTables";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ArrowRight, Building2 } from "lucide-react";

const included = [
  "Conference Pack",
  "Access to all conference sessions and exhibitions",
  "Coffee break",
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
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
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Registration</p>
        <h1 className="page-header-title">
          Fees &amp; <em>payment.</em>
        </h1>
        <p className="page-header-lead">
          All registrations received <strong>before August 1st</strong> will be favored
          with a <strong>10% discount</strong> on the rates shown below.
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

        {/* Included */}
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
            <h2 className="section-title">What&apos;s included</h2>
          </div>
          <div className="section-content prose">
            <ul className="included-list" style={{ maxWidth: "480px" }}>
              {included.map((item) => (
                <li key={item} className="included-item">
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "1.5rem" }}>
              <strong>Researchers and Students belonging to PEDECIBA (Uruguay):</strong>{" "}
              those who wish to pay through PEDECIBA must{" "}
              <a
                href="https://drive.google.com/file/d/1Ctr87tIPmz5BkRSXfdCY3ddYxlVduWxo/view"
                rel="noreferrer"
                target="_blank"
              >
                complete this form
              </a>{" "}
              and attach it to the Registration payment receipt section in the
              registration form.
            </p>
          </div>
        </motion.section>

        {/* Payment options */}
        <motion.section
          className="editorial-section"
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-label">
            <span className="section-num">03</span>
            <h2 className="section-title">Payment options</h2>
          </div>
          <div className="section-content prose">
            <p>
              Payments can be made with <strong>PayPal</strong> (credit or debit card) or
              by <strong>wire transfer</strong> from any bank account. We thank you in
              advance.
            </p>
            <div className="payment-btn-group" style={{ marginTop: "1.25rem" }}>
              <NavLink className="btn-editorial" to="/payment">
                Pay via PayPal <ArrowRight size={15} />
              </NavLink>
              <NavLink className="btn-editorial outline" to="/bank-payment">
                <Building2 size={15} />
                Wire Transfer
              </NavLink>
            </div>
          </div>
        </motion.section>

        {/* Registration form */}
        <motion.section
          className="editorial-section"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="section-label">
            <span className="section-num">04</span>
            <h2 className="section-title">Registration form</h2>
          </div>
          <div className="section-content prose">
            <p>You can submit your registration before you make a payment.</p>
            <div className="payment-btn-group" style={{ marginTop: "1.25rem" }}>
              <button
                className="btn-editorial accent"
                onClick={() => navigate("/registration-form")}
              >
                Registration form <ArrowRight size={15} />
              </button>
              <button
                className="btn-editorial outline"
                onClick={() => navigate("/registration")}
              >
                <ArrowLeft size={15} />
                Back
              </button>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}
