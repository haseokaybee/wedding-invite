import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GlitterDrop from "./GlitterDrop.jsx";



/* --------------------------------------------------
   GOLD DIVIDER — elegant slide animation
-------------------------------------------------- */
const GoldDivider = ({ active }) => (
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    animate={active ? { width: "70%", opacity: 1 } : { width: 0, opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    style={{
      height: "2px",
      margin: "20px auto",
      background: "linear-gradient(90deg, #d7c27b, #f9e9b0, #d7c27b)",
      borderRadius: "10px",
      boxShadow: "0 0 12px rgba(255,240,190,0.8)",
    }}
  />
);

/* --------------------------------------------------
   TYPEWRITER — word-by-word
-------------------------------------------------- */
const TypewriterText = ({ text, active, delay = 0 }) => {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.12, delay } }
      }}
      style={{ whiteSpace: "pre-line" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: { opacity: 1, y: 0 }
          }}
          style={{ display: "inline-block", marginRight: "4px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* --------------------------------------------------
   MAIN COMPONENT
-------------------------------------------------- */
export default function InvitationText() {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.4 }); // ⭐ re-animate on every scroll

 return (

  
  <motion.div
    ref={ref}
    className="card"



    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 30 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      padding: "28px 20px",
      borderRadius: "20px",
      textAlign: "center",
      position: "relative",         // ⭐ IMPORTANT for glitter layering
      overflow: "hidden",           // ⭐ Prevent glitter escaping outside
    }}
  >
    {/* ✨ INSERT GLITTER EFFECT HERE */}
    <GlitterDrop active={isInView} />
    <GlitterDrop active={isInView} color="pink" />

    {/* ⭐ Your content starts here */}

      {/* PARENTS NAME */}
      <motion.h2
        className="cinzel"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.4",
          whiteSpace: "pre-line",
          marginBottom: "18px",
        }}
      >
        {"NIZA BINTI GHANI\n&\nAMRAN BIN ABDUL RAHMAN"}
      </motion.h2>

      {/* MALAY PARAGRAPH */}
      <p
        style={{
          fontSize: "0.97rem",
          color: "#7a5c5c",
          lineHeight: "1.65",
          marginBottom: "22px",
          fontFamily: "'Times New Roman', serif",
        }}
      >
        <TypewriterText
          text="Dengan segala hormat menjemput Dato'/Datin/ Tuan/Puan/Encik/Cik ke Majlis Pertunangan Puteri Kami."
          active={isInView}
          delay={0.2}
        />
      </p>

      <GoldDivider active={isInView} />

      {/* FARAH NAME */}
      <h3
        className="cinzel"
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.4",
          marginBottom: "18px",
        }}
      >
        <TypewriterText
          text="FARAH WAHIDA BINTI AMRAN"
          active={isInView}
          delay={0.4}
        />
      </h3>

      <p
        style={{
          fontSize: "0.97rem",
          color: "#7a5c5c",
          marginBottom: "20px",
          fontFamily: "Times New Roman",
        }}
      >
        <TypewriterText
          text="dengan pilihan hatinya"
          active={isInView}
          delay={0.4}
        />
      </p>

      {/* AMEERUL NAME (2 LINES CLEAN) */}
      <h4
        className="cinzel"
        style={{
          fontSize: "1.2rem",
          whiteSpace: "pre-line",
          lineHeight: "1.4",
        }}
      >
        <TypewriterText
          text={"AMEERUL MUKMIN BIN KHAIRUL ANUAR"}
          active={isInView}
          delay={0.6}
        />
      </h4>

      <GoldDivider active={isInView} />

      {/* LOCATION SECTION */}
      <h6
        className="cinzel"
        style={{
          fontSize: "1rem",
          marginBottom: "10px",
        }}
      >
        <TypewriterText
          text="LOKASI MAJLIS"
          active={isInView}
          delay={0.6}
        />
      </h6>

      <p
        style={{
          fontSize: "1rem",
          color: "#7a5c5c",
          marginBottom: "18px",
          fontFamily: "Times New Roman",
          whiteSpace: "pre-line",
        }}
      >
        <TypewriterText
          text={"Lot Pt 9766 Kampung Pusu 40, 17070 Pasir Mas, Kelantan"}
          active={isInView}
          delay={0.7}
        />
      </p>

      {/* DATE SECTION */}
      <h6 className="cinzel" style={{ fontSize: "1rem" }}>
        <TypewriterText text="TARIKH" active={isInView} delay={0.8} />
      </h6>

      <p
        style={{
          color: "#7a5c5c",
          fontSize: "1rem",
          fontFamily: "Times New Roman",
        }}
      >
        <TypewriterText
          text="Ahad, 28 Disember 2025"
          active={isInView}
          delay={0.9}
        />
      </p>

      <p
        style={{
          color: "#7a5c5c",
          fontSize: "0.9rem",
          fontStyle: "italic",
          fontFamily: "Times New Roman",
        }}
      >
        <TypewriterText
          text="(Bersamaan 27 Rejab 1447H)"
          active={isInView}
          delay={1.0}
        />
      </p>

       {/* MASA SECTION */}
      <h6 className="cinzel" style={{ fontSize: "1rem" ,
        marginTop: "10px",
      }}>
        <TypewriterText text="WAKTU" active={isInView} delay={0.8} />
      </h6>

      <p
        style={{
          
          color: "#7a5c5c",
          fontSize: "1rem",
          fontFamily: "Times New Roman",
        }}
      >
        <TypewriterText
          text="12.00 Tengah hari - 4.00 Petang"
          active={isInView}
          delay={0.9}
        />
      </p>

    

      <GoldDivider active={isInView} />
    </motion.div>
  );
}
