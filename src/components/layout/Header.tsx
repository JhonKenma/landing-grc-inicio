import { Link, useLocation, useParams } from "react-router-dom"
import { useState } from "react"
import { Menu } from "lucide-react"
import MobileMenu from "./MobileMenu"
import NavWeb from "./NavWeb"
import type { Lang } from "@/types"
import { DEFAULT_LANG } from "@/config/lang"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  
  const { lang } = useParams<{ lang: Lang }>()

  const currentLang = lang ?? DEFAULT_LANG
  

  const isAuthPage =

    location.pathname.endsWith("/login") 

  if (isAuthPage) return null

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/60 backdrop-blur px-5 border-b border-white/10 max-lg:px-10">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to={`/${currentLang}`}>
          <img className="w-60 max-lg:w-50" src="/logo.png" alt="ShieldGrid365 logo" />
        </Link>

        <div className="hidden lg:flex gap-6 pl-5">
          <NavWeb lang={currentLang} />
        </div>

        <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
          <Menu />
        </button>
      </div>

      {menuOpen && (
        <MobileMenu lang={currentLang} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  )
}
