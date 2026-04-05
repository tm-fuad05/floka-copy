"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { FiPlus } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AgencySection() {
  return (
    <section className="min-h-screen py-20 text-[#1a1a1a] px-4">
      {/* --- Top Header --- */}
      <div className="flex justify-between  gap-8 mb-20 items-start">
        <div className="flex flex-col gap-6">
          {/* Logo with Circular Text */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <path
                id="textPath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text className="text-[7.5px] font-medium tracking-[0.2em] text-gray-300/50 uppercase">
                <textPath href="#textPath" startOffset="0%">
                  Playful, Luxurious, or more / want it to sound
                </textPath>
              </text>
            </svg>
            <div className="relative z-10 w-12 h-12  rounded-lg flex items-center justify-center">
              {/* Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="40"
                viewBox="0 0 38 40"
                fill="none"
              >
                <g clip-path="url(#clip0_8_56)">
                  <path
                    d="M0.0298862 0.00585203C12.6835 -0.00396183 25.3318 0.00127223 37.9853 0.00127223C37.9998 3.9314 37.9657 7.86152 37.9998 11.7917C30.4526 11.8074 23.7841 11.8525 16.1963 11.8603C14.0595 11.8283 11.9555 11.615 10.8252 13.4502C9.66536 15.4915 10.1751 17.5229 10.2059 20.1917C10.2282 21.9739 9.01666 23.4643 7.35101 23.548C4.90889 23.6854 2.45694 23.5676 0.0141602 23.5774C0.034473 15.7218 0.000399872 7.86153 0.0298862 0.00585203Z"
                    fill="#0A0A0A"
                  ></path>
                  <path
                    d="M14.8696 19.264C15.0367 17.699 16.57 16.4081 18.1472 16.5213C22.059 16.5069 27.4701 16.5259 31.3866 16.5167C31.3669 20.4665 31.401 24.4163 31.3669 28.366C26.3791 28.3418 19.8967 28.3516 14.9142 28.3562C14.9338 32.2327 14.9044 36.1137 14.9384 39.9895C9.96048 39.9994 4.98253 40.0092 0.00458676 39.985C0.0340731 36.0647 0.0288311 32.1489 0 28.2338C3.77425 28.1998 7.55308 28.2581 11.3267 28.2044C13.0022 28.19 14.5898 26.8553 14.7615 25.1673C14.8939 23.2 14.6586 21.2222 14.8696 19.2646V19.264Z"
                    fill="#0A0A0A"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_8_56">
                    <rect width="38" height="40" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-gray-500 text-lg font-medium  leading-relaxed w-80">
            We design every project with long-term success in mind.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.4 } },
          }}
          viewport={{ once: false }}
        >
          {[
            "Our approach is straightforward—",
            "prioritizing functionality, speed, and",
            "clarity for solutions.",
          ].map((t) => (
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
              className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight text-[#111]"
            >
              {t}
            </motion.h2>
          ))}
        </motion.div>
      </div>

      {/* --- Bento Grid --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-9 gap-3"
      >
        {/* Card 1: Experience */}
        <motion.div
          variants={{ itemVariants }}
          className="lg:col-span-2 bg-white rounded-[2rem] p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center">
              <span className="text-9xl font-medium leading-none tracking-tighter">
                25
              </span>
              <FiPlus className="text-6xl text-gray-300 ml-1 mt-2" />
            </div>
            <p className="text-gray-400 text-sm mt-3 font-medium">
              Years of experience
            </p>
          </div>

          <div className="my-10 h-px w-full bg-gray-100" />

          <div>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">
              Explore how we transform ideas into extraordinary digital
              experiences.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/100?img=33"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <img
                  src="https://i.pravatar.cc/100?img=59"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <img
                  src="https://i.pravatar.cc/100?img=47"
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                />
              </div>
              <p className="text-lg font-medium text-[#111]">
                <CountUp start={100} end={1200} duration={2.75} separator="" />+
                happy users review
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Image & Quote */}
        <motion.div
          variants={{ itemVariants }}
          className="lg:col-span-5 bg-[#0a0a0a] rounded-[2rem] relative min-h-[450px] lg:min-h-full mt-16 lg:mt-0"
        >
          {/* Absolute Image Breaking Out */}
          <motion.div
            initial={{ opacity: 0.1, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 w-full h-[calc(100%+3rem)] overflow-visible pointer-events-none z-10 flex justify-start"
          >
            <img
              src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
              alt="CEO"
              className="h-full w-auto object-cover object-bottom"
            />
          </motion.div>

          {/* Badges (Top Right) */}
          <div className="absolute top-6 right-6 z-20 flex flex-col gap-4 text-white text-right">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                Ultra
              </span>
              <span className="text-xs font-semibold">Prestigious</span>
              <div className="flex gap-0.5 text-xs mt-1">★★★★★</div>
              <span className="text-[8px] uppercase tracking-wider text-gray-400">
                Winner
              </span>
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                Hyper
              </span>
              <span className="text-xs font-semibold">Best</span>
              <div className="flex gap-0.5 text-xs mt-1">★★★★★</div>
              <span className="text-[8px] uppercase tracking-wider text-gray-400">
                Award Winning
              </span>
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="absolute bottom-0 inset-x-0 p-8 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-b-[2rem]">
            <p className="text-white text-xl md:text-2xl font-medium leading-snug mb-6">
              " At Floka, we merge strategy, creativity, and technology to shape
              brands that people love. "
            </p>
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
              <span className="font-semibold text-white">Merizo H. Yelso</span>{" "}
              /CEO
            </div>
          </div>
        </motion.div>

        {/* Right Column Stack */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {/* Social Links Card */}
          <motion.div
            variants={{ itemVariants }}
            className="bg-white rounded-4xl p-8 flex-1 flex flex-col"
          >
            <div className="grow">
              <p className="text-gray-400 text-sm font-medium mb-1">
                Follow us
              </p>
              <h3 className="text-xl font-medium text-[#111] mb-6flex-1">
                For check updates
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map(
                (social) => (
                  <button
                    key={social}
                    className="px-4 py-2 rounded-full border border-gray-200 text-[11px] font-semibold text-gray-600 hover:border-gray-400 hover:text-black transition-all cursor-pointer tracking-wider"
                  >
                    {social}
                  </button>
                ),
              )}
            </div>
          </motion.div>

          {/* Progress Bars Card */}
          <motion.div
            variants={{ itemVariants }}
            className="bg-white rounded-4xl p-8 flex-1 flex flex-col"
          >
            <p className="text-gray-400 text-sm font-medium mb-6 grow">
              Impressions
            </p>
            <div className="-space-y-1">
              {/* Bar 1 */}
              <div className="relative bg-gray-100 rounded-md h-11 flex items-center px-5 overflow-hidden">
                <div className="absolute inset-0 bg-gray-100 w-full rounded-lg"></div>
                <div className="relative z-10 w-full flex justify-between items-center text-sm">
                  <span className="font-medium text-[#111]">Solutions</span>
                  <span className="text-gray-500 font-medium">100%</span>
                </div>
              </div>

              {/* Bar 2 */}
              <div className="relative bg-white  rounded-md h-11 flex items-center overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-[#111] w-[90%] rounded-lg"></div>
                <div className="relative z-10 w-[90%] px-5 flex justify-between items-center text-sm">
                  <span className="font-medium text-white">UI/UX</span>
                  <span className="text-gray-300 font-medium">90%</span>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="relative rounded-md h-11 flex items-center overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-white border border-gray-200 w-[72%] rounded-lg z-0"></div>
                <div className="relative z-10 w-[72%] px-5 flex justify-between items-center text-sm">
                  <span className="font-medium text-[#111]">Explore</span>
                  <span className="text-gray-500 font-medium">72%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
