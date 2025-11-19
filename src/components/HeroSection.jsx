// HeroSection.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import GlitterDrop from "./GlitterDrop.jsx";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  /* ------------------------------------------
     ⭐ SCROLL TRACKER FOR TEXT MOVEMENT
  ------------------------------------------ */
  useEffect(() => {
    const viewport = document.querySelector(".main-scroll-area");
    if (!viewport) return;

    const handleScroll = () => {
      setScrollY(viewport.scrollTop);
    };

    viewport.addEventListener("scroll", handleScroll);
    return () => viewport.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      y: scrollY * -0.15,
      opacity: Math.max(1 - scrollY / 200, 0),
      transition: { duration: 0.2, ease: "easeOut" },
    });
  }, [scrollY, controls]);

  /* ------------------------------------------
     ⭐ IN-VIEW HANDLER (needed for Bismillah!)
  ------------------------------------------ */
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false, amount: 0.4 });

  return (
    <section style={{ paddingBottom: "24px" }}>
      <motion.div
        ref={heroRef}
        style={{
          width: "390px",
          height: "690px",
          maxWidth: "390px",
          margin: "0 auto",
          position: "relative",
          borderRadius: "28px",
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
          border: "1px solid rgba(255,255,255,0.6)",
        }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* ⭐ Bismillah Image Animation */}
        <motion.img
          src="/bismillah.png"
          alt="Bismillah"
          style={{
            marginTop: "40px",
            width: "40%",
            maxWidth: "240px",
            margin: "20px auto 0",
            display: "block",
            zIndex: 5,
            position: "relative",
            filter: "drop-shadow(0 4px 12px rgba(255, 215, 150, 0.4))",
          }}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: -20, scale: 0.95 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* 🌟 PARALLAX + LOOPING ZOOM BACKGROUND */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/backgroundwebsite.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* ✨ Glitter Layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 3 }}>
          <GlitterDrop active={true} />
        </div>

        {/* 🌟 MAIN TEXT — reacts to scroll */}
        <motion.div
          animate={controls}
          style={{
            position: "absolute",
            zIndex: 4,
            top: "32%",
            width: "100%",
            textAlign: "center",
            padding: "0 20px",
          }}
        >

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              fontFamily: "Cinzel",
              letterSpacing: "0.18em",
              fontSize: "0.75rem",
              color: "#d4af37",
              textShadow: "0 0 8px rgba(212,175,55,0.35)",
            }}
          >
            UNDANGAN MAJLIS PERTUNANGAN
          </motion.p>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.1 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "3.7rem",
              lineHeight: "1.2",
              color: "#d8ac1dff",
              textShadow: `
                0 0 0px rgba(212,175,55,0.6),
                2px 2px 5px rgba(0,0,0,0.45)
              `,
            }}
          >
            Farah &<br />Ameerul
          </motion.h1>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
            style={{
              fontFamily: "Montserrat",
              marginTop: "14px",
              fontSize: "1rem",
              color: "#ebab22e8",
              textShadow: `
               
                0.5px rgba(0,0,0,0.35)
              `,
            }}
          >
            28 • 12 • 2025 <br /> Pasir Mas, Kelantan
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
