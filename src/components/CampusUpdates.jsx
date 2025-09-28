import NewsCard from "./NewsCard";
import AgendaItem from "./AgendaItem";

const sampleNews = [
  {
    id: 1,
    title: "Peluncuran Program Magang Bersertifikat",
    excerpt:
      "Program magang bersertifikat bekerja sama dengan industri lokal dan nasional.",
    image: "https://picsum.photos/seed/news1/600/400",
    date: "2025-09-10",
    category: "Pengumuman",
    readTime: "3 min",
    url: "#",
  },
  {
    id: 2,
    title: "Seminar Nasional Teknologi Informasi 2025",
    excerpt:
      "Seminar menghadirkan pembicara dari industri dan akademik tentang inovasi digital.",
    image: "https://picsum.photos/seed/news2/600/400",
    date: "2025-09-02",
    category: "Berita",
    readTime: "5 min",
    url: "#",
  },
  {
    id: 3,
    title: "Beasiswa Prestasi Mahasiswa Unggul",
    excerpt: "Pendaftaran beasiswa prestasi dibuka untuk semester ganjil 2025.",
    image: "https://picsum.photos/seed/news3/600/400",
    date: "2025-08-20",
    category: "Beasiswa",
    readTime: "2 min",
    url: "#",
  },
  {
    id: 4,
    title: "Dies Natalis ke-15 Universitas",
    excerpt:
      "Rangkaian kegiatan Dies Natalis ke-15 meliputi seminar, lomba, dan malam puncak.",
    image: "https://picsum.photos/seed/news4/600/400",
    date: "2025-08-15",
    category: "Kegiatan",
    readTime: "4 min",
    url: "#",
  },
];

const sampleAgenda = [
  {
    id: 1,
    title: "Pendaftaran Calon Mahasiswa Baru",
    date: "2025-10-01T09:00:00",
    location: "Gedung Penerimaan Mahasiswa",
    badge: "Pendaftaran",
    url: "#",
  },
  {
    id: 2,
    title: "Workshop: Pengembangan Aplikasi Mobile",
    date: "2025-09-21T13:30:00",
    location: "Lab Komputer Lantai 2",
    badge: "Workshop",
    url: "#",
  },
  {
    id: 3,
    title: "Pelatihan Kewirausahaan Mahasiswa",
    date: "2025-09-25T09:00:00",
    location: "Aula Utama",
    badge: "Pelatihan",
    url: "#",
  },
];

export default function CampusUpdates({
  news = sampleNews,
  agenda = sampleAgenda,
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 mt-4">
      <div className="flex flex-col items-center gap-30">
        <div className="lg:flex-1">
          <h2 className="text-2xl font-semibold">
            <span className="text-yellow-500">Berita</span> Terkini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {news.slice(0, 2).map((n) => (
              <NewsCard key={n.id} article={n} />
            ))}
            <div className="flex flex-col gap-4">
              {news.slice(2, 5).map((n) => (
                <NewsCard key={n.id} article={n} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-120 border border-gray-200 shadow-md/20 p-4 rounded-md">
          <i className="fa fa-calendar-day text-primary/13 absolute -right-1 bottom-1 text-[12rem] rotate-[-25deg]"></i>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold ">Agenda</h3>
            <a
              href="/agenda"
              className="text-xs text-primary font-medium hover:underline"
            >
              Semua
            </a>
          </div>
          <div className="flex flex-col gap-1">
            {agenda.map((a) => (
              <AgendaItem key={a.id} event={a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
