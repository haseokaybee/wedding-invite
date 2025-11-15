// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
  <section style={{ paddingBottom: "24px" }}>
  <motion.div
    style={{
      background: "linear-gradient(135deg, #ffeef6, #ffffff)",
      borderRadius: "28px",
      padding: "32px 16px",  // reduced padding for more width inside
      textAlign: "center",
      boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
      border: "1px solid rgba(255,255,255,0.7)",
      position: "relative",
      overflow: "hidden",

      // NEW — make the card wider
      width: "100%",
      maxWidth: "390px",
      margin: "0 auto",
      boxSizing: "border-box",
    }}
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <p
      style={{
        letterSpacing: "0.18em",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        color: "#7a5c5c",
      }}
    >
      UNDANGAN MAJLIS PERTUNANGAN
    </p>

    <h1
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "2rem",
        color: "#3c2b2b",
        marginTop: "12px",
        lineHeight: "1.3",
      }}
    >
      Farah &<br />Ameerul
    </h1>

    <p
      style={{
        marginTop: "14px",
        fontSize: "0.9rem",
        color: "#7a5c5c",
      }}
    >
      28 • 12 • 2025
      <br />
      Pasir Mas, Kelantan
    </p>
  </motion.div>
</section>

  );
}
