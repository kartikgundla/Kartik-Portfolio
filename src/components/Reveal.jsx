import { motion } from "framer-motion";

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
  scaleUp: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
};

function Reveal({ children, type = "fadeUp", delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants[type]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;