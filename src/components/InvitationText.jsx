// src/components/InvitationText.jsx
import React from "react";
import { motion } from "framer-motion";

/* ============================================
   TYPEWRITER FIX — THIS IS THE PART YOU REPLACE
=============================================== */
const TypewriterText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      style={{ display: "inline-block", whiteSpace: "normal" }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
            delay: delay,
          },
        },
      }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          style={{
            display: "inline-block", // allows wrapping naturally
            whiteSpace: "pre-wrap",  // preserves spacing + allows wrap
          }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ============================================
   INVITATION COMPONENT
=============================================== */
export default function InvitationText() {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        marginTop: "1px",
        padding: "24px 20px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontFamily: "'Cinzel', serif",
          letterSpacing: "0.05em",
          marginBottom: "16px",
          fontSize: "1.35rem",
          textTransform: "uppercase",
        }}
      >
        NIZA BINTI GHANI
        &
        AMRAN BIN ABDUL RAHMAN

      </motion.h2>

      {/* Malay Paragraph */}
     <p
  style={{
  fontSize: "0.97rem",
    color: "#7a5c5c",
    lineHeight: "1.65",
    marginBottom: "16px",
    fontFamily: "'Times New Roman', serif",
    overflowWrap: "break-word",
    wordBreak: "normal",
    whiteSpace: "pre-wrap",
  }}
>
  <TypewriterText
    delay={0.4}
    text={
      "Dengan segala hormat menjemput Dato'/Datin/ Tuan/Puan/Encik/Cik ke Majlis Pertunangan Puteri Kami."
    }
  />
</p>

      {/* English Paragraph */}
      <p
  style={{
    fontFamily: "Cinzel",
     fontSize: "0.97rem",
    color: "#7a5c5c",
    lineHeight: "1.65",
    marginBottom: "16px",
    overflowWrap: "break-word",
    wordBreak: "normal",
    whiteSpace: "pre-wrap",
  }}
>
  <TypewriterText
    delay={3.2}
    text={
      "FARAH WAHIDA BINTI AMRAN"
    }
  />
</p>

<p
  style={{
    fontFamily: "Cinzel",
     fontSize: "0.97rem",
    color: "#7a5c5c",
    lineHeight: "1.65",
    marginBottom: "16px",
    overflowWrap: "break-word",
    wordBreak: "normal",
    whiteSpace: "pre-wrap",
  }}
>
  <TypewriterText
    delay={3.2}
    text={
      "AMEERUL MUKMIN BIN KHAIRUL ANUAR"
    }
  />
</p>

    </motion.div>
  );
}
