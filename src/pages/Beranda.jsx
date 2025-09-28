import CampusUpdates from "../components/CampusUpdates";
import DaftarLogo from "../components/DaftarLogo";
import Footer from "../components/Footer";
import HeroBeranda from "../components/HeroBeranda";
import Layanan from "../components/Layanan";
import ItcTV from "../components/ItcTV";
import Pengumuman from "../components/Pengumuman";

export default function Beranda() {
  return (
    <>
      <HeroBeranda />
      <CampusUpdates />
      <DaftarLogo />  
      <Layanan />
      <Pengumuman />
      <ItcTV />
      <Footer />
    </>
  );
}
