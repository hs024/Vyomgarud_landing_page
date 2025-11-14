import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiCpu, FiAnchor } from "react-icons/fi";

export default function Highlights() {
  const items = [
    {
      title: "Ruggedized",
      icon: FiAnchor,
      text: "MIL-grade components for extended lifecycle and high G-tolerance.",
    },
    {
      title: "Autonomous",
      icon: FiCpu,
      text: "Edge autonomy minimizes operator load and enables resilient mission execution.",
    },
    {
      title: "Secure",
      icon: FiShield,
      text: "Layered encryption and hardened communications for contested environments.",
    },
  ];

  const stats = [
    { number: "158230+", label: "KMS OF FLIGHT" },
    { number: "1870+", label: "UAVs MANUFACTURED" },
    { number: "25+", label: "ONGOING PROJECTS" },
  ];

  return (
    <div className="flex flex-col gap-8 mt-0">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <div className="text-gray-400 tracking-wide text-sm">
          OUR CORE VALUE
        </div>

        <h1 className="text-5xl font-bold mt-3">
          प्रत्यक्षम{" "}
          <span
            className="font-bold bg-gradient-to-r from-white via-blue-400 to-blue-700
                       bg-clip-text text-transparent animate-[gradientmove_4s_infinite]"
          >
            किम प्रमाणं
          </span>
        </h1>

        <p className="text-gray-300 text-xl mt-3">
          What’s self-evident needs no proof
        </p>
      </motion.div>

      {/* HIGHLIGHTS (3 CARDS) */}
   
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold">Highlights</h2>
        <p className="text-gray-400 text-base">
          Three core differentiators that define VyomGarud.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.06 }}
                className="card-glass p-8 rounded-xl border border-white/10
                           bg-white/5 hover:border-blue-400/40 transition"
              >
                <Icon className="text-blue-300" size={36} />
                <h3 className="font-semibold mt-4 text-xl">{it.title}</h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {it.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

     
      

      {/* KEYFRAMES */}
      <style>{`
        @keyframes gradientmove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
