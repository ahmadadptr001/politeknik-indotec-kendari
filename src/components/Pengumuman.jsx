import { useState } from "react";

export default function Pengumuman() {
  const [pengumuman, setPengumuman] = useState([
    {
      id: 1,
      title: "Jadwal Ujian Tengah Semester",
      date: "2025-09-28",
      description:
        "Periksa jadwal UTS semester ganjil. Semua mahasiswa wajib hadir sesuai jadwal yang ditentukan.",
      image:
        "https://ubharajaya.ac.id/wp-content/uploads/2024/06/Mahasiswa-Ujian-1.jpg",
    },
    {
      id: 2,
      title: "Workshop Digital Marketing",
      date: "2025-09-30",
      description:
        "Politeknik Indotec Kendari mengadakan workshop Digital Marketing untuk mahasiswa aktif.",
      image:
        "https://sasanadigital.com/wp-content/uploads/2023/07/Cuplikan-layar-2023-07-18-093728-1024x534.webp",
    },
    {
      id: 2,
      title: "Workshop Digital Marketing",
      date: "2025-09-30",
      description:
        "Politeknik Indotec Kendari mengadakan workshop Digital Marketing untuk mahasiswa aktif.",
      image:
        "https://sasanadigital.com/wp-content/uploads/2023/07/Cuplikan-layar-2023-07-18-093728-1024x534.webp",
    },
    {
      id: 2,
      title: "Workshop Digital Marketing",
      date: "2025-09-30",
      description:
        "Politeknik Indotec Kendari mengadakan workshop Digital Marketing untuk mahasiswa aktif.",
      image:
        "https://sasanadigital.com/wp-content/uploads/2023/07/Cuplikan-layar-2023-07-18-093728-1024x534.webp",
    },
    {
      id: 2,
      title: "Workshop Digital Marketing",
      date: "2025-09-30",
      description:
        "Politeknik Indotec Kendari mengadakan workshop Digital Marketing untuk mahasiswa aktif.",
      image:
        "https://sasanadigital.com/wp-content/uploads/2023/07/Cuplikan-layar-2023-07-18-093728-1024x534.webp",
    },
  ]);

  return (
    <section className="p-7 py-20 gap-10 grid grid-cols-1 lg:grid-cols-2">
      {/* Deskripsi & button */}
      <div className="">
        <p className="text-3xl font-bold">
          <span className="text-yellow-500">Pengumuman</span> ITC
        </p>
        <p className="text-sm mt-4 mb-6 leading-7 text-gray-700">
          Periksa informasi terbaru seputar kegiatan akademik maupun
          non-akademik, pengumuman penting, jadwal perkuliahan, program kampus,
          serta berita terkini lainnya dari Politeknik Indotec Kendari. Pastikan
          Anda selalu mengikuti setiap update agar tidak ketinggalan informasi
          penting yang bisa memengaruhi aktivitas akademik dan kegiatan kampus.
        </p>
        <button className="btn btn-warning w-fit mt-auto">
          Lihat Pengumuman Lainnya <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>

      {/* Daftar Pengumuman seperti NewsCard */}
      <div className="grid grid-cols-1 gap-5 max-h-[500px] overflow-y-auto">
        {pengumuman.length > 0 ? (
          pengumuman.map((item) => (
            <article
              key={item.id}
              className="relative rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-[200px] sm:h-[220px] md:h-[250px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </p>
                <span className="text-xs mt-1">
                  <i className="fa fa-calendar"></i>{" "}
                  {new Date(item.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-10 border-2 border-dashed border-gray-300 rounded-xl">
            <i className="fas fa-info-circle text-4xl text-gray-400 mb-4"></i>
            <p className="text-gray-500 text-lg">
              Belum ada pengumuman terbaru.
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Silakan cek kembali nanti untuk update terbaru dari Politeknik
              Indotec Kendari.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
