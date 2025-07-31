import { FaInstagram, FaEnvelope, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#FAF1E6] text-black font-offside px-6 py-6 2xl:px-60 border-t border-[#e6d3c1]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-6">
        {/* KIRI - Logo & Navigasi */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="src/assets/fp.png" alt="Logo" className="w-6 h-6" />
            <span className="font-michroma text-[#E8AC52] text-lg tracking-wide">FocusPlan.</span>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-6 bg-black" />

          {/* Menu Navigasi */}
          <nav className="flex gap-4 text-sm md:text-base">
            <a href="#" className="hover:underline transition">Beranda</a>
            <a href="#" className="hover:underline transition">Tentang Kami</a>
            <a href="#" className="hover:underline transition">Contact</a>
          </nav>
        </div>
 
        {/* TENGAH - Copyright */}
        <div className="flex items-center gap-2 text-xs md:text-sm text-center">
          <MdCopyright className="text-base" />
          <span>2026 FocusPlan. All rights reserved.</span>
        </div>

        {/* KANAN - Sosial Media */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <span className="underline text-sm md:text-base">@Sosial Media</span>
          <div className="flex gap-3 text-lg md:text-2xl">
            <FaInstagram className="hover:text-[#E8AC52] transition" />
            <FaEnvelope className="hover:text-[#E8AC52] transition" />
            <FaXTwitter className="hover:text-[#E8AC52] transition" />
            <FaFacebook className="hover:text-[#E8AC52] transition" />

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
