import React, { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    guests: 1,
    message: "",
  });

  const [status, setStatus] = useState("");

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({
      ...f,
      [name]: name === "guests" ? Number(value) : value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    const entry = {
      ...form,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    onSubmit(entry);

    setForm({
      name: "",
      attending: "yes",
      guests: 1,
      message: "",
    });

    setStatus("Thank you for your RSVP! 💗");
    setTimeout(() => setStatus(""), 3000);
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
      <textarea
        name="message"
        value={form.message}
        onChange={update}
      />

      <button type="submit" className="primary-button">
        Submit
      </button>

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
