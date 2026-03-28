import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useTranslation } from "@/hooks/useTranslation"
import { User } from "lucide-react"
import { menuItems } from "@/data"
import type { Lang } from "@/types"

type NavWebProps = {
  lang: Lang
}

export default function NavWeb({ lang }: NavWebProps) {
  const location = useLocation()
  const isHome = location.pathname === `/${lang}`
  const { menu, menuHeader } = useTranslation(lang)

  const [activeSection, setActiveSection] = useState("")
  const observerRef = useRef<IntersectionObserver | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isHome) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setActiveSection("")
        rafRef.current = null
      })

      return
    }

    observerRef.current?.disconnect()

    const sections = menuItems
      .map(item => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.1,
      }
    )

    sections.forEach(section => observer.observe(section))
    observerRef.current = observer

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [isHome])

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (!element) return

    const offset = 80
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
    setActiveSection(id)
  }

  return (
    <nav className="flex items-center gap-6">
      {isHome &&
        menuItems.map(item => {
          const isActive = activeSection === item.id

          // 🔽 ITEM CON DROPDOWN
          if (item.children) {
            return (
              <div key={item.id} className="relative group">
                <button
                  className={`px-4 py-2 font-medium transition-colors
                    ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`}
                >
                  {menu[item.id]}
                </button>

                <div
                  className="absolute left-0 top-full mt-2 w-56 rounded-xl
                             bg-slate-900/95 backdrop-blur shadow-lg
                             opacity-0 invisible group-hover:opacity-100
                             group-hover:visible transition-all"
                >
                  {item.children.map(child => (
                    <a
                      key={child.id}
                      href={`#${child.id}`}
                      onClick={handleScrollTo(child.id)}
                      className="block px-4 py-2 text-sm text-slate-300
                                 hover:text-white hover:bg-slate-800"
                    >
                      {menu[child.id]}
                    </a>
                  ))}
                </div>
              </div>
            )
          }


          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleScrollTo(item.id)}
              className={`relative px-4 py-2 font-medium transition-colors
                ${isActive ? "text-white" : "text-slate-300 hover:text-white"}
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-full after:bg-blue-500 after:scale-x-0
                after:origin-left after:transition-transform
                ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`}
            >
              {menu[item.id]}
            </a>
          )
        })}

      {/* BOTONES */}
      <NavLink
        to={`/${lang}/login`}
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2 rounded font-medium uppercase text-xs
           ${isActive
             ? "bg-blue-600 text-white"
             : "text-slate-300 hover:text-white hover:bg-blue-600/20"}`
        }
      >
        <User size={18} />
        {menuHeader.login}
      </NavLink>

      <NavLink
        to={`/${lang}/get-demo`}
        className="px-4 py-2 rounded bg-blue-600 text-white
                   hover:bg-blue-700 font-medium uppercase"
      >
        {menuHeader.demo}
      </NavLink>
    </nav>
  )
}
