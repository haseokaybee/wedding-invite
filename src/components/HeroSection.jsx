// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      style={{
        width: "100vw",          // full screen width
        height: "100vh",         // full screen height (1080x1920 effect)
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          background: "linear-gradient(135deg, #ffeef6, #ffffff)",
          borderRadius: "32px",
          padding: "48px 24px",
          textAlign: "center",
          boxShadow: "0 18px 40px rgba(0,0,0,0.07)",
          border: "1px solid rgba(255,255,255,0.7)",

          // Keep your content max width 390 but centered FULLSCREEN
          width: "100%",
          maxWidth: "390px",
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
            fontSize: "2.5rem",
            color: "#3c2b2b",
            marginTop: "12px",
            lineHeight: "1.25",
          }}
        >
          Farah &<br />Ameerul
        </h1>

        <p
          style={{
            marginTop: "16px",
            fontSize: "1rem",
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
