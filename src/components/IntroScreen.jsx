// IntroScreen.jsx
import React from "react";
import { motion } from "framer-motion";

export default function IntroScreen({ onOpen }) {
  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.3 }}   // ZOOM OUT
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "390px",
        height: "844px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "url('/intro-bg.jpg') center/cover no-repeat",
        textAlign: "center",
        padding: "20px",
      }}
    >
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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          color: "#5A4A4A",
          marginTop: "10px",
          fontSize: "1rem",
        }}
      >
        Farah & Ameerul  
        <br />
        28 December 2025
      </motion.p>

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
          background: "linear-gradient(135deg, #D58FA6, #F2A4BF)",
          color: "white",
          fontSize: "1rem",
          fontWeight: 500,
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(213, 143, 166, 0.3)",
          fontFamily: "Times New Roman"
        }}
      >
        ✨ Buka Kad ✨
      </motion.button>
    </motion.div>
  );
}
