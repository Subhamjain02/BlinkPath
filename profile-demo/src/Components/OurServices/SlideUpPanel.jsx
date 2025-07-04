// src/components/SlideUpPanel.jsx
import { motion, useTransform } from "framer-motion";

export default function SlideUpPanel({
  scrollYProgress,
  start = 0.7,
  end   = 0.8,
  children,
  className = ""
}) {
  // Map scroll → translateY from 100% → 0% over [start, end]
  const y = useTransform(
    scrollYProgress,
    [start, end],
    ["100%", "50%"]
  );

  return (
    <motion.div
      style={{ y }}
      className={`absolute top-[850vh] w-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
