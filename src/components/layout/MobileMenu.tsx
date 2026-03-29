import { menuItems } from "@/data"
import { useTranslation } from "@/hooks/useTranslation"
import { smoothScrollTo } from "@/utils/smoothScroll"
import type { Lang } from "@/types"
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

type MobileMenuType = {
  lang: Lang
  onClose: () => void
}

export default function MobileMenu({ onClose, lang }: MobileMenuType) {
  const location = useLocation()
  const isHome = location.pathname === `/${lang}`
  const { menu } = useTranslation(lang)

  const [openItem, setOpenItem] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleMenuItemClick = (id: string) => {
    if (isHome) {
      const el = document.getElementById(id)
      if (el) {
        smoothScrollTo(el, { offset: 80, durationMs: 650 })
      }
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 h-screen">
      <button onClick={onClose} className="fixed top-5 right-5 text-white text-4xl">
        ×
      </button>

      <div className="h-screen overflow-y-auto px-6 pt-24 pb-12">
        <ul className="flex flex-col gap-4">

          {isHome &&
            menuItems.map(item => {
              const isOpen = openItem === item.id
              const hasChildren = !!item.children

              return (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      hasChildren
                        ? setOpenItem(isOpen ? null : item.id)
                        : handleMenuItemClick(item.id)
                    }
                    className="w-full flex justify-between text-xl font-semibold py-3 text-white"
                  >
                    {menu[item.id]}
                    {hasChildren && <span>{isOpen ? "▴" : "▾"}</span>}
                  </button>

                  {hasChildren && isOpen && (
                    <ul className="ml-4 border-l border-slate-700 pl-4">
                      {item.children!.map(child => (
                        <li key={child.id}>
                          <button
                            onClick={() => handleMenuItemClick(child.id)}
                            className="py-2 text-slate-300 hover:text-blue-400"
                          >
                            {menu[child.id]}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}

          <NavLink to={`/${lang}/login`} onClick={onClose}>
            Login
          </NavLink>

          <NavLink to={`/${lang}/get-demo`} onClick={onClose}>
            Get Demo
          </NavLink>
        </ul>
      </div>
    </div>
  )
}
