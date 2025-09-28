import layananImage from "../assets/layanan.png";

const layananList = [
  {
    title: "WEB KEPEGAWAIAN",
    desc: "Sistem Informasi Kepegawaian Politeknik Indotec Kendari",
    icon: "fa-users",
    url: "#",
  },
  {
    title: "SIMPONI ITC",
    desc: "Sistem Informasi Akademik Politeknik Indotec Kendari",
    icon: "fa-laptop",
    url: "#",
  },
  {
    title: "WEB PELAPORAN",
    desc: "Web Pelaporan Kerusakan Politeknik Indotec Kendari",
    icon: "fa-laptop",
    url: "#",
  },
  {
    title: "SIMPONI",
    desc: "Web Simponi untuk Mahasiswa Politeknik Indotec Kendari",
    icon: "fa-users",
    url: "#",
  },
  {
    title: "BADAN LAYANAN UMUM",
    desc: "",
    icon: "fa-building",
    url: "#",
  },
];

export default function Layanan() {
  return (
    <section className="relative h-screen mt-16">
      <img
        src={layananImage}
        alt=""
        className="absolute w-full h-screen object-cover inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/40 via-gray-900/60 to-blue-600/50 z-5"></div>
      <div className="absolute inset-0 z-10 p-6 flex flex-col items-center text-white">
        <p className="font-bold text-4xl md:text-5xl text-center mb-8 tracking-wide">
          Layanan
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl mt-20">
          {layananList.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              className="group relative flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-300"
            >
              <i
                className={`fa ${item.icon} text-6xl mb-4 text-yellow-400 group-hover:text-white transition-colors duration-300`}
              ></i>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              )}
              <span className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-yellow-400 pointer-events-none"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
