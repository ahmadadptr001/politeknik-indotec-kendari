import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function SplashScreen({ onFinish }) {
  const [startAnim, setStartAnim] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Mulai animasi masuk
    const introTimer = setTimeout(() => setStartAnim(true), 200);

    // Mulai keluar
    const fadeTimer = setTimeout(() => setFadeOut(true), 2800);

    // Hilang total
    const finishTimer = setTimeout(() => onFinish(), 3500);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-blue-900 text-white z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo kampus */}
      <div
        className={`w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-700 ${
          startAnim ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {/* Ganti src dengan logo kampus */}
        <img
          src={logo}
          alt="Logo Kampus"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Nama kampus */}
      <h1
        className={`mt-6 text-2xl font-bold tracking-wide transition-all duration-700 ${
          startAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        POLITEKNIK INDOTEC KENDARI
      </h1>

      {/* Tagline */}
      <p
        className={`mt-2 text-sm text-gray-200 italic transition-all duration-700 delay-200 ${
          startAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        "Unggul • Profesional • Berkarakter"
      </p>

      {/* Progress bar */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-yellow-400 transition-all duration-[2500ms] ${
          startAnim ? "w-full" : "w-0"
        }`}
      ></div>
    </div>
  );
}
