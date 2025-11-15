// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section style={{ paddingBottom: "24px" }}>
      <motion.div
        style={{
          background: "linear-gradient(135deg, #ffeef6, #ffffff)",
          borderRadius: "32px",
          padding: "40px 24px",
          textAlign: "center",
          boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
          border: "1px solid rgba(255,255,255,0.7)",
          position: "relative",
          overflow: "hidden",
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
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.8rem",
            margin: "16px 0 8px",
            letterSpacing: "0.08em",
          }}
        >
          Farah & Ameerul
        </h1>

        <p
          style={{
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontSize: "0.85rem",
            color: "#d58fa6",
          }}
        >
          28 • 12 • 2025
        </p>

        <p
          style={{
            fontFamily: "Montserrat",
            marginTop: "8px",
            fontSize: "0.95rem",
            color: "#7a5c5c",
            
          }}
        >
          Pasir Mas, Kelantan
        </p>
      </motion.div>
    </section>
  );
}
