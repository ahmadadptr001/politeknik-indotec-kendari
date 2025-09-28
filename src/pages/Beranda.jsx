import CampusUpdates from "../components/CampusUpdates";
import DaftarLogo from "../components/DaftarLogo";
import HeroBeranda from "../components/HeroBeranda";
import Layanan from "../components/Layanan";

export default function Beranda() {
  return (
    <>
      <HeroBeranda />
      <CampusUpdates />
      <DaftarLogo />  
      <Layanan />
    </>
  );
}
