// src/components/ContactModal.jsx
import React from "react";
import Modal from "./Modal.jsx";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactModal({ open, onClose }) {
  const contacts = [
    { name: "Ameerul", phone: "0173506059", whatsapp: "0173506059" },
    { name: "Farah", phone: "01164344832", whatsapp: "01164344832" },
    { name: "Puan Niza", phone: "01163252626", whatsapp: "01163252626" },
    { name: "Encik Amran", phone: "0127172145", whatsapp: "0127172145" },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <h2
        className="cinzel"
        style={{ textAlign: "center", marginBottom: "16px" }}
      >
        Hubungi
      </h2>

      <div style={{ padding: "10px 0" }}>
        {contacts.map((c, i) => (
          <div
            key={i}
            style={{
              marginBottom: "14px",
              padding: "14px 16px",
              borderRadius: "14px",
              background: "rgba(245,245,245,0.95)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Contact Info */}
            <div>
              <strong>{c.name}</strong>
              <br />
              <span style={{ fontSize: "0.9rem", color: "#555" }}>{c.phone}</span>
            </div>

            {/* ICON BUTTONS */}
            <div style={{ display: "flex", gap: "10px" }}>

              {/* CALL BUTTON */}
             <motion.a
    whileTap={{ scale: 0.88 }}
    whileHover={{ scale: 1.12 }}
    href={`tel:${c.phone}`}
    style={{
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: "linear-gradient(145deg, #f4e9ef, #e8d4de)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      position: "relative",
      overflow: "hidden",
      transition: "0.3s ease-in-out",
    }}
  >
    {/* Shine highlight */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0))",
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />

    <Phone size={20} color="#5a4a4a" />
  </motion.a>

              {/* WHATSAPP BUTTON (REAL ICON) */}
              <motion.a
    whileTap={{ scale: 0.88 }}
    whileHover={{ scale: 1.12 }}
    href={`https://wa.me/${c.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: "linear-gradient(145deg, #2fe46c, #1fc557)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
      position: "relative",
      overflow: "hidden",
      transition: "0.3s ease",
    }}
  >
    {/* Shine highlight */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0))",
        opacity: 0.8,
        pointerEvents: "none",
      }}
    />

    {/* REAL WHATSAPP LOGO */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="white"
    >
      <path d="M16.027 3.003c-7.155 0-12.974 5.819-12.974 12.974 0 2.285.597 4.516 1.734 6.484L3 29l6.699-2.205c1.88.984 3.994 1.503 6.328 1.503h.001c7.155 0 12.973-5.819 12.973-12.974 0-3.46-1.347-6.713-3.793-9.159s-5.699-3.956-9.161-3.956zm0 23.71c-1.99 0-3.938-.53-5.639-1.529l-.404-.239-3.977 1.31 1.311-3.868-.263-.416c-1.067-1.688-1.63-3.632-1.63-5.635 0-5.822 4.736-10.558 10.559-10.558 2.82 0 5.47 1.1 7.466 3.096 1.997 1.996 3.096 4.646 3.096 7.466 0 5.823-4.736 10.558-10.559 10.558zm5.852-7.927c-.319-.159-1.883-.93-2.176-1.037-.293-.106-.506-.159-.718.159-.213.319-.823 1.037-1.009 1.25-.186.212-.373.239-.692.079-.319-.159-1.348-.497-2.569-1.584-.95-.848-1.59-1.894-1.775-2.212-.186-.319-.02-.49.14-.649.144-.143.319-.373.479-.559.159-.186.212-.319.319-.532.106-.212.53-.853-.053-.559-.08-.159-.718-1.732-.984-2.372-.259-.622-.522-.538-.718-.547l-.614-.01c-.212 0-.559.08-.852.399s-1.118 1.092-1.118 2.665 1.144 3.089 1.303 3.303c.159.212 2.251 3.434 5.446 4.81.762.328 1.356.524 1.819.67.764.243 1.459.209 2.009.127.613-.091 1.883-.769 2.149-1.512.266-.744.266-1.382.187-1.512-.079-.132-.292-.212-.611-.372z" />
    </svg>
  </motion.a>

            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
