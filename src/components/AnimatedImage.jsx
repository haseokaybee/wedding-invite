import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedImage({
  src,
  alt = "",
  width = "90%",
  delay = 0.2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.9, y: 20 }
      }
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: width,
          maxWidth: "220px",
          filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))",
        }}
      />
    </motion.div>
  );
}
