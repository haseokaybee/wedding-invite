// App.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "./components/HeroSection.jsx";
import Countdown from "./components/Countdown.jsx";
import RSVPForm from "./components/RSVPForm.jsx";
import Wishes from "./components/Wishes.jsx";
import BackgroundMusicVideo from "./components/BackgroundMusicVideo.jsx";
import IntroScreen from "./components/IntroScreen.jsx";
import InvitationText from "./components/InvitationText.jsx";
import BottomMenu from "./components/BottomMenu.jsx";
import Modal from "./components/Modal.jsx";

export default function App() {
  /* =====================================================
     FIXED MOBILE 390×844 AUTO-SCALING (SAFE FOR iPHONE)
  ===================================================== */
  useEffect(() => {
    function resize() {
      const baseWidth = 390;
      const baseHeight = 844;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

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
     MODAL STATES
  ===================================================== */
  const [openRSVP, setOpenRSVP] = useState(false);
  const [openWishes, setOpenWishes] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

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
     INTRO + MUSIC
  ===================================================== */
  const [isOpened, setIsOpened] = useState(false);
  const [playAudio, setPlayAudio] = useState(false);

  const openInvitation = () => {
    setIsOpened(true);
    setPlayAudio(true);
  };

/* =====================================================
   MAIN LAYOUT
===================================================== */
return (
  <div className="fixed-viewport-wrapper">
    <div className="fixed-viewport">

      {/* BACKGROUND MUSIC */}
      <BackgroundMusicVideo playAudio={playAudio} />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          /* ================= INTRO SCREEN ================= */
          <motion.div
            key="intro"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.25 }}
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
          /* ================= MAIN CONTENT ================= */
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: "100%",
              maxWidth: "430px",
              minHeight: "844px",
              overflowY: "auto",
              padding: "0",
              position: "relative",
            }}
          >
            {/* HERO */}
            <HeroSection />

            {/* SALAM IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "1px",
                marginBottom: "1px",
              }}
            >
              <img
                src="/salam.png"
                alt="Assalamualaikum"
                style={{
                  width: "90%",
                  maxWidth: "200px",
                  opacity: 0.95,
                }}
              />
            </motion.div>

            {/* INVITATION PARAGRAPH */}
            <InvitationText />

            {/* COUNTDOWN + TITLE */}
            <div style={{ marginTop: "28px", textAlign: "center" }}>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.25rem",
                  letterSpacing: "0.06em",
                  marginBottom: "12px",
                  color: "#6d5959",
                }}
              >
                MENGHITUNG HARI
              </motion.h2>

              <Countdown targetDate="2025-12-28T08:00:00" />
            </div>

            {/* ⭐ UCAPAN LIST BELOW COUNTDOWN (view only, no form) */}
            <div style={{ marginTop: "32px" }}>
              <h2
                style={{
                  textAlign: "center",
                  fontFamily: "'Cinzel', serif",
                  letterSpacing: "0.04em",
                }}
              >
                Ucapan
              </h2>

              <Wishes showForm={false} />
            </div>

            {/* spacing before bottom menu */}
            <div style={{ height: "80px" }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
         MODALS
      ===================================================== */}
      <Modal open={openRSVP} onClose={() => setOpenRSVP(false)}>
        <h2 className="cinzel" style={{ textAlign: "center" }}>RSVP</h2>
        <RSVPForm onSubmit={handleRsvpSubmit} />
      </Modal>

<Modal open={openWishes} onClose={() => setOpenWishes(false)}>
  <h2 className="cinzel" style={{ textAlign: "center" }}>Ucapan</h2>

  {/* ONLY SHOW THE ENTRY FORM INSIDE MODAL */}
  <Wishes showForm={true} showList={false} />
</Modal>

     <Modal open={openLocation} onClose={() => setOpenLocation(false)}>
  <h2 className="cinzel" style={{ textAlign: "center" }}>Lokasi</h2>

  <p style={{ textAlign: "center", marginTop: "10px" }}>
    Tekan butang di bawah untuk membuka lokasi majlis.
  </p>

  <a
    href="https://www.google.com/maps?daddr=6.004869,102.098801&saddr"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "block",
      margin: "20px auto",
      width: "80%",
      padding: "12px",
      textAlign: "center",
      background: "linear-gradient(135deg, #d58fa6, #f2a4bf)",
      color: "white",
      borderRadius: "12px",
      textDecoration: "none",
      fontWeight: "600"
    }}
  >
    📍 Buka Google Maps
  </a>
</Modal>

      {/* =====================================================
         BOTTOM MENU (only after card opened)
      ===================================================== */}
      {isOpened && (
        <BottomMenu
          onOpenRSVP={() => setOpenRSVP(true)}
          onOpenWishes={() => setOpenWishes(true)}
          onOpenLocation={() => setOpenLocation(true)}
        />
      )}

    </div>
  </div>
);


}
        

