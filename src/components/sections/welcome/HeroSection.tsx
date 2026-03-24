import { Link, useParams } from "react-router-dom"
import { useTranslation } from "@/hooks/useTranslation"
import type { Lang } from "@/types"
import { DEFAULT_LANG } from "@/config/lang"

export default function HeroSection() {
  //Lee el idioma desde la URL.
  const { lang } = useParams<{ lang: Lang }>()

  const currentLang = lang ?? DEFAULT_LANG
  //Elegir el diccionario correcto
  const { pages:{ welcome:{hero} } } = useTranslation(currentLang)

  return (
    <article className="relative h-screen w-full overflow-hidden">
      <video
        src="/video1.mp4"
        poster="welcomeHeader.webp"
        autoPlay
        loop
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/75 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          {hero.title}{" "}
          <span className="text-blue-500">{hero.highlight}</span>
        </h1>

        <p className="mb-6 text-lg sm:text-xl max-w-2xl">
          {hero.description}
        </p>

        <div className="flex gap-4">
          <Link
            to={`/${lang}/login`}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded font-semibold"
          >
            {hero.cta.login}
          </Link>

          <Link
            to={`/${lang}/get-demo`}
            className="border border-white hover:bg-white hover:text-slate-950 px-6 py-3 rounded font-semibold"
          >
            {hero.cta.demo}
          </Link>
        </div>
      </div>
    </article>
  )
}
