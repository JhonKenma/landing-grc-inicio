import { lazy } from "react"
import HeroSection from "../components/sections/welcome/HeroSection"
import LazySection from "../components/ui/LazySection"
import SectionSkeleton from "../components/ui/SectionSkeleton"
import { useSEO } from "@/hooks/useSEO";
import { useParams } from "react-router-dom";
import { DEFAULT_LANG } from "@/config/lang";
import type { Lang } from "@/types";
import { useTranslation } from "@/hooks/useTranslation";

const ProductOverviewSection = lazy(() =>
  import("../components/sections/welcome/ProductOverviewSection")
)
const SolutionsSections = lazy(() =>
  import("../components/sections/welcome/SolutionsSections")
)
const ComplianceSection = lazy(() =>
  import("../components/sections/welcome/ComplianceSection")
)
const ResourcesSection = lazy(() =>
  import("../components/sections/welcome/ResourcesSection")
)
const PricingSection = lazy(() =>
  import("../components/sections/welcome/PricingSection")
)

export default function IndexPage() {
  const { lang } = useParams<{ lang: Lang }>();
  const currentLang = lang ?? DEFAULT_LANG;
  const { seo } = useTranslation(currentLang)
  useSEO({
    title: seo.home.title,
    description:
      seo.home.description,
    lang: currentLang,
    canonical: `${import.meta.env.VITE_URL_FRONT??'https://shieldgrid365.com'}/${currentLang}`,
  });

  return (
    <section className="flex flex-col gap-10">
      <HeroSection />

      <LazySection fallback={<SectionSkeleton />}>
        <ProductOverviewSection />
      </LazySection>

      <LazySection fallback={<SectionSkeleton />}>
        <SolutionsSections />
      </LazySection>

      <LazySection fallback={<SectionSkeleton />}>
        <ComplianceSection />
      </LazySection>

      <LazySection fallback={<SectionSkeleton />}>
        <ResourcesSection />
      </LazySection>

      <LazySection fallback={<SectionSkeleton />}>
        <PricingSection />
      </LazySection>
    </section>
  )
}
