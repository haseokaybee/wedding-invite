// src/components/BlessingSection.jsx
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CountdownTimer from "./CountdownTimer.jsx";

export default function BlessingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: false });

  /* =========================================================
     ⭐ PREMIUM GOLD GLITTER PARTICLES (auto-generated)
  ========================================================= */
  useEffect(() => {
    if (!isInView) return;

    const container = document.createElement("div");
    container.className = "blessing-glitter-container";

    for (let i = 0; i < 40; i++) {
      const gl = document.createElement("div");
      gl.className = "blessing-glitter";

      gl.style.left = Math.random() * 100 + "%";
      gl.style.top = Math.random() * 100 + "%";
      gl.style.animationDelay = Math.random() * 2 + "s";
      gl.style.transform = `scale(${0.5 + Math.random() * 1})`;

      container.appendChild(gl);
    }

    document.body.appendChild(container);

    return () => container.remove();
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      style={{
        width: "390px",
        height: "693px",
        margin: "28px auto 0",
        borderRadius: "28px",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 18px 40px rgba(0,0,0,0.1)",
        border: "1px solid rgba(255,255,255,0.7)",
      }}
    >
      {/* 🌟 BACKGROUND PARALLAX ZOOM LOOP */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/backgroundwebsite.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
        animate={{
          scale: [1, 1.08, 1], // zoom in → out → repeat
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* 🌟 Soft Pink + Gold Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,240,245,0.65), rgba(255,249,252,0.85))",
          zIndex: 1,
        }}
      />

      {/* 🌟 Soft Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.25))",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* 🌟 CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          padding: "48px 24px",
        }}
      >
        {/* Arabic Bismillah */}
        <motion.h2
          className="cinzel"
          style={{
            fontSize: "1.6rem",
            color: "#a88b5f",
            marginBottom: "12px",
            textShadow: "0 0 8px rgba(255,245,200,0.8)",
            fontFamily: "Scheherazade New",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.h2>

        {/* GOLD DIVIDER */}
        <motion.div
          style={{
            width: "140px",
            height: "2px",
            margin: "0 auto 20px",
            background:
              "linear-gradient(90deg, transparent, #d4af37, transparent)",
            boxShadow: "0 0 8px rgba(212,175,55,0.5)",
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Main Prayer */}
        <motion.p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            color: "#6d5959",
            fontFamily: "'Times New Roman', serif",
            whiteSpace: "pre-line",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {"Ya Allah Ya Tuhan Kami\nEngkau berkatilah majlis ini\ndan satukanlah hati"}
        </motion.p>

        {/* Names */}
        <motion.h3
          style={{
            marginTop: "24px",
            fontSize: "1.4rem",
            color: "#b08c4f",
            fontFamily: "'Cinzel', serif",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          Farah & Ameerul
        </motion.h3>

        {/* Second paragraph */}
        <motion.p
          style={{
            marginTop: "10px",
            fontSize: "1rem",
            lineHeight: "1.8",
            color: "#6d5959",
            fontFamily: "'Times New Roman', serif",
            whiteSpace: "pre-line",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {
            "Seperti Engkau satukan hati Adam dan Hawa.\nSemoga kehidupan mereka dipenuhi Al-Mawwadah dan Al-Rahmah di dunia dan akhirat.\nAmin."
          }
        </motion.p>

        {/* Final Arabic blessing */}
        <motion.p
          style={{
            marginTop: "26px",
            fontSize: "1.3rem",
            color: "#b08c4f",
            fontFamily: "'Scheherazade New', serif",
            textShadow: "0 0 8px rgba(255,230,180,0.7)",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.3 }}
        >
          اللهم بارك لهما وبارك عليهما واجمع بينهما في خير
        </motion.p>

        {/* ⭐ Wedding Countdown Title */}
<motion.h3
  style={{
    marginTop: "40px",
    fontSize: "1.4rem",
    color: "#b08c4f",
    fontFamily: "'Cinzel', serif",
    letterSpacing: "0.04em",
  }}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 1 }}
>
  Menghitung Hari
</motion.h3>

{/* ⭐ Gold Divider */}
<motion.div
  style={{
    width: "130px",
    height: "2px",
    margin: "8px auto 20px",
    background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
    boxShadow: "0 0 8px rgba(212,175,55,0.5)",
  }}
  initial={{ scaleX: 0 }}
  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
  transition={{ duration: 0.8 }}
/>

{/* ⭐ Countdown Timer */}
<motion.div
  style={{
    fontSize: "1.15rem",
    color: "#6d5959",
    fontFamily: "'Times New Roman', serif",
    marginTop: "10px",
    fontWeight: "bold",
  }}
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
  transition={{ duration: 1 }}
>
  <CountdownTimer targetDate="2025-12-28T00:00:00" />
</motion.div>
      </div>
    </motion.div>
  );
}
