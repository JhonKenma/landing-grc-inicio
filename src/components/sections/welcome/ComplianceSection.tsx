import { DEFAULT_LANG } from "@/config/lang";
import { globalCompliance } from "@/data";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/types";
import { CreditCard, Euro, Globe, Hospital, Lock, Shield, SquareChartGantt, Zap } from "lucide-react";
import { useParams } from "react-router-dom";

export default function ComplianceSection() {
  
  type StepColor = "blue" | "emerald" | "amber" | "purple";

  const iconColorMap: Record<StepColor, string> = {
    blue: "text-blue-500",
    emerald: "text-emerald-500",
    amber: "text-amber-500",
    purple: "text-purple-500",
  } as const;

  // Lee el idioma desde la URL.
  const { lang } = useParams<{ lang: Lang }>();

  const currentLang = lang ?? DEFAULT_LANG
  // Elegir el diccionario correcto
  const {
    pages: {
      welcome: { compliance },
    },
  } = useTranslation(currentLang);

  return (
    <article className="min-h-screen py-20 px-4" id="compliance">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-emerald-300">
              {compliance.header.badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {compliance.header.title}
            <span className="block text-emerald-400">{compliance.header.highlight}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {compliance.header.description}
          </p>
        </div>

        {/* Mapa de regulaciones global */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {compliance.globalCoverage.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {compliance.globalCoverage.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* GDPR - Europe */}
            <div
              id="gdpr"
              className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">🇪🇺</div>
                <span className="px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full">
                  {compliance.globalCoverage.primaryFrameworks.gdpr.region}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {compliance.globalCoverage.primaryFrameworks.gdpr.tag}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {compliance.globalCoverage.primaryFrameworks.gdpr.title} - {compliance.globalCoverage.primaryFrameworks.gdpr.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Coverage</span>
                  <span className="text-sm font-medium text-emerald-400">
                    {compliance.globalCoverage.primaryFrameworks.gdpr.coverage}
                  </span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[98%]"></div>
                </div>
              </div>
            </div>

            {/* HIPAA - US Healthcare  ☠️*/}
            {/* <div
              id="hipaa"
              className="group hidden p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-emerald-500/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">🇺🇸</div>
                <span className="px-2 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full">
                  {compliance.globalCoverage.primaryFrameworks.hipaa.region}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {compliance.globalCoverage.primaryFrameworks.hipaa.tag}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {compliance.globalCoverage.primaryFrameworks.hipaa.title}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Coverage</span>
                  <span className="text-sm font-medium text-emerald-400">
                    {compliance.globalCoverage.primaryFrameworks.hipaa.coverage}
                  </span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full"></div>
                </div>
              </div>
            </div> */}

            {/* SOC 2 */}
            <div className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-purple-500/50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">
                  <Lock/>
                </div>
                <span className="px-2 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full">
                  {compliance.globalCoverage.primaryFrameworks.soc2.region}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {compliance.globalCoverage.primaryFrameworks.soc2.tag}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {compliance.globalCoverage.primaryFrameworks.soc2.title} - {compliance.globalCoverage.primaryFrameworks.soc2.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Coverage</span>
                  <span className="text-sm font-medium text-emerald-400">
                    {compliance.globalCoverage.primaryFrameworks.soc2.coverage}
                  </span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[95%]"></div>
                </div>
              </div>
            </div>

            {/* ISO 42001 */}
            <div
              id="iso42001"
              className="group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-amber-500/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">
                  <Globe/>
                </div>
                <span className="px-2 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full">
                  {compliance.globalCoverage.primaryFrameworks.iso42001.region}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {compliance.globalCoverage.primaryFrameworks.iso42001.tag}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {compliance.globalCoverage.primaryFrameworks.iso42001.title}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Coverage</span>
                  <span className="text-sm font-medium text-emerald-400">
                    {compliance.globalCoverage.primaryFrameworks.iso42001.coverage}
                  </span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[96%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Más frameworks en grid 2x2 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              {
                name: "PCI DSS",
                region: "GLOBAL",
                icon: <CreditCard/>,
                coverage: "100%",
                color: "red",
              },
              {
                name: "NIST CSF",
                region: "US",
                icon: <Shield/>,
                coverage: "97%",
                color: "cyan",
              }
            ].map((framework, idx) => (
              <div
                key={idx}
                className={`group p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-${framework.color}-500/50`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{framework.icon}</div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold bg-${framework.color}-500/20 text-${framework.color}-300 rounded-full`}
                  >
                    {framework.region}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {framework.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Coverage</span>
                    <span className="text-sm font-medium text-emerald-400">
                      {framework.coverage}
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-emerald-500`}
                      style={{ width: framework.coverage }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso de automatización */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {compliance.lifecycle.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {compliance.lifecycle.description}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {globalCompliance.map((step, idx) => (
              <div key={idx} className="relative">
                <div
                  className={`p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-center h-full ${step.color === "blue" ? "hover:border-blue-500/50" : step.color === "emerald" ? "hover:border-emerald-500/50" : step.color === "amber" ? "hover:border-amber-500/50" : "hover:border-purple-500/50"}`}
                >
                  <div
                    className={`inline-flex w-12 h-12 rounded-full items-center justify-center text-xl font-bold mb-6 ${step.color === "blue" ? "bg-blue-500/20 text-blue-300" : step.color === "emerald" ? "bg-emerald-500/20 text-emerald-300" : step.color === "amber" ? "bg-amber-500/20 text-amber-300" : "bg-purple-500/20 text-purple-300"}`}
                  >
                    {step.step}
                  </div>
                  <div
                    className={`text-3xl mb-4 flex justify-center ${iconColorMap[step.color]}`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparativa Manual vs Automatizado */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {compliance.comparison.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {compliance.comparison.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="grid md:grid-cols-2 divide-x divide-slate-700/50">

              {/* Columna Manual */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-red-400">
                    {compliance.comparison.manual.title}
                  </h3>
                  <div className="text-3xl">
                    <SquareChartGantt />
                  </div>
                </div>

                <div className="space-y-6">
                  {compliance.comparison.manual.items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-slate-700/50">
                    <div className="text-slate-500 text-sm mb-2">
                      {compliance.comparison.manual.timeline.label}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {compliance.comparison.manual.timeline.value}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {compliance.comparison.manual.timeline.note}
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Automatizado */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-emerald-400">
                    {compliance.comparison.automated.title}
                  </h3>
                  <div className="text-3xl">
                    <Zap />
                  </div>
                </div>

                <div className="space-y-6">
                  {compliance.comparison.automated.items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-slate-700/50">
                    <div className="text-slate-500 text-sm mb-2">
                      {compliance.comparison.automated.timeline.label}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {compliance.comparison.automated.timeline.value}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {compliance.comparison.automated.timeline.note}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Certificaciones y asociaciones */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {compliance.certifications.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {compliance.certifications.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "SOC 2 Type II",
                status: "Certified",
                icon: <Shield />,
                color: "emerald",
              },
              {
                name: "ISO 42001",
                status: "Certified",
                icon: <Globe />,
                color: "blue",
              },
              {
                name: "GDPR Compliant",
                status: "Fully Compliant",
                icon: <Euro />,
                color: "purple",
              },
              {
                name: "HIPAA Ready",
                status: "Compliant",
                icon: <Hospital />,
                color: "emerald",
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-slate-800/30 rounded-2xl"
              >
                <div className="text-3xl mb-4 flex justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${cert.color === "emerald" ? "bg-emerald-500/20 text-emerald-300" : cert.color === "blue" ? "bg-blue-500/20 text-blue-300" : "bg-purple-500/20 text-purple-300"}`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full mr-2 ${cert.color === "emerald" ? "bg-emerald-400" : cert.color === "blue" ? "bg-blue-400" : "bg-purple-400"}`}
                  ></div>
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA específico para Compliance */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center p-8 bg-gradient-to-r from-emerald-900/20 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-emerald-700/30 max-w-3xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                {compliance.cta.title}
              </h3>
              <p className="text-slate-300">
                {compliance.cta.description}
              </p>
            </div>
            <a
              href="#compliance-assessment"
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {compliance.cta.action}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}