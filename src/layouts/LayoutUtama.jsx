import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavbarAtas from "../components/NavbarAtas";
import ScrollToTop from "../components/ScrollToTop";

export default function LayoutUtama() {
  return (
    <>
      <ScrollToTop />
      <NavbarAtas />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
