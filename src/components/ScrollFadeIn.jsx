import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollFadeIn({ children, delay = 0, y = 20 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // 👈 re-trigger when in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay,
      }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
