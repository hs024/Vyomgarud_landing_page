import React from "react";
import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-t border-white/10 mt-16 py-8"
    >
      <div
        className="
        max-w-6xl mx-auto px-6 
        flex flex-col md:flex-row 
        items-start md:items-center 
        justify-between 
        gap-6
      "
      >
        {/* Brand + Tagline + Links */}
        <div className="flex flex-col gap-4 w-full">
          <div>
            <div className="text-lg sm:text-xl font-semibold tracking-wide text-white">
              VyomGarud
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              A UAV / Drone Systems Company · Military-Grade Engineering
            </div>
          </div>

          <div
            className="
            flex flex-wrap 
            gap-x-4 gap-y-2 
            text-sm text-gray-400
          "
          >
            <a href="#">Privacy </a>
            <a href="#">Terms </a>
            <a href="#">Career</a>
            <a href="#contact" className="text-vyomOrange">
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {[FiTwitter, FiLinkedin, FiGithub].map((Icon, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.15 }}
              className="
                p-2 sm:p-3
                border border-white/15 
                rounded-full 
                text-gray-300 
                hover:border-vyomOrange 
                hover:text-vyomOrange 
                transition
              "
              href="#"
            >
              <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
            </motion.a>
          ))}
        </div>
      </div>

      <div
        className="
        max-w-6xl mx-auto px-6 
        flex flex-col md:flex-row 
        items-center justify-between 
        border-t border-white/10 mt-8 pt-4
      "
      >
        <div className="text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} VyomGarud · All rights reserved
        </div>
      </div>
    </motion.footer>
  );
}
