import { motion } from "framer-motion";

function SectionWrapper({ children, direction = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;