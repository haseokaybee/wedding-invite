// IntroScreen.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IntroScreen({ onOpen }) {
  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "390px",
        height: "844px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "url('/intro-bg.jpg') center/cover no-repeat",
        textAlign: "center",
        padding: "20px",
      }}
    >

      {/* 💎 Falling glitter (behind everything) */}
      <GlitterParticles />

  {/* 🌙 Soft Vignette Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      background:
        "radial-gradient(circle at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.35) 100%)",
      pointerEvents: "none",
    }}
  />







      {/* 💎 Soft Glow behind ring */}
      <div
        style={{
          position: "absolute",
          top: "230px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,200,245,0.45), transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* 💍 Floating Ring Image */}
      <motion.img
        src="/cincin.png"
        alt="ring"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
          rotate: [0, 1.5, -1.5, 0],
          scale: 1,
        }}
        transition={{
          opacity: { duration: 1.2 },
          y: { duration: 4, ease: "easeInOut", repeat: Infinity },
          rotate: { duration: 6, ease: "easeInOut", repeat: Infinity },
        }}
        style={{
          width: "130px",
          height: "auto",
          marginBottom: "12px",
          zIndex: 2,
        }}
      />

      {/* ✨ Sparkles around ring */}
      <Sparkle />

      {/* 🔆 Light flare pulse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [0.7, 1.1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "255px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)",
          filter: "blur(25px)",
          zIndex: 1,
        }}
      />

      {/* TITLE */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2rem",
          color: "#803A5B",
          letterSpacing: "0.05em",
        }}
      >
        UNDANGAN MAJLIS PERTUNANGAN
      </motion.h1>

      {/* Names */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          color: "#5A4A4A",
          marginTop: "10px",
          fontSize: "1rem",
          fontFamily: "Poppins",
        }}
      >
        Farah & Ameerul
      </motion.p>

      {/* BUTTON */}
      <motion.button
        onClick={onOpen}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          marginTop: "40px",
          padding: "12px 24px",
          borderRadius: "30px",
          border: "none",
          background: "linear-gradient(135deg, #D58FA6, #5c424bff)",
          color: "white",
          fontSize: "1rem",
          fontWeight: 500,
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(213, 143, 166, 0.3)",
          fontFamily: "Cinzel",
          zIndex: 2,
        }}
      >
        ✨ Buka Kad ✨
      </motion.button>
    </motion.div>
  );
}


/* --------------------------------------------------------
   ✨ SPARKLE AROUND THE RING (Premium effect)
-------------------------------------------------------- */
const Sparkle = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            top: 250 + Math.sin(i) * 35,
            left: 195 + Math.cos(i) * 35,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fff6e8, #ffd8a8)",
            boxShadow: "0 0 10px rgba(255,220,150,0.9)",
            zIndex: 3,
          }}
        />
      ))}
    </>
  );
};


/* --------------------------------------------------------
   🌟 FALLING GLITTER (Premium slow particles)
-------------------------------------------------------- */
const GlitterParticles = () => {
  return (
    <>
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: -50, x: Math.random() * 390 }}
          animate={{
            opacity: [0, 1, 0],
            y: [ -30, 900 ],
            x: `calc(${Math.random() * 390}px + ${Math.random() * 20 - 10}px)`
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: 0,
            width: `${3 + Math.random() * 3}px`,
            height: `${3 + Math.random() * 3}px`,
            background: "rgba(59, 10, 25, 0.9)",
            borderRadius: "50%",
            filter: "blur(1px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
    </>
  );
};
