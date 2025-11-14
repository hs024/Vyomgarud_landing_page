import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DATA = [
  {
    title: "Endurance Platforms",
    subtitle: "Long-duration fixed-wing and hybrid VTOL",
    bullets: [">24h endurance", "Resilient comms", "Payload agnostic"],
    src: "../assets/EndurancePlatforms.png",
  },
  {
    title: "Autonomy Stack",
    subtitle: "Adaptive navigation & swarm ops",
    bullets: ["Onboard perception", "Failover routing", "Mission planner API"],
    src: "../assets/AutonomyStack.png",
  },
  {
    title: "Payloads & Sensors",
    subtitle: "EO/IR, LiDAR, SIGINT payloads",
    bullets: ["Stabilized gimbals", "Modular mounts", "Secure data links"],
    src: "../assets/Payloads&Sensors.png",
  },
  {
    title: "Logistics & Comm Relay",
    subtitle: "Payload delivery and network extension",
    bullets: ["Precision drop", "Mesh relay", "Encrypted links"],
    src: "../assets/Realy.png",
  },
];

export default function Capabilities() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const next = () => setIndex((i) => (i + 1) % DATA.length);
  const prev = () => setIndex((i) => (i - 1 + DATA.length) % DATA.length);

  useEffect(() => {
    if (pause) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [pause, index]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart == null) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchEnd - touchStart > 60) prev();
    else if (touchEnd - touchStart < -60) next();
    setTouchStart(null);
  };

  return (
    <div
      className="relative w-full grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 px-4 sm:px-8 md:px-12 max-w-6xl mx-auto mb-0"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* LEFT SIDE HEADING SECTION */}
      <div className="flex flex-col  self-start">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold lg:mt-32">
          Capabilities & Products
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-2">
          Modular systems designed for military and critical infrastructure
          operators.
        </p>

        {/* DOT NAVIGATION (MOVED TO LEFT SIDE) */}
        <div className="flex flex-row gap-3 mt-6">
          {DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all ${
                i === index
                  ? "bg-orange-500 scale-110 shadow"
                  : "bg-gray-400/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE SLIDER */}
      <div
        className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[420px] md:min-h-[480px] transition-all"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="z-20 w-full flex justify-center"
          >
            <MainCard data={DATA[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function MainCard({ data }) {
  return (
    <div
      className="card-glass w-full rounded-xl border border-white/10 bg-white/5 
                 flex flex-col md:flex-row items-center md:items-stretch 
                 px-4 py-2 sm:px-5 sm:py-3 transition-all"
      style={{ backdropFilter: "blur(6px)" }}
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 flex flex-col justify-center md:pr-5">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {data.title}
        </h3>

        <p className="text-gray-400 mt-1 text-sm sm:text-base md:text-lg">
          {data.subtitle}
        </p>

        <ul className="mt-2 space-y-1 text-gray-300 text-xs sm:text-sm md:text-base">
          {data.bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-1">
              <span className="text-orange-500 text-base font-bold leading-none">•</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px]
                        h-[180px] sm:h-[230px] md:h-[310px] lg:h-[360px]
                        rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={data.src}
            alt={data.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

