import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    guests: 1,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    setLoading(true);
    setStatus("");

  const endpoint =
  "https://script.google.com/macros/s/AKfycbzwFXI9UBvFCnepBHsog3zQPtSlZHVORBB7yugHZhHH43AAqPytIeiFuHZ9QcZjk6eY/exec";


    try {
      const response = await fetch(endpoint, {
        method: "POST",
        mode: "no-cors", // ⭐ Required for Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          attending: form.attending,
          pax: form.guests,
          message: form.message,
          userAgent: navigator.userAgent,
        }),
      });

      // ⭐ Because "no-cors" returns opaque response, we assume success
      setStatus("Thank you! Your RSVP has been recorded 💗");

      // Reset form
      setForm({
        name: "",
        attending: "yes",
        guests: 1,
        message: "",
      });
    } catch (err) {
      console.error("RSVP Submit Error:", err);
      setStatus("Network error. Please try again.");
    }

    setLoading(false);
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ marginTop: "10px" }}
    >
      <label>Name*</label>
      <input name="name" value={form.name} onChange={update} required />

      <label>Attendance</label>
      <select name="attending" value={form.attending} onChange={update}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="maybe">Maybe</option>
      </select>

      <label>Number of guests</label>
      <input
        type="number"
        name="guests"
        min="1"
        value={form.guests}
        onChange={update}
      />

      <label>Message</label>
      <textarea name="message" value={form.message} onChange={update} />

      <motion.button
        type="submit"
        className="primary-button"
        disabled={loading}
        whileTap={{ scale: loading ? 1 : 0.9 }}
        style={{
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </motion.button>

      {status && (
        <motion.p
          className="form-status"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {status}
        </motion.p>
      )}
    </motion.form>
  );
}
