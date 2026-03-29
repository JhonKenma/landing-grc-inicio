import { DEFAULT_LANG } from "@/config/lang";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/types";
import { BadgeCheck, ChartArea, ReceiptText } from "lucide-react";
import { useParams } from "react-router-dom";

export default function ProductOverviewSection() {
  // Lee el idioma desde la URL.
  const { lang } = useParams<{ lang: Lang }>();

  const currentLang = lang ?? DEFAULT_LANG

  // Elegir el diccionario correcto
  const {
    pages: {
      welcome: { productOverview },
    },
  } = useTranslation(currentLang);

  return (
    <article className="min-h-screen py-20 px-4 scroll-mt-28" id="product">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm font-medium text-blue-300">
              {productOverview.header.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {productOverview.header.title}
            <span className="block text-blue-400">
              {productOverview.header.highlight}
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {productOverview.header.description}
          </p>
        </div>

        {/* Grid de características principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Risk Management */}
          <div
            id="risk"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-blue-900/10 scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-red-500/10 mb-6">
              <div className="text-2xl">
                <ChartArea />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              {productOverview.features.risk.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light leading-relaxed">
              {productOverview.features.risk.description}
            </p>
            <ul className="space-y-3 mb-8">
              {productOverview.features.risk.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  {bullet}
                </li>
              ))}
            </ul>
            <a
              href="#risk-demo"
              className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              {productOverview.features.risk.cta}
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Card 2: Compliance Automation */}
          <div
            id="compliance-automation"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-emerald-500/30 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-emerald-900/10 scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-emerald-500/10 mb-6">
              <div className="text-2xl">
                <BadgeCheck />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
              {productOverview.features.compliance.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light leading-relaxed">
              {productOverview.features.compliance.description}
            </p>

            <ul className="space-y-3 mb-8">
              {productOverview.features.compliance.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href="#compliance-demo"
              className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              {productOverview.features.compliance.cta}
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Card 3: Audit Management */}
          <div
            id="audit"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-purple-500/30 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-purple-900/10 scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 mb-6">
              <div className="text-2xl">
                <ReceiptText />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
              {productOverview.features.audit.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light leading-relaxed">
              {productOverview.features.audit.description}
            </p>
            <ul className="space-y-3 mb-8">
              {productOverview.features.audit.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                  {bullet}
                </li>
              ))}
            </ul>
            <a
              href="#audit-demo"
              className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              {productOverview.features.audit.cta}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div id="overview" className="mb-20 scroll-mt-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {productOverview.dashboard.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {productOverview.dashboard.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-900/50 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {productOverview.dashboard.stats.uptime.value}
                </div>
                <div className="text-sm text-slate-400">
                  {productOverview.dashboard.stats.uptime.label}
                </div>
              </div>

              <div className="p-6 bg-slate-900/50 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {productOverview.dashboard.stats.resolution.value}
                </div>
                <div className="text-sm text-slate-400">
                  {productOverview.dashboard.stats.resolution.label}
                </div>
              </div>

              <div className="p-6 bg-slate-900/50 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {productOverview.dashboard.stats.auditReduction.value}
                </div>
                <div className="text-sm text-slate-400">
                  {productOverview.dashboard.stats.auditReduction.label}
                </div>
              </div>

              <div className="p-6 bg-slate-900/50 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">
                  {productOverview.dashboard.stats.riskSpeed.value}
                </div>
                <div className="text-sm text-slate-400">
                  {productOverview.dashboard.stats.riskSpeed.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
