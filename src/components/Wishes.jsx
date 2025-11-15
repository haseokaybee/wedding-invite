import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

export default function Wishes({ showForm = true, showList = true }) {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  /* 🔥 REALTIME LISTENER */
  useEffect(() => {
    const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWishes(list);
    });

    return () => unsubscribe();
  }, []);

  /* 🔥 SUBMIT WISH */
  const submit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("Please write a message.");
      return;
    }

    await addDoc(collection(db, "wishes"), {
      name: name || "Guest",
      message,
      createdAt: serverTimestamp(),
    });

    setName("");
    setMessage("");

    setStatus("Ucapan sudah dihantar 💌");
    setTimeout(() => setStatus(""), 1500);
  };

  return (
    <motion.div
      className="wishes-root"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* =============================== FORM =============================== */}
      {showForm && (
        <form onSubmit={submit}>
          <label>Nama</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
          />

          <label>Ucapan Anda*</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Sila beri ucapan anda..."
          />

          <button type="submit" className="primary-button">
            Hantar 💌
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      )}

      {/* =============================== LIST =============================== */}
      {showList && (
        <div className="wishes-list">
          <AnimatePresence>
            {wishes.map((w) => (
              <motion.div
                key={w.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="wish-card"
              >
                <p className="wish-message" style={{ fontFamily: "Montserrat, serif" }}>  “{w.message}”
</p>
                <p className="wish-name" style={{ fontFamily: "Cinzel, serif" }}>  – {w.name}
</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
