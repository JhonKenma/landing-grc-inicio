import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/ui/Spinner";
import { LANGS } from "@/types";
import { DEFAULT_LANG } from "./config/lang";

const IndexPage = lazy(() => import("./views/IndexPage"));
const LoginPage = lazy(() => import("./views/Auth/LoginPage"));
const GetDemoPage = lazy(() => import("./views/GetDemoPage"));
const Layout = lazy(() => import("./layout/Layout"));

// Valida que el parámetro :lang esté dentro de LANGS
function LangValidator({ children }: { children: React.ReactNode }) {
    const { lang } = useParams();
    const isValid = LANGS.includes(lang as any);

    if (!isValid) {
        return <Navigate to={`/${DEFAULT_LANG}`} replace />;
    }

    return <>{children}</>;
}

export default function AppRouter() {
  const loading = <Spinner />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />

        <Route
          path="/:lang"
          element={
            <LangValidator>
              <Layout />
            </LangValidator>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={loading}>
                <IndexPage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={loading}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="get-demo"
            element={
              <Suspense fallback={loading}>
                <GetDemoPage />
              </Suspense>
            }
          />
        </Route>

        {/* Ruta comodín también dinámica */}
        <Route path="*" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
