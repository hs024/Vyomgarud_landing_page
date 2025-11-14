import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const drone_imgs = [
    "./herodrone.mp4",
    "./drone1.jpg",
    "./drone6.jpg",
    "./drone7.webp",
    "./herodrone2.mp4",
    "./drone4.jpg",
  ];

  const bg_video =
    "https://cdn.growth.onomondo.com/app/uploads/2023/05/09133010/splash_video_03.mp4";

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % drone_imgs.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);


  return (
    <section
      id="hero"
      className="relative min-h-[100vh] w-full flex items-center overflow-hidden"
    >
      {/* BACKGROUND VIDEO */}
      <video
        src={bg_video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div
        className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col 
        lg:flex-row items-center justify-between w-full gap-16"
      >
        {/* LEFT */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white"
          >
            VyomGarud
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-5 text-gray-300 max-w-lg text-lg md:text-xl mx-auto lg:mx-0"
          >
            Military-grade UAV systems engineered for precision, endurance,
            autonomous intelligence, and field-proven reliability.
          </motion.p>

          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <a
              href="#capabilities"
              className="px-8 py-3 rounded-md bg-vyomOrange text-black font-semibold"
            >
              Explore Capabilities
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-md border border-white/30 text-white"
            >
              Request Demo
            </a>
          </div>
        </div>

        {/* RIGHT — LARGE DRONE SLIDESHOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 relative w-full"
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl border border-white/30 overflow-hidden bg-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <AnimatePresence mode="wait">
              {drone_imgs[index].endsWith(".mp4") ? (
                <motion.video
                  key={drone_imgs[index]}
                  src={drone_imgs[index]}
                  autoPlay
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <motion.img
                  key={drone_imgs[index]}
                  src={drone_imgs[index]}
                  alt="Drone"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
