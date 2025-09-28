import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LayoutUtama from "../layouts/LayoutUtama";
import Beranda from "../pages/Beranda";
import SplashScreen from "../components/SplashScreen";
import { setWithExpiry, getWithExpiry } from "../utils/localStorageService";

export default function AppRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      const sudahMasuk = getWithExpiry("sudahMasuk");

      if (!sudahMasuk) {
        setShowSplash(true);
        setWithExpiry("sudahMasuk", true, 60000); // 1 menit
      }
    }
  }, [location.pathname]);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Routes>
          <Route element={<SplashScreen onFinish={() => setShowSplash(false)} />} />
          <Route path="/" element={<LayoutUtama />}>
            <Route index element={<Beranda />} />
          </Route>
        </Routes>
      )}
    </>
  );
}
