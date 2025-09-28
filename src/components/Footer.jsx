import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-900 text-neutral-300 py-12 px-6 md:px-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-pink-500 to-blue-500 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-neutral-700 pb-10">
        <div className="flex items-start gap-6">
          <img
            src={logo}
            alt="Logo Kampus"
            className="w-20 h-20 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-500"
          />
          <div>
            <h2 className="text-xl font-bold mb-4 text-white tracking-wide">
              Politeknik Indotec Kendari
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 group">
                <i className="fas fa-map-marker-alt text-primary group-hover:scale-125 transition-transform"></i>
                <span className="group-hover:text-white transition-colors">
                   Jl. Sultan Hasanuddin No.37, Punggaloba, Kec. Kendari Bar., Kota Kendari, Sulawesi Tenggara 93123 
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <i className="fas fa-phone-alt text-primary group-hover:rotate-12 transition-transform"></i>
                <span className="group-hover:text-white transition-colors">
                  +62 852-4194-8888
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <i className="fas fa-envelope text-primary group-hover:scale-125 transition-transform"></i>
                <span className="group-hover:text-white transition-colors">
                  politeknik.indotec.kdi@gmail.com
                </span>
              </li>
            </ul>

                <div className="flex gap-4 mt-6">
                {[
                    { icon: "fab fa-facebook-f", url: "https://web.facebook.com/profile.php?id=100083720151352" },
                    { icon: "fab fa-youtube", url: "https://www.youtube.com/@politeknikindoteckendari2408" },
                    { icon: "fab fa-instagram", url: "https://www.instagram.com/indotec_kdi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                ].map((item, idx) => (
                    <a
                    key={idx}
                    href={item.url}
                    className="w-10 h-10 rounded-full bg-neutral-800 scale-100 flex items-center justify-center text-white 
                                hover:bg-primary hover:text-white transition-all duration-500 
                                transform hover:rotate-180 hover:scale-110 shadow-md"
                    >
                    <i className={item.icon}></i>
                    </a>
                ))}
                </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Jurusan
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Teknik Informatika",
                "Manajemen Informatika",
                "Manajemen Pemasaran",
              ].map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative inline-block hover:text-primary transition-colors duration-300 
                               after:content-[''] after:block after:w-0 after:h-[2px] after:bg-primary 
                               after:transition-all after:duration-500 hover:after:w-full"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Lainnya</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Commercial Admin Elearning",
                "Kemendikbud",
                "Accounting Elearning",
              ].map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative inline-block hover:text-primary transition-colors duration-300 
                                 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-primary 
                                 after:transition-all after:duration-500 hover:after:w-full"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bawah */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-xs text-neutral-400">
        <p className="hover:text-white transition-colors">
          © 2025 Politeknik Indotec Kendari
        </p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a
            href="#"
            className="hover:text-primary transition-colors relative after:content-[''] after:block after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
          >
            Peta Situs
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors relative after:content-[''] after:block after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
          >
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
}
