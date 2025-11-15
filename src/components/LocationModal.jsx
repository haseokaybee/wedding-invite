// LocationModal.jsx
import React from "react";
import { motion } from "framer-motion";
import Modal from "./Modal.jsx";
import { MapPin } from "lucide-react";

export default function LocationModal({ open, onClose }) {
  const googleMap = "https://www.google.com/maps?daddr=6.004869,102.098801&saddr";
  const waze = "https://waze.com/ul?ll=6.004869%2C102.098801&navigate=yes";

  return (
    <Modal open={open} onClose={onClose}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <h2
          className="cinzel"
          style={{
            fontSize: "1.3rem",
            letterSpacing: "0.04em",
            color: "#6d5757",
            marginBottom: "4px",
          }}
        >
          LOKASI MAJLIS
        </h2>

        {/* Gold Accent Divider */}
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "linear-gradient(90deg, #d8bfa4, #f6e7d2, #d8bfa4)",
            margin: "0 auto 14px auto",
            borderRadius: "4px",
          }}
        />
      </div>

     

      {/* Address */}
      <p
        style={{
          textAlign: "center",
          fontSize: "0.98rem",
          color: "#5f4b4b",
          lineHeight: "1.55",
          marginBottom: "22px",
          padding: "0 12px",
          fontWeight: 500,
        }}
      >
        Lot Pt 9766 Kampung Pusu 40 
        <br />
        17070 Pasir Mas, Kelantan
      </p>

      {/* Buttons Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          marginTop: "10px",
        }}
      >
        {/* GOOGLE MAPS */}
        <motion.a
          href={googleMap}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          style={{
            flex: 1,
            padding: "12px 0",
            background: "linear-gradient(135deg, #e7b9c8, #d498b0)",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          Google Maps
        </motion.a>

        {/* WAZE */}
        <motion.a
          href={waze}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          style={{
            flex: 1,
            padding: "12px 0",
            background: "linear-gradient(135deg, #3aa7ff, #1d8bff)",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
          }}
        >
          Waze
        </motion.a>
      </div>
    </Modal>
  );
}
