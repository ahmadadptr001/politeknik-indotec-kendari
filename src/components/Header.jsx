import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import Sidebar from "./Sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "PROFILE",
      path: "#",
      children: [
        {
          name: "Tentang ITC",
          path: "#",
          children: [
            { name: "Sturktur Organisasi", path: "/tentang/organisasi" },
            { name: "Pimpinan", path: "/tentang/organisasi" },
            { name: "Visi Misi", path: "/tentang/organisasi" },
            {
              name: "Profil Singkat Pejabat Strutural",
              path: "/tentang/organisasi",
            },
            { name: "Alamat dan Kontak", path: "/tentang/organisasi" },
          ],
        },
        { name: "PPID", path: "/ppid" },
      ],
    },
    {
      name: "SAKIP",
      path: "#",
      children: [
        {
          name: "Rencana Strategis",
          path: "#",
          children: [
            { name: "Renstra TIC 2020-2024", path: "/sakip/renstra" },
            { name: "RSB 2022-2026", path: "/sakip/rsb-20222-2026" },
          ],
        },
        {
          name: "Laporan Kinerja",
          path: "#",
          children: [
            {
              name: "Laporan Kinerja ITC 2024",
              path: "/sakip/laporan-kinerja-2024",
            },
            {
              name: "Laporan Kinerja ITC 2023",
              path: "/sakip/laporan-kinerja-2023",
            },
            {
              name: "Laporan Kinerja ITC 2022",
              path: "/sakip/laporan-kinerja-2022",
            },
            {
              name: "Laporan Kinerja ITC 2021",
              path: "/sakip/laporan-kinerja-2021",
            },
          ],
        },
        {
          name: "Indikator Kinerja",
          path: "#",
          children: [
            {
              name: "Indikator Kinerja Utama 2024",
              path: "/sakip/indikator-kinerja-2024",
            },
            {
              name: "Indikator Kinerja Utama 2023",
              path: "/sakip/indikator-kinerja-2023",
            },
            {
              name: "Indikator Kinerja Utama 2022",
              path: "/sakip/indikator-kinerja-2022",
            },
          ],
        },
        {
          name: "Rencana Aksi",
          path: "#",
          children: [
            { name: "Rencana Aksi 2024", path: "/sakip/rencana-aksi-2024" },
            { name: "Rencana Aksi 2023", path: "/sakip/rencana-aksi-2023" },
            { name: "Rencana Aksi 2022", path: "/sakip/rencana-aksi-2022" },
          ],
        },
        {
          name: "Perjanjian Kinerja",
          path: "#",
          children: [
            { name: "PK 2021", path: "/sakip/pk-2021" },
            { name: "PK 2022", path: "/sakip/pk-2022" },
            { name: "PK 2023", path: "/sakip/pk-2023" },
            { name: "PK 2024", path: "/sakip/pk-2024" },
          ],
        },
      ],
    },
    {
      name: "LAYANAN",
      path: "#",
      children: [
        {
          name: "Badan Layanan Umum",
          path: "#",
          children: [
            { name: "Logo dan Value", path: "/layanan/logo-dan-value" },
            {
              name: "Survey Kepuasan Layanan",
              path: "/layanan/survey-kepuasan-layanan",
            },
          ],
        },
        { name: "SIMPONI", path: "/layanan/simponi" },
        { name: "Simponi Mahasiswa", path: "/layanan/simponi-mahasiswa" },
        { name: "Elearning", path: "/layanan/e-learning" },
        { name: "Perbaikan", path: "/layanan/perbaikan" },
        { name: "Sister", path: "/layanan/sister" },
        { name: "Bengkalai Perpus", path: "/layanan/bengkalai-perpus" },
        { name: "Dokumen", path: "/layanan/dokumen" },
        { name: "Kuesioner", path: "/layanan/Kuesioner" },
        { name: "Pengaduan Masyarakat", path: "/layanan/pengaduan-masyarakat" },
        { name: "Tracer Study", path: "/layanan/tracer-study" },
        { name: "Pemilihan Direktur Politeknik Indotec Kendari", path: "/layanan/pemilihan-direktur" },
      ],
    },
    {
      name: "JURUSAN",
      path: "#",
      children: [
        { name: "Teknik Informatika", path: "/jurusan/teknik-informatika" },
        {
          name: "Manajemen Informatika",
          path: "/jurusan/manajemen-informatika",
        },
        { name: "Manajemen Pemasaran", path: "/jurusan/teknik-pemasaran" },
      ],
    },
    {
      name: "KEMAHASISWAAN",
      path: "#",
      children: [
        { name: "Mahasiswa", path: "/kemahasiswaan/mahasiswa" },
        { name: "Data Wisuda", path: "/kemahasiswaan/data-wisuda" },
      ],
    },
    {
      name: "AKADEMIK",
      path: "#",
      children: [
        { name: "Kalender Akademik", path: "/akademik/kalender-akademik" },
        { name: "Peraturan Akademik", path: "/akademik/peraturan-akademik" },
        { name: "Program pendidikan", path: "/akademik/program-pendidikan" },
        { name: "Status Akreditasi", path: "/akademik/status-akreditasi" },
        { name: "Alumni", path: "/akademik/alumni" },
        { name: "BAAK", path: "/akademik/baak" },
      ],
    },
    {
      name: "PENERIMAAN",
      path: "#",
      children: [
        { name: "SNPMB", path: "/penerimaan/snpmb" },
        { name: "UMPN/SBMPN", path: "/penerimaan/umpn-sbmpn" },
      ],
    },
    {
      name: "UNIT",
      path: "#",
      children: [
        { name: "Unit Perencaan", path: "/unit/unit-perencanaan" },
        { name: "Unit Penjaminan Mutu", path: "/unit/unit-penjaminan-mutu" },
        { name: "Unit PPM", path: "/unit/unit-PPM" },
      ],
    },
  ];

  return (
    <div className="p-7 flex items-center justify-between bg-base-100 sticky top-0 z-40 shadow-md">
      {/* logo */}
      <a href="/" className="flex font-bold items-center gap-2">
        <img
          src={logo}
          alt="logo indotec kendari"
          className="object-cover w-12 h-12 rounded-full"
        />
        <p>Politeknik Indotec Kendari</p>
      </a>

      {/* menu */}
      <ul className="hidden xl:flex items-center gap-6 text-sm font-medium">
        {menuItems.map((item) => (
          <MenuItem key={item.path} item={item} />
        ))}
      </ul>

      {/* humberger button */}
      <div className="lg:hidden">
        <button
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((s) => !s)}
          className="btn btn-ghost btn-square"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <Sidebar open={open} setOpen={setOpen} menuItems={menuItems} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [alignRight, setAlignRight] = useState(true);

  useEffect(() => {
    if (ref.current && open) {
      const rect = ref.current.getBoundingClientRect();
      setAlignRight(rect.left + 200 < window.innerWidth);
    }
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.path}
        className="text-[.7rem] font-bold px-2 py-1 transition-colors duration-200 hover:text-primary"
      >
        {item.name}
        {item.children && <span className="ml-1">▾</span>}
      </NavLink>

      <AnimatePresence>
        {item.children && open && (
          <motion.ul
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full mt-2 w-48 bg-gray-100 shadow-lg rounded-lg p-2 space-y-1 z-50 ${
              alignRight ? "left-0" : "right-0"
            }`}
          >
            {item.children.map((child) => (
              <SubMenu key={child.path} item={child} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

function SubMenu({ item }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [alignRight, setAlignRight] = useState(true);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setAlignRight(rect.right + 200 < window.innerWidth);
    }
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.path}
        className="block px-3 hover:bg-primary/5 py-2 rounded-md transition-colors duration-200"
      >
        {item.name}
        {item.children && <span className="ml-2">▸</span>}
      </NavLink>

      <AnimatePresence>
        {item.children && open && (
          <motion.ul
            initial={{ opacity: 0, x: alignRight ? 10 : -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: alignRight ? 10 : -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-0 ${
              alignRight ? "left-full ml-2" : "right-full mr-2"
            } w-48 bg-gray-100 shadow-lg rounded-lg p-2 space-y-1`}
          >
            {item.children.map((sub) => (
              <li key={sub.path}>
                <NavLink
                  to={sub.path}
                  className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-primary/5"
                >
                  {sub.name}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
