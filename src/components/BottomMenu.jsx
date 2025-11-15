// BottomMenu.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Mail } from "lucide-react";

export default function BottomMenu({ onOpenRSVP, onOpenWishes }) {
  const openMap = () => {
    window.open(
      "https://www.google.com/maps?daddr=6.004869,102.098801&saddr",
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        position: "fixed",                 // ⭐ Fixed to screen
        bottom: "20px",                    // Lift above screen bottom
        left: "50%",                       // ⭐ Perfect center horizontally
        transform: "translateX(-50%)",

        width: "92%",                      // ⭐ Wider menu
        maxWidth: "430px",                 // fits iPhone Pro Max beautifully

        background: "rgba(255, 255, 255, 0.55)", // ⭐ Transparent glass
        backdropFilter: "blur(12px)",

        padding: "16px 24px",
        borderRadius: "26px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.12)",

        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* RSVP */}
      <button onClick={onOpenRSVP} style={btnStyle}>
        <Mail size={22} color="#5a4a4a" />
        <span style={labelStyle}>RSVP</span>
      </button>

      {/* Ucapan */}
      <button onClick={onOpenWishes} style={btnStyle}>
        <Heart size={22} color="#c94a6a" />
        <span style={labelStyle}>Ucapan</span>
      </button>

      {/* Location */}
      <button onClick={openMap} style={btnStyle}>
        <MapPin size={22} color="#5a4a4a" />
        <span style={labelStyle}>Lokasi</span>
      </button>
    </motion.div>
  );
}

const btnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "transparent",  // transparent button
  border: "none",
  cursor: "pointer",
};

const labelStyle = {
  fontSize: "0.76rem",
  fontWeight: 600,
  marginTop: "4px",
  color: "#5a4a4a",
};
