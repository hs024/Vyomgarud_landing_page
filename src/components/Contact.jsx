import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("contact submit", form);
    setSent(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card-glass p-8 rounded-xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-semibold"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-gray-400 mt-2"
      >
        Request a demo or reach our sales engineering team.
      </motion.p>

      {!sent ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 grid grid-cols-1 gap-4"
        >
          {["name", "email"].map((field, i) => (
            <motion.input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field === "name" ? "Name" : "Email"}
              className="p-3 rounded-md bg-transparent border border-white/10
                         focus:border-vyomOrange/70 outline-none transition"
              whileFocus={{ scale: 1.015 }}
            />
          ))}

          <motion.textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="p-3 rounded-md bg-transparent border border-white/10
                       focus:border-vyomOrange/70 outline-none transition"
            whileFocus={{ scale: 1.015 }}
          />

          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="px-4 py-2 rounded-md bg-vyomOrange text-black font-semibold"
            >
              Send
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              className="px-4 py-2 rounded-md border border-white/10"
              onClick={() => setForm({ name: "", email: "", message: "" })}
            >
              Reset
            </motion.button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="mt-6 text-green-400 font-medium"
        >
          Thanks — we'll reach out within 1–2 business days.
        </motion.div>
      )}
    </motion.div>
  );
}
