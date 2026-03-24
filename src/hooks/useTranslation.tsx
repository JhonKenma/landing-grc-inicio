import es from "@/i18n/languajes/es/es.json"
import en from "@/i18n/languajes/en/en.json"
import pt from "@/i18n/languajes/pt/pt.json"
import type { Lang } from "@/types"
import { DEFAULT_LANG } from "@/config/lang"
import type { Dictionary } from "@/i18n/types"

const dictionaries: Record<Lang, Dictionary> = {
        es,
        en,
        pt
    }
    

export function useTranslation(lang: Lang = DEFAULT_LANG): Dictionary {
    const dict = dictionaries[lang]

    if (import.meta.env.DEV && !dict) {
        console.warn(`Missing dictionary for lang: ${lang}`)
    }

    return dict ?? dictionaries[DEFAULT_LANG]
}


