import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function ErrorElement() {
  return (
    <motion.div
      className="fullpage-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="fullpage-icon-wrap error"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
      >
        <AlertTriangle size={44} strokeWidth={1.5} />
      </motion.div>

      <motion.img
        src="assets/svg/quitel-letters.svg"
        alt="QUITEL"
        className="fullpage-logo"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.35, y: 0 }}
        transition={{ delay: 0.25 }}
      />

      <motion.h1
        className="fullpage-title"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Page not <em>found.</em>
      </motion.h1>

      <motion.p
        className="fullpage-subtitle"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
      >
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46 }}
      >
        <NavLink to="/" className="btn-editorial">
          Back to Homepage
        </NavLink>
      </motion.div>
    </motion.div>
  );
}
