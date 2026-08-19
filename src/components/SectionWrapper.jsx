import { motion } from "framer-motion";

function SectionWrapper({ children, direction = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default SectionWrapper;