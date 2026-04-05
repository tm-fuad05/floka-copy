"use client";

import React from "react";
import MouseFollow from "@/animation/MouseFollow";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen py-20 px-4 font-sans text-[#111]">
      {/* --- Section 2: Portfolio Grid --- */}
      <p className="text-xs font-bold uppercase tracking-widest text-gray-700 pb-2">
        Portfolio
      </p>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.4 } },
        }}
        viewport={{ once: false }}
        className="flex justify-between items-end mb-16 border-t border-gray-200"
      >
        <div className="w-1/2"></div>

        <div className="pt-10">
          {["Strategy to build powerful", "digital solutions."].map((t) => (
            <motion.h2
              variants={{
                hidden: { opacity: 0, x: 50 }, //initial
                show: {
                  opacity: 1,
                  x: 0,

                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                    // type: "spring",
                    // damping: 10,
                  },
                }, //final
              }}
              className="text-5xl font-medium tracking-tighter leading-tight pr-30"
            >
              {t}
            </motion.h2>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Row 1 */}
        <PortfolioItem img="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000" />
        <PortfolioItem img="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1000" />

        {/* Full Width Row */}
        <div className="md:col-span-2">
          <PortfolioItem
            img="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1500"
            height="h-[600px]"
          />
        </div>

        {/* Row 3 */}
        <PortfolioItem img="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000" />
        <PortfolioItem img="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000" />
      </div>
    </div>
  );
}

function PortfolioItem({
  img,
  height = "h-[450px]",
}: {
  img: string;
  height?: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`w-full ${height} rounded-[2rem] overflow-hidden bg-gray-200 mb-6`}
      >
        <MouseFollow intensity={35} className="w-full h-full">
          <img
            src={img}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </MouseFollow>
      </div>
      <div className="flex justify-between items-center px-4 bg-white rounded-xl py-4">
        <h5 className="text-md uppercase tracking-widest">Alpan Branding</h5>
        <span className="text-gray-400 text-md">2025</span>
      </div>
    </div>
  );
}
