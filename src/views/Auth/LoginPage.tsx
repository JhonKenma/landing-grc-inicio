import { Link, useParams } from "react-router-dom"
import LoginForm from "../../components/forms/LoginForm"
import { useTranslation } from "@/hooks/useTranslation"
import type { Lang } from "@/types"
import { DEFAULT_LANG } from "@/config/lang"

const LoginPage = () => {
  //Lee el idioma desde la URL.
  const { lang } = useParams<{ lang: Lang }>()

  const currentLang = lang ?? DEFAULT_LANG

  //Elegir el diccionario correcto
  const { pages:{login} } = useTranslation(currentLang)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="relative z-10 text-center mb-8">
        <Link to={`/${currentLang}`}>
          <img className="w-60" src="/logo.png" alt="ShieldGrid365 logo" />
        </Link>
      </div>

      <div className="w-full max-w-md bg-slate-950 shadow-blue-950/25 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-700/50">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {login.title}
          </h2>
          <p className="text-slate-400">
            {login.subtitle}
          </p>
        </div>

        <LoginForm />

        <p className="text-center text-slate-400 text-sm mt-6">
          {login.noAccount}{" "}
          <Link
            to={`/${currentLang}/get-demo`}
            className="text-blue-400 hover:underline"
          >
            {login.getDemo}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
