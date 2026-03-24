import type { DemoPageDictionary, FooterDictionary, LoginPageDictionary, MenuDictionary, MenuHeaderDictionary, SeoDictionary, WelcomePageDictionary } from "./Dictionary"

export type Dictionary = {
        seo: SeoDictionary
        menu: MenuDictionary
        menuHeader: MenuHeaderDictionary
        // login: LoginDictionary
        footer: FooterDictionary
        pages:{
            welcome: WelcomePageDictionary
            demo: DemoPageDictionary
            login: LoginPageDictionary
        }
    }

