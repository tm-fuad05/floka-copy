import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <div className="relative px-15 overflow-hidden">
      <div className="absolute left-0 bg-linear-to-r from-background via-background/70 to-transparent z-10 rounded-full w-150 h-full" />
      <div className="absolute right-0 bg-linear-to-l from-background via-background/70 to-transparent z-10 rounded-full w-150 h-full" />
      <Marquee speed={250} className="text-9xl py-5 mr-5" pauseOnHover autoFill>
        {" "}
        See how our team combines creativity, technology, and strategy
      </Marquee>
    </div>
  );
}
