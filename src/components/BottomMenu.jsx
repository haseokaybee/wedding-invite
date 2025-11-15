// BottomMenu.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Mail } from "lucide-react";

export default function BottomMenu({ onOpenRSVP, onOpenWishes }) {
  const openMap = () => {
    window.open(
      "https://www.google.com/maps?q=Your+Location+Here",
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        position: "absolute",
        bottom: "12px",
        left: "4%",
        transform: "translateX(-50%)",

        width: "92%",
        maxWidth: "360px",

        background: "rgba(255, 255, 255, 0.60)",
        backdropFilter: "blur(12px)",
        padding: "14px 18px",

        borderRadius: "26px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.12)",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* RSVP */}
      <button onClick={onOpenRSVP} style={btnStyle}>
        <Mail size={20} color="#333" />
        <span style={labelStyle}>RSVP</span>
      </button>

      {/* Wishes */}
      <button onClick={onOpenWishes} style={btnStyle}>
        <Heart size={20} color="#c94a6a" />
        <span style={labelStyle}>Ucapan</span>
      </button>

      {/* Location → opens Google Maps */}
      <button onClick={openMap} style={btnStyle}>
        <MapPin size={20} color="#333" />
        <span style={labelStyle}>Lokasi</span>
      </button>
    </motion.div>
  );
}

const btnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "transparent",
  border: "none",
  cursor: "pointer",
};

const labelStyle = {
  fontSize: "0.72rem",
  fontWeight: 600,
  marginTop: "4px",
  color: "#333",
};
