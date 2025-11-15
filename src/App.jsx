// App.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "./components/HeroSection.jsx";
import Countdown from "./components/Countdown.jsx";
import RSVPForm from "./components/RSVPForm.jsx";
import Wishes from "./components/Wishes.jsx";
import BackgroundMusicVideo from "./components/BackgroundMusicVideo.jsx";
import IntroScreen from "./components/IntroScreen.jsx";

export default function App() {
  /* =====================================================
     FIXED MOBILE 390×844 AUTO-SCALING
  ===================================================== */
useEffect(() => {
    function resize() {
      const baseWidth = 390;
      const baseHeight = 844;

      // iOS Safari viewport fix
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate scale based on whichever side is smaller
      const scale = Math.min(
        viewportWidth / baseWidth,
        viewportHeight / baseHeight
      );

      document.documentElement.style.setProperty("--scale-factor", scale);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
    };
  }, []);

  /* =====================================================
     RSVP STATE (LOCAL SAFE)
  ===================================================== */
  const [rsvps, setRsvps] = useState(() => {
    try {
      const saved = localStorage.getItem("wedding_rsvps");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("wedding_rsvps", JSON.stringify(rsvps));
    } catch {}
  }, [rsvps]);

  const handleRsvpSubmit = (entry) => {
    setRsvps((prev) => [...prev, entry]);
  };

  /* =====================================================
     INTRO SCREEN + MUSIC TRIGGER
  ===================================================== */
  const [isOpened, setIsOpened] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

  const openInvitation = () => {
    setIsOpened(true);
    setPlayAudio(true);
  };

  /* =====================================================
     MAIN LAYOUT (LOCKED to MOBILE VIEW)
  ===================================================== */
  return (
    <div className="fixed-viewport-wrapper">
      <div className="fixed-viewport">
        
        {/* Background music (hidden video) */}
        <BackgroundMusicVideo playAudio={playAudio} />

        {/* Animated screen transitions */}
        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* INTRO SCREEN (Zoom out on exit) */
            <motion.div
              key="intro"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: "390px",
                height: "844px",
                overflow: "hidden",
              }}
            >
              <IntroScreen onOpen={openInvitation} />
            </motion.div>
          ) : (
            /* MAIN CARD (Zoom in) */
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: "390px",
                height: "844px",
                overflowY: "auto",
                padding: "16px",
                position: "relative",
              }}
            >
              {/* HERO */}
              <HeroSection />

              {/* COUNTDOWN */}
              <div style={{ marginTop: "24px" }}>
                <Countdown targetDate="2025-12-28T08:00:00" />
              </div>

              {/* RSVP */}
              <div style={{ marginTop: "32px" }}>
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  RSVP
                </h2>
                <RSVPForm onSubmit={handleRsvpSubmit} />
              </div>

              {/* WISHES */}
              <div style={{ marginTop: "32px" }}>
                <h2
                  style={{
                    textAlign: "center",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  UCAPAN
                </h2>
                <Wishes />
              </div>

              <div style={{ height: "60px" }} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
