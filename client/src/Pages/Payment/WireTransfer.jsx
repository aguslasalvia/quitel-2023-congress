import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import CopyButton from "../../components/CopyButton/CopyButton";
import FeeTables from "../../components/FeeTables/FeeTables";

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
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

/* eslint react/prop-types: 0 */
function BankCard({ name, note, accounts, details }) {
  return (
    <div className="bank-card">
      <div className="bank-card-header">
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
    </div>
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
      <motion.header
        className="page-header"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow">Payment</p>
        <h1 className="page-header-title">
          Wire <em>transfer.</em>
        </h1>
        <p className="page-header-lead">
          Please kindly specify in the wire transfer description which fees are being
          paid. Below you will find the available bank accounts — use the copy buttons
          to grab any value.
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

        {/* Bank accounts */}
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
            <h2 className="section-title">Bank accounts</h2>
          </div>
          <div className="section-content">
            <BankCard
              name="Banco República Oriental del Uruguay (BROU)"
              note="Only for amounts greater than USD 100"
              accounts={BROU_accounts}
              details={BROU_details}
            />
            <BankCard
              name="Banco Santander"
              note="All amounts accepted"
              accounts={Santander_accounts}
              details={Santander_details}
            />
          </div>
        </motion.section>
      </div>

      <Footer />
    </motion.div>
  );
}
