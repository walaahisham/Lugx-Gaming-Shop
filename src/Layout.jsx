import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}