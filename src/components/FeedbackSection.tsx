"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nicolas K. Ellington",
    role: "IT Specialist",
    text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
    tag: "GREAT DESIGN SOLUTIONS",
    layout: "name-top", // নাম উপরে
  },
  {
    id: 2,
    name: "Julian T. Beaumont",
    role: "IT Specialist",
    text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
    tag: "GREAT DESIGN SOLUTIONS",
    layout: "name-bottom", // নাম নিচে
  },
  {
    id: 3,
    name: "Felipe D. Hawthorne",
    role: "IT Specialist",
    text: '" As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog. "',
    tag: "GREAT DESIGN SOLUTIONS",
    layout: "name-top", // নাম উপরে
  },
];

export default function FeedbackSection() {
  return (
    <section className="bg-[#f8f8f8] px-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-700 pb-2">
          USER FEEDBACKS
        </p>
        {/* Header Part */}

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.4 } },
          }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10 border-t border-gray-200"
        >
          <div className="text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] max-w-3xl md:ml-auto mt-10">
            {[
              "Accelerating growth, and unlocking",
              <span>
                new potential.{" "}
                <span className="inline-flex items-center">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </span>{" "}
                Let’s build your
              </span>,
              "brand—together.",
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
              >
                {t}{" "}
              </motion.h2>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              {item.layout === "name-top" ? (
                <>
                  <UserHeader name={item.name} role={item.role} />
                  <FeedbackCard text={item.text} tag={item.tag} />
                </>
              ) : (
                <>
                  <FeedbackCard text={item.text} tag={item.tag} />
                  <UserHeader name={item.name} role={item.role} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserHeader({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm">
      <h4 className="text-lg font-medium tracking-tight text-[#111]">{name}</h4>
      <p className="text-gray-400 text-xs font-medium mt-1">{role}</p>
    </div>
  );
}

function FeedbackCard({ text, tag }: { text: string; tag: string }) {
  return (
    <div className="bg-white p-10 rounded-[2rem] shadow-sm flex flex-col justify-between flex-1">
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#ff8a00" color="#ff8a00" />
          ))}
        </div>
        <p className="text-[#111] text-lg leading-relaxed font-medium">
          {text}
        </p>
      </div>
      <p className="text-[10px] font-bold text-gray-300 mt-10 tracking-widest uppercase">
        "{tag}"
      </p>
    </div>
  );
}
