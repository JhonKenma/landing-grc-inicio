import { AlertCircle, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "@/hooks/useTranslation"
import type { Lang } from "@/types"
import { toast } from "react-toastify"
import { DEFAULT_LANG } from "@/config/lang"

export default function LoginForm() {
    //Lee el idioma desde la URL.
    const { lang } = useParams<{ lang: Lang }>()

    const currentLang = lang ?? DEFAULT_LANG

    //Elegir el diccionario correcto
    const { pages:{ login:{form : t} } } = useTranslation(currentLang)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!formData.email || !formData.password) {
        setError(t.errorRequired)
        return
        }

        setIsLoading(true)

        //AQUI LOGICA PARA ENVIAR DATOS

        setTimeout(() => {
        toast.success("Login OK", { theme: "dark" })
        setIsLoading(false)
        }, 1500)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL */}
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.emailLabel}
                </label>

                <div className="relative">
                <input
                    type="email"
                    value={formData.email}
                    onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.emailPlaceholder}
                    disabled={isLoading}
                    className="
                    w-full px-4 py-3
                    bg-slate-800/50
                    border border-slate-700/50
                    rounded-lg
                    text-white placeholder-slate-500
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500/50
                    focus:border-blue-500/50
                    transition-all
                    disabled:opacity-50
                    "
                />
                <div className="absolute right-3 top-3 text-slate-500">@</div>
                </div>
            </div>

            {/* PASSWORD */}
            <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.passwordLabel}
                </label>

                <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={e =>
                    setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder={t.passwordPlaceholder}
                    disabled={isLoading}
                    className="
                    w-full px-4 py-3 pr-12
                    bg-slate-800/50
                    border border-slate-700/50
                    rounded-lg
                    text-white placeholder-slate-500
                    focus:outline-none
                    focus:ring-2 focus:ring-blue-500/50
                    focus:border-blue-500/50
                    transition-all
                    disabled:opacity-50
                    "
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-300 transition-colors"
                >
                    {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                    ) : (
                    <Eye className="w-5 h-5" />
                    )}
                </button>
                </div>
            </div>

            {/* ERROR */}
            {error && (
                <div className="flex items-center text-sm text-red-400">
                <AlertCircle className="w-4 h-4 mr-1" />
                {error}
                </div>
            )}

            {/* SUBMIT */}
            <button
                type="submit"
                disabled={isLoading}
                className="
                w-full py-3
                bg-blue-600 hover:bg-blue-700
                text-white font-semibold
                rounded-lg
                transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center
                cursor-pointer
                "
            >
                {isLoading ? (
                <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    {t.submitting}
                </>
                ) : (
                t.submit
                )}
            </button>
        </form>
    )
}
