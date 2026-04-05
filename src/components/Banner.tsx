"use client";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
export default function Banner() {
  return (
    <div className="relative px-4 mt-18">
      {/* Banner Video */}
      <video
        src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
        className="w-full min-h-screen rounded-2xl "
        autoPlay
        muted
        loop
      />
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute z-20 bottom-8 px-8 flex justify-between gap-60"
      >
        {/* Left */}
        <div className="flex flex-col text-right leading-[0.95]">
          <h1 className="text-[220px] text-white">Floka</h1>
          <h3 className="text-gray-400/50 text-7xl">Studio</h3>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-8">
          {/* Card */}
          <div className="flex gap-5 bg-white rounded-2xl p-3 w-fit pr-30">
            <img
              src="/banner-img.jpg"
              alt=""
              className="object-cover rounded-2xl w-35"
            />
            <div className="flex flex-col py-3">
              {/* Name */}
              <div className="grow">
                <p className="text-gray-400 text-md uppercase">head of idea</p>
                <h5 className="text-black font-medium text-xl">
                  Almond D. Nelsi
                </h5>
              </div>
              {/* Button */}
              <button className="flex items-center gap-4 group cursor-pointer">
                <BiPlus className="bg-black p-2 text-white text-4xl rounded-full group-hover:rotate-180 duration-500" />
                <p>LET'S TALK</p>
              </button>
            </div>
          </div>
          {/* Text  */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl text-white"
          >
            No cookie-cutter websites. No fluff.
            <span className="opacity-50">
              <br /> Just real tools and smart strategies to grow your business
              and elevate your brand.{" "}
            </span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
