import { useState } from "react";
import logo from "../assets/logo.png";

export default function NavbarAtas() {
  const [searchOpen, setSearchOpen] = useState(false);
  const sosmed = [
    {
      href: "https://web.facebook.com/profile.php?id=100083720151352",
      label: "Facebook",
      icon: "fa fa-facebook",
      color: "hover:bg-blue-600",
    },
    {
      href: "https://www.instagram.com/indotec_kdi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
      icon: "fa fa-instagram",
      color: "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400",
    },
    {
      href: "https://www.youtube.com/@politeknikindoteckendari2408",
      label: "YouTube",
      icon: "fa fa-youtube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <div className="relative flex items-center justify-end bg-primary p-3 px-5 overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-16 bg-yellow-400 -skew-x-12 origin-top-left"></div>

      <ul className="flex items-center gap-3 text-white relative z-10">
        {sosmed.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              className={`flex items-center justify-center w-6 h-6 rounded-full bg-white/10 
              backdrop-blur-sm shadow-md transition-all duration-300 
              hover:scale-110 hover:text-white ${s.color}`}
            >
              <i className={s.icon}></i>
            </a>
          </li>
        ))}

        <li>
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 
            backdrop-blur-sm shadow-md transition-all duration-300 
            hover:scale-110 hover:bg-yellow-400 hover:text-black"
          >
            <i className="fa fa-search"></i>
          </button>
        </li>
      </ul>

      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center
          transition-opacity duration-500 ease-in-out"
        >
          <div className="relative w-11/12 max-w-lg p-6 bg-white rounded-xl shadow-2xl animate-slideDown">
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
              aria-label="Close search"
            >
              &times;
            </button>

            <div className="flex justify-center">
              <img
                src={logo}
                alt=""
                className="object-cover w-32 rounded-circle"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              Pencarian
            </h2>

            <input
              type="text"
              placeholder="Cari..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-gray-800"
              autoFocus
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
