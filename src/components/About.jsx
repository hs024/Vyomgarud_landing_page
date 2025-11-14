import React from "react";
import { motion } from "framer-motion";
import { MdMilitaryTech ,MdOutlineFlightTakeoff} from "react-icons/md";

export default function About() {
  const video_url = "./Drone_video.mp4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row gap-10 items-start"
    >
      {/* LEFT — ABOUT TEXT */}
      <div className="flex-1 space-y-6">
        <div>
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <MdMilitaryTech className="text-orange-500 text-3xl" />
            About VyomGarud
          </h2>

          <p className="mt-3 text-gray-300 leading-relaxed max-w-prose">
            VyomGarud delivers hardened UAV platforms and autonomy stacks built
            for mission-critical operations. Our systems integrate
            aerospace-grade hardware, redundant flight control, and adaptive
            autonomy to maintain performance in GPS-denied and contested
            environments.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 card-glass p-6 sm:p-8 rounded-xl border border-white/10"
          style={{ backdropFilter: "blur(8px)" }}
        >
          {" "}
          <div className="flex items-center gap-2 mb-2">
            {" "}
            <MdOutlineFlightTakeoff className="text-orange-500 text-2xl" />{" "}
            <h3 className="font-semibold text-xl">Mission</h3>{" "}
          </div>{" "}
          <p className="mt-1 text-gray-300 text-sm leading-relaxed">
            {" "}
            Design and deploy resilient unmanned systems that extend situational
            awareness, support precision logistics, and reduce operator workload
            through robust autonomy and secure communication layers.{" "}
          </p>{" "}
        </motion.div>
      </div>

      {/* RIGHT — VIDEO BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/3 rounded-xl overflow-hidden border border-white/10 shadow-lg"
      >
        <video
          src={video_url}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
