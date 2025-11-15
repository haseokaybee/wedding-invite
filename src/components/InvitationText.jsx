// src/components/InvitationText.jsx
import React from "react";
import { motion } from "framer-motion";

/* ============================================
   TYPEWRITER FIX — THIS IS THE PART YOU REPLACE
=============================================== */
const TypewriterText = ({ text, delay = 0 }) => {
  const words = text.split(" "); // animate per WORD instead of letter

  return (
    <motion.span
      style={{
        display: "inline",
        whiteSpace: "pre-wrap",
        lineHeight: "1.7",
      }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15, // slower, smoother word-by-word
            delay: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "4px",
            whiteSpace: "pre-wrap",
          }}
          variants={{
            hidden: { opacity: 0, y: 2 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}
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
    className="cinzel"
  style={{
    fontSize: "1.1rem",
    letterSpacing: "0.05em",
    marginBottom: "16px",
    textAlign: "center",
    lineHeight: "1.4",
    whiteSpace: "pre-line",
  }}
>
  {"NIZA BINTI GHANI\n&\nAMRAN BIN ABDUL RAHMAN"}

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

      {/* FARAH */}
      <h3
    className="cinzel"
  style={{
    fontSize: "1.1rem",
    letterSpacing: "0.05em",
    marginBottom: "16px",
    textAlign: "center",
    lineHeight: "1.4",
    whiteSpace: "pre-line",
  }}
>
  
  <TypewriterText
    delay={3.2}
    text={
      "FARAH WAHIDA BINTI AMRAN"
    }
  />
</h3>

<h4
     className="cinzel"
  style={{
    fontSize: "1.1rem",
    letterSpacing: "0.05em",
    marginBottom: "16px",
    textAlign: "center",
    lineHeight: "1.4",
    whiteSpace: "pre-line",
  }}
>
  
  <TypewriterText
    delay={3.2}
    text={
      "AMEERUL MUKMIN BINTI KHAIRUL ANUAR"
    }
  />
</h4>

    </motion.div>
  );
}
