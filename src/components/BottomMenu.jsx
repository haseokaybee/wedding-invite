// BottomMenu.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, MapPin, Mail, Phone } from "lucide-react";

export default function BottomMenu({
  onOpenRSVP,
  onOpenWishes,
  onOpenContact,
  onOpenLocation
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{
        position: "absolute",     // stays relative to your 390px viewport
        bottom: "20px",
        left: "4%",              // ⭐ FULL CENTER
        transform: "translateX(-50%)",

        width: "92%",
        maxWidth: "430px",

        background: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",

        padding: "16px 20px",
        borderRadius: "26px",
        boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
        marginBottom: "10px",

        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* RSVP */}
      <motion.button
        onClick={onOpenRSVP}
        style={btnStyle}
        whileTap={{ scale: 0.88 }}
      >
        <Mail size={22} color="#5a4a4a" />
        <span style={labelStyle}>RSVP</span>
      </motion.button>

      {/* Ucapan */}
      <motion.button
        onClick={onOpenWishes}
        style={btnStyle}
        whileTap={{ scale: 0.88 }}
      >
        <Heart size={22} color="#c94a6a" />
        <span style={labelStyle}>Ucapan</span>
      </motion.button>

      {/* Lokasi — ⭐ NOW OPENS MODAL INSTEAD OF LINK */}
      <motion.button
        onClick={onOpenLocation}
        style={btnStyle}
        whileTap={{ scale: 0.88 }}
      >
        <MapPin size={22} color="#5a4a4a" />
        <span style={labelStyle}>Lokasi</span>
      </motion.button>

      {/* Contact */}
      <motion.button
        onClick={onOpenContact}
        style={btnStyle}
        whileTap={{ scale: 0.88 }}
      >
        <Phone size={22} color="#5a4a4a" />
        <span style={labelStyle}>Hubungi</span>
      </motion.button>
    </motion.div>
  );
}

// Styles
const btnStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "6px 12px",
  borderRadius: "12px",
};

const labelStyle = {
  fontSize: "0.76rem",
  fontWeight: 600,
  marginTop: "4px",
  color: "#5a4a4a",
};
