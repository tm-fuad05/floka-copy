import AgencySection from "@/components/AgencySection";
import Banner from "@/components/Banner";
import MarqueeSection from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-30">
      <Banner />
      <div>
        <AgencySection />
        <MarqueeSection />
      </div>
    </div>
  );
}
