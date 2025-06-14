import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./Components/Header";
import Audio from "./Components/Audio";
import Home from "./Pages/Home";
import Packeges from "./Pages/Packeges";
import MainAlbum from "./Pages/MainAlbum";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import LoadingSpinnerCompo from "./Components/LoadingSpinnerCompo";
import PerAlbum from "./Components/PerAlbum";
import MainAlbumCompo from "./Components/MainAlbumCompo";
import Testimonials from "./Pages/Testimonials";

function useGoogleAnalytics() {
  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!GA_ID) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(inlineScript);
  }, []);
}

function UpdateTitle() {
  const location = useLocation();

  useEffect(() => {
    let pageTitle = "Randula Jey Photography";

    switch (location.pathname) {
      case "/":
        pageTitle = "Randula Jey Photography";
        break;
      case "/packages":
        pageTitle = "Offers | Randula Jey Photography";
        break;
      case "/main-album":
        pageTitle = "Snapshots | Randula Jey Photography";
        break;
      case "/about":
        pageTitle = "Essence | Randula Jey Photography";
        break;
      case "/#testimonials":
        pageTitle = "Testimonials | Randula Jey Photography";
        break;
      case "/#faq":
        pageTitle = "Support | Randula Jey Photography";
        break;
      case "/#contact":
        pageTitle = "Inquiry | Randula Jey Photography";
        break;
      default:
        break;
    }

    document.title = pageTitle;
  }, [location]);

  return null;
}

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinnerCompo />}
      <Header />
      <Audio />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="testimonials"><Testimonials /></section>
              <div className="mt-10"><section id="faq"><FAQ /></section></div>
              <div className="-mt-10"><section id="contact"><Contact /></section></div>
            </>
          }
        />
        <Route path="/packages" element={<Packeges />} />
        <Route path="/main-album" element={<MainAlbum />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<MainAlbumCompo />} />
        <Route path="/album/:albumId" element={<PerAlbum />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  useGoogleAnalytics(); 

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <UpdateTitle />
      {initialLoading ? <LoadingSpinnerCompo /> : <AppRoutes />}
    </BrowserRouter>
  );
}
