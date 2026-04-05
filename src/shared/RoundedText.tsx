"use client";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
export default function RoundedText() {
  return (
    <div className="relative flex items-center justify-center w-40 h-40">
      {/* ঘূর্ণায়মান টেক্সট */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            {/* বৃত্তাকার পথ যা টেক্সট অনুসরণ করবে */}
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-white text-[9px] font-medium tracking-widest uppercase">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              Get In Touch | Get In Touch | Get In Touch •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* মাঝখানের অ্যারো আইকন */}
      <div className="absolute flex items-center justify-center">
        <BsArrowRight size={70} className="text-white/30" />
      </div>
    </div>
  );
}
