export type MenuSubItem = {
  id: string
  label: string
}

export interface MenuItem {
  id: string
  children?: MenuItem[]
}

// Idiomas soportados
// export const LANGS = ["es", "en", "pt"] as const;
export const LANGS = ["en", "es", "pt"] as const;
// export const LANGS = ["en"] as const;
// "zh", "fr",

// Tipo derivado de LANGS
export type Lang = typeof LANGS[number];



export type DemoFormData = {
  firstName: string,
  lastName: string,
  email: string,
  company: string,
  phone: string,
  country: string,
  jobTitle: string,
  companySize: string,
  industry: string,
  useCase: string,
  message: string,
  agreedToTerms: boolean,
  countryCode: string
}