// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section style={{ paddingBottom: "24px" }}>
      <motion.div
        style={{
          /* 🔥 EXACT 1080 × 1920 DESIGN SCALED TO 390 WIDTH */
          width: "390px",
          height: "690px", // 1080x1920 scaled to match width
          maxWidth: "390px",
          margin: "0 auto",

          /* 🔥 YOUR IMAGE */
          backgroundImage: "url('/backgroundwebsite.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          borderRadius: "28px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
          }}
        />

        {/* TEXT CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            top: "28%",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <p
            style={{
              letterSpacing: "0.18em",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              color: "#fff",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            UNDANGAN MAJLIS PERTUNANGAN
          </p>

          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "2.3rem",
              color: "#fff",
              marginTop: "12px",
              lineHeight: "1.3",
              textShadow: "0 3px 12px rgba(0,0,0,0.45)",
            }}
          >
            Farah &<br />Ameerul
          </h1>

          <p
            style={{
              marginTop: "14px",
              fontSize: "1rem",
              color: "#fff",
              textShadow: "0 2px 6px rgba(0,0,0,0.35)",
            }}
          >
            28 • 12 • 2025
            <br />
            Pasir Mas, Kelantan
          </p>
        </div>
      </motion.div>
    </section>
  );
}
