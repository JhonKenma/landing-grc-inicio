import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { smoothScrollTo } from "@/utils/smoothScroll"

export default function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.pageYOffset > 400)
    window.addEventListener("scroll", checkScroll)
    return () => window.removeEventListener("scroll", checkScroll)
  }, [])

  const handleClick = () => {
    const root = document.documentElement as HTMLElement
    smoothScrollTo(root, { offset: 0, durationMs: 650 })
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-full shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 cursor-pointer ${
        showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}
