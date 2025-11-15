// Modal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          {/* MODAL BOX */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              width: "85%",
              maxHeight: "75%",
              borderRadius: "20px",
              padding: "20px",
              overflowY: "auto",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          >
            {children}

            <button
              onClick={onClose}
              style={{
                marginTop: "16px",
                width: "100%",
                borderRadius: "12px",
                padding: "10px 0",
                background: "#d8c3c3",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
