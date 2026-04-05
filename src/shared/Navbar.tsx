import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const navLinks = ["home", "pages", "portfolio", "blogs"];

  return (
    <div className="w-full fixed z-40 top-0 py-5 px-4 flex justify-between items-center bg-white">
      {/* Logo */}
      <img src="/Logo.png" alt="Floka" className="w-22" />
      {/* NavLinks */}
      <nav className="inline-flex gap-25 text-sm md:text-md lg:text-lg">
        {navLinks.map((nav) => (
          <Link href={`/${nav}`} className="capitalize">
            {nav}
          </Link>
        ))}
      </nav>
      {/* Mail */}
      <div className="inline-flex items-center gap-3">
        <p className="text-sm md:text-md lg:text-lg">info@floka.com</p>
        <div className="h-6 w-px bg-gray-300" />
        <BiMenu size={30} />
      </div>
    </div>
  );
}
