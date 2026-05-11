import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <motion.div
      className="fullpage-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="fullpage-icon-wrap success"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
      >
        <CheckCircle size={44} strokeWidth={1.5} />
      </motion.div>

      <motion.img
        src="assets/svg/quitel-letters.svg"
        alt="QUITEL"
        className="fullpage-logo"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.45, y: 0 }}
        transition={{ delay: 0.25 }}
      />

      <motion.h1
        className="fullpage-title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Form submitted successfully!
      </motion.h1>

      <motion.p
        className="fullpage-subtitle"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
      >
        Thank you for your submission. We will review it and get back to you
        as soon as possible.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46 }}
      >
        <NavLink to="/" className="btn btn-primary">
          Back to Homepage
        </NavLink>
      </motion.div>
    </motion.div>
  );
}
