// Modal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        // 🟣 BACKDROP (overlay)
        <motion.div
          onClick={onClose} // ⭐ clicking outside closes modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // ⭐ CENTER POP-UP, not bottom
            zIndex: 9999,
          }}
        >
          {/* 🟣 MODAL BOX (CENTER CARD) */}
          <motion.div
            onClick={(e) => e.stopPropagation()} // ⭐ prevent inside click from closing
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              background: "white",
              borderRadius: "22px",
              width: "90%",
              maxWidth: "380px",
              padding: "24px",
              paddingTop: "50px", // ⭐ space for close button
              position: "relative",
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
            }}
          >
            {/* 🟣 PREMIUM CLOSE BUTTON */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "12px",
                right: "18px",
                background: "none",
                border: "none",
                fontSize: "1.8rem",
                color: "#7a5c5c",
                cursor: "pointer",
                lineHeight: 0,
              }}
            >
              ×
            </button>

            {/* CONTENT */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
