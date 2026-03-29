import RoiCalculator from "@/components/Cards/RoiCalculator";
import { DEFAULT_LANG } from "@/config/lang";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/types";
import { useParams } from "react-router-dom";

export default function PricingSection() {
  // Lee el idioma desde la URL.
  const { lang } = useParams<{ lang: Lang }>();

  const currentLang = lang ?? DEFAULT_LANG

  // Elegir el diccionario correcto
  const {
    pages: {
      welcome: { pricing },
    },
  } = useTranslation(currentLang);

  return (
    <article className="min-h-screen py-20 px-4 scroll-mt-28" id="essential">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-blue-300">
              {pricing.header.badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {pricing.header.title}
            <span className="block text-blue-400">{pricing.header.highlight}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {pricing.header.description}
          </p>
        </div>

        {/* Selector de facturación anual/mensual */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <button className="px-6 py-3 rounded-lg font-medium text-white bg-blue-600 transition-all">
              {pricing.billingToggle.annual.label}
              <span className="ml-2 text-sm font-semibold bg-blue-700 px-2 py-1 rounded">
                {pricing.billingToggle.annual.discountLabel}
              </span>
            </button>
            {/* <button className="px-6 py-3 rounded-lg font-medium text-slate-300 hover:text-white transition-colors">
              {pricing.billingToggle.monthly.label}
            </button> */}
          </div>
        </div>

        {/* Grid de planes de precios */}
        <div id="essential" className="grid md:grid-cols-3 gap-8 mb-20 scroll-mt-28">
          {/* Plan Essential */}
          <div className="group p-8 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-900/10">
            <div className="mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <span className="text-sm font-medium text-blue-300">
                  {pricing.plans.essential.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{pricing.plans.essential.name}</h3>
              <p className="text-slate-400 text-sm">
                {pricing.plans.essential.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">{pricing.plans.essential.pricing.monthly}</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <div className="text-slate-400 text-sm">
                {pricing.plans.essential.pricing.yearly}/month when billed annually
              </div>
              <div className="text-slate-400 text-xs mt-1 italic">
                {pricing.plans.essential.pricing.taxes}
              </div>
              <div className="text-emerald-400 text-sm font-medium mt-2">
                {pricing.plans.essential.pricing.savings}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {pricing.plans.essential.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-white rounded-lg font-semibold transition-all duration-300 group-hover:border-blue-500/50">
              {pricing.plans.essential.cta}
            </button>
            <div className="text-center text-slate-500 text-sm mt-3">
              {pricing.plans.essential.note} • No credit card required
            </div>
          </div>

          {/* Plan Growth (RECOMENDADO) */}
          <div id="growth" className="group relative p-8 bg-gradient-to-b from-slate-800/40 to-slate-900/40 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20 scale-105 scroll-mt-28">
            {/* Badge recomendado */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-400/30">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold text-white">
                  {pricing.plans.growth.popularBadge}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-4">
                <span className="text-sm font-medium text-blue-300">
                  {pricing.plans.growth.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{pricing.plans.growth.name}</h3>
              <p className="text-slate-400 text-sm">
                {pricing.plans.growth.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">{pricing.plans.growth.pricing.monthly}</span>
                <span className="text-slate-400 ml-2">/month</span>
              </div>
              <div className="text-slate-400 text-sm">
                {pricing.plans.growth.pricing.yearly}/month when billed annually
              </div>
              <div className="text-slate-400 text-xs mt-1 italic">
                {pricing.plans.essential.pricing.taxes}
              </div>
              <div className="text-emerald-400 text-sm font-medium mt-2">
                {pricing.plans.growth.pricing.savings}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {pricing.plans.growth.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30">
              {pricing.plans.growth.cta}
            </button>
            <div className="text-center text-slate-500 text-sm mt-3">
              {pricing.plans.growth.note} • All features included
            </div>
          </div>

          {/* Plan Scale */}
          <div id="enterprise" className="group p-8 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-900/10 scroll-mt-28">
            <div className="mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                <span className="text-sm font-medium text-purple-300">
                  {pricing.plans.scale.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{pricing.plans.scale.name}</h3>
              <p className="text-slate-400 text-sm">
                {pricing.plans.scale.description}
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-white">{pricing.plans.scale.pricing.customLabel}</span>
              </div>
              <div className="text-slate-400 text-sm">
                {pricing.plans.scale.pricing.subtitle}
              </div>
              <div className="text-emerald-400 text-sm font-medium mt-2">
                {pricing.plans.scale.pricing.benefits}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {pricing.plans.scale.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  </div>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors border border-purple-500/30">
              {pricing.plans.scale.cta}
            </button>
            <div className="text-center text-slate-500 text-sm mt-3">
              {pricing.plans.scale.note} • Volume discounts • SLA guaranteed
            </div>
          </div>
        </div>

        {/* Tabla de comparación */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.comparison.header.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {pricing.comparison.header.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700/50">
                    <th className="text-left p-6 text-slate-400 font-medium">
                      {pricing.comparison.table.columns.feature}
                    </th>
                    <th className="text-center p-6">
                      <div className="text-blue-300 font-semibold">
                        {pricing.comparison.table.columns.essential.label}
                      </div>
                      <div className="text-slate-500 text-sm">{pricing.comparison.table.columns.essential.price}/month</div>
                    </th>
                    <th className="text-center p-6 bg-slate-800/20">
                      <div className="text-blue-300 font-semibold">{pricing.comparison.table.columns.growth.label}</div>
                      <div className="text-slate-500 text-sm">{pricing.comparison.table.columns.growth.price}/month</div>
                    </th>
                    <th className="text-center p-6">
                      <div className="text-purple-300 font-semibold">{pricing.comparison.table.columns.scale.label}</div>
                      <div className="text-slate-500 text-sm">{pricing.comparison.table.columns.scale.price}</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.comparison.table.rows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-700/50 hover:bg-slate-800/10 transition-colors"
                    >
                      <td className="p-6 text-slate-300 font-medium">
                        {row.feature}
                      </td>
                      <td className="text-center p-6">
                        <div className="text-slate-300">{row.essential}</div>
                      </td>
                      <td className="text-center p-6 bg-slate-800/10">
                        <div className="text-white font-medium">
                          {row.growth}
                        </div>
                      </td>
                      <td className="text-center p-6">
                        <div className="text-slate-300">{row.scale}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <RoiCalculator/>

        {/* Preguntas frecuentes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.faq.header.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {pricing.faq.header.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricing.faq.items.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.question}
                </h3>
                <p className="text-slate-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center p-8 bg-gradient-to-r from-blue-900/20 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-blue-700/30 max-w-3xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                {pricing.finalCta.title}
              </h3>
              <p className="text-slate-300">
                {pricing.finalCta.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#free-trial"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 whitespace-nowrap"
              >
                {pricing.finalCta.actions.primary}
              </a>
              <a
                href="#contact-sales"
                className="bg-transparent border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 whitespace-nowrap"
              >
                {pricing.finalCta.actions.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}