import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import CopyButton from "../../components/CopyButton/CopyButton";
import { Landmark, Info } from "lucide-react";

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

const BROU_accounts = [
  { number: "001570119-00006", currency: "UYU – Uruguayan Peso" },
  { number: "001570119-00003", currency: "USD – United States Dollar" },
];

const BROU_details = [
  { label: "Account holder", value: "Fundación para el progreso de la Química (FUNDAQUIM)" },
  { label: "Email", value: "contacto@fundaquim.org.uy" },
  { label: "SWIFT", value: "BROUUYMMXXX" },
  { label: "Bank", value: "Banco República Oriental de Uruguay" },
  { label: "Address", value: "Piedras 369" },
  { label: "City", value: "Montevideo" },
  { label: "Country", value: "Uruguay" },
];

const Santander_accounts = [
  { number: "075-5316316", currency: "UYU – Uruguayan Peso" },
  { number: "075-5316316", currency: "USD – United States Dollar" },
  { number: "075-4772431", currency: "EUR – Euro" },
];

const Santander_details = [
  { label: "Account holder", value: "Fundación para el progreso de la Química (FUNDAQUIM)" },
  { label: "Email", value: "contacto@fundaquim.org.uy" },
  { label: "SWIFT", value: "BSCHUYMM" },
  { label: "Bank", value: "Banco Santander" },
  { label: "Address", value: "Julio Herrera y Obes 1365" },
  { label: "City", value: "Montevideo" },
  { label: "Country", value: "Uruguay" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

/* eslint react/prop-types: 0 */
function BankCard({ name, note, accounts, details, index }) {
  return (
    <motion.div
      className="bank-card"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="bank-card-header">
        <Landmark size={18} />
        <div>
          <p className="bank-name">{name}</p>
          {note && <p className="bank-note">{note}</p>}
        </div>
      </div>

      <div className="bank-card-body">
        <div className="bank-accounts">
          {accounts.map((acc) => (
            <div key={acc.number + acc.currency} className="bank-account-row">
              <span className="bank-account-num">{acc.number}</span>
              <span className="bank-currency">{acc.currency}</span>
              <CopyButton text={acc.number} />
            </div>
          ))}
        </div>

        {details.map((row) => (
          <div key={row.label} className="bank-row">
            <span className="bank-row-label">{row.label}</span>
            <span className="bank-row-value">
              <span>{row.value}</span>
              <CopyButton text={row.value} />
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function WireTransfer() {
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
        <p className="page-title-p">Wire Transfer</p>
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
            <Info size={18} />
            <h2 className="info-title">Registration fee payment</h2>
          </div>
          <div className="info-text">
            <p>
              The fees are the same as specified on the previous page. Please kindly
              specify in the wire transfer description which fees are being paid. We
              thank you in advance.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Below you will find the available bank accounts and their details.
              Click any field to copy its value.
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

        {/* BROU */}
        <BankCard
          name="Banco República Oriental del Uruguay (BROU)"
          note="Only for amounts greater than USD 100"
          accounts={BROU_accounts}
          details={BROU_details}
          index={2}
        />

        {/* Santander */}
        <BankCard
          name="Banco Santander"
          note="All amounts accepted"
          accounts={Santander_accounts}
          details={Santander_details}
          index={3}
        />
      </div>

      <Footer />
    </motion.div>
  );
}
