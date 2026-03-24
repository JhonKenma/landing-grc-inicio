import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useAppStore } from "../store/useAppStore";
import { LANGS, type Lang } from "@/types";

export default function Layout() {
  const { lang: urlLang } = useParams<{ lang?: string }>();
  const navigate = useNavigate();
  const { lang, setLang } = useAppStore();

  useEffect(() => {
    if (urlLang && LANGS.includes(urlLang as Lang)) {
      if (urlLang !== lang) {
        setLang(urlLang as Lang);
      }
      return;
    }
    navigate(`/${lang}`, { replace: true });
  }, [urlLang, lang, navigate, setLang]);

  return (
    <div className="relative isolate min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 mx-auto w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
