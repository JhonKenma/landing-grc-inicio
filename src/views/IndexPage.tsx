import HeroSection from "../components/sections/welcome/HeroSection"
import ProductOverviewSection from "../components/sections/welcome/ProductOverviewSection"
import SolutionsSections from "../components/sections/welcome/SolutionsSections"
import ComplianceSection from "../components/sections/welcome/ComplianceSection"
import ResourcesSection from "../components/sections/welcome/ResourcesSection"
import PricingSection from "../components/sections/welcome/PricingSection"
import { useSEO } from "@/hooks/useSEO";
import { useParams } from "react-router-dom";
import { DEFAULT_LANG } from "@/config/lang";
import type { Lang } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";

export default function IndexPage() {
  const { lang } = useParams<{ lang: Lang }>();
  const currentLang = lang ?? DEFAULT_LANG;
  const { seo } = useTranslation(currentLang)
  useSEO({
    title: seo.home.title,
    description: seo.home.description,
    lang: currentLang,
    canonical: `${import.meta.env.VITE_URL_FRONT ?? 'https://shieldgrid365.com'}/${currentLang}`,
  });

  return (
    <section className="flex flex-col gap-10">
      <HeroSection />
      <ProductOverviewSection />
      <SolutionsSections />
      <ComplianceSection />
      <ResourcesSection />
      <PricingSection />
    </section>
  )
}