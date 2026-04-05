import Link from "next/link";

import { FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import RoundedText from "./RoundedText";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  const footerNavLinks = [
    "about-us",
    "journal",
    "faq",
    "get-in-touch",
    "careers",
  ];

  const socialLinks = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaLinkedinIn />,
    <FaBehance />,
  ];

  return (
    <div className="m-4 rounded-2xl bg-footer px-5 py-25 flex flex-col items-center justify-center gap-70">
      <div className="relative">
        <div className="relative">
          <h1 className="text-[200px] bg-clip-text text-transparent bg-linear-to-b from-[#A7A7A7] to-[#424242] text-center leading-[0.9]">
            Let’s <br /> talk now
          </h1>
          <div className="absolute w-full h-40 z-10 bottom-0 bg-linear-to-t from-footer to-transparent"></div>
        </div>
        <div className="absolute z-20 -bottom-50 left-1/2 -translate-1/2">
          {" "}
          <RoundedText />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-10">
        {/* img */}
        <figure className="relative col-span-2">
          <img
            src="/footer-img.jpg"
            alt="Floka Footer"
            className=" rounded-2xl bg-center object-cover"
          />
          <img
            src="/footer-logo.svg"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20"
          />
        </figure>
        {/* Navbar */}
        <nav className="text-4xl text-white flex flex-col gap-8">
          {footerNavLinks.map((nav) => (
            <Link href={`/${nav}`} className="relative capitalize group">
              <span> {nav.split("-").join(" ")}</span>
              <div className="absolute h-px w-0 bg-white group-hover:w-full duration-300"></div>
            </Link>
          ))}
        </nav>
        {/* Quick Links Section */}
        <div className="col-span-2 flex flex-col gap-12">
          <p className="text-xl text-[#757575]">
            At <span className="text-white">Floka</span>, we believe furniture
            should be more than just functional—it should tell your story. With
            a focus on timeless design, sustainable materials, and expert
            craftsmanship, we create pieces that feel personal.
          </p>
          {/* Info */}
          <div className="text-xl text-white">
            <p>info@floka-design.com</p>
            <p>+123 (456 789 00)</p>
            <p>12/A, Booston Tower, NYC</p>
          </div>
          {/* Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((l) => (
              <button className="relative border border-white rounded-full  p-3 group">
                <div className="absolute bg-gray-200 inset-full group-hover:-inset-px rounded-full duration-300" />
                <span className="text-xl text-white group-hover:text-black z-10">
                  {" "}
                  {l}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
