import { DEFAULT_LANG } from "@/config/lang";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/types";
import { Bell, Book, ChartColumn, FileStack, Hammer,LifeBuoy, NotebookPen, Smartphone, Video } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function ResourcesSection() {
  // Lee el idioma desde la URL.
  const { lang } = useParams<{ lang: Lang }>();

  const currentLang = lang ?? DEFAULT_LANG

  // Elegir el diccionario correcto
  const {
    pages: {
      welcome: { resources },
    },
  } = useTranslation(currentLang);

  return (
    <article className="min-h-screen py-20 px-4 scroll-mt-28" id="resources">
      <div className="max-w-7xl mx-auto">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-cyan-300">
              {resources.header.badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {resources.header.title}
            <span className="block text-cyan-400">{resources.header.highlight}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            {resources.header.description}
          </p>
        </div>

        {/* Grid de recursos principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

          {/* Blog & Insights */}
          <div
            id="blog"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-cyan-500/50 hover:translate-y-[-5px] scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-cyan-500/10 mb-6">
              <div className="text-2xl"><NotebookPen /></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
              {resources.sections.blog.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light">
              {resources.sections.blog.description}
            </p>

            <div className="space-y-4 mb-8">
              {resources.sections.blog.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50"
                >
                  <div className="flex items-center text-xs text-slate-500 mb-2">
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-cyan-400 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="text-white font-medium mb-2">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#blog"
              className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
            >
              {resources.sections.blog.cta} <span className="ml-2">→</span>
            </a>
          </div>

          {/* Webinars & Events */}
          <div
            id="webinars"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-purple-500/50 hover:translate-y-[-5px] scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-purple-500/10 mb-6">
              <div className="text-2xl"><Video /></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
              {resources.sections.webinars.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light">
              {resources.sections.webinars.description}
            </p>

            <div className="space-y-4 mb-8">
              {resources.sections.webinars.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-medium ${
                        item.status === "upcoming"
                          ? "text-purple-400"
                          : "text-slate-400"
                      }`}
                    >
                      {item.status === "upcoming"
                        ? "UPCOMING"
                        : "RECORDING AVAILABLE"}
                    </span>

                    <span className="text-xs text-slate-500">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-white font-medium mb-2">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.summary}
                  </p>

                  <Link
                    to={item.action.to}
                    className={`mt-3 w-full py-2 text-sm rounded-lg transition-colors block text-center ${
                      item.status === "upcoming"
                        ? "bg-purple-600/20 hover:bg-purple-600/30 text-purple-300"
                        : "bg-slate-700/50 hover:bg-slate-700/70 text-slate-300"
                    }`}
                  >
                    {item.action.value}
                  </Link>
                </div>
              ))}
            </div>

            <a
              href="#webinars"
              className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              {resources.sections.webinars.cta} <span className="ml-2">→</span>
            </a>
          </div>

          {/* Documentation */}
          <div
            id="documentation"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:translate-y-[-5px] scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-blue-500/10 mb-6">
              <div className="text-2xl"><FileStack /></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
              {resources.sections.documentation.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light">
              {resources.sections.documentation.description}
            </p>

            <div className="space-y-3 mb-8">
              {resources.sections.documentation.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center p-3 bg-slate-800/30 hover:bg-slate-800/50 rounded-lg transition-colors group/item"
                >
                  <div className="text-blue-400 mr-3">📄</div>

                  <div className="flex-1">
                    <div className="text-white font-medium">
                      {item.title}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {item.description}
                    </div>
                  </div>

                  <div className="text-slate-500 group-hover/item:text-blue-400 transition-colors">
                    →
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#docs"
              className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              {resources.sections.documentation.cta} <span className="ml-2">→</span>
            </a>
          </div>

          {/* Case Studies */}
          <div
            id="case-studies"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-emerald-500/50 hover:translate-y-[-5px] scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-emerald-500/10 mb-6">
              <div className="text-2xl"><ChartColumn /></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
              {resources.sections.caseStudies.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light">
              {resources.sections.caseStudies.description}
            </p>

            <div className="space-y-4 mb-8">
              {resources.sections.caseStudies.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-emerald-300 font-bold">
                        {item.company.slice(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <div>
                      <div className="text-white font-medium">
                        {item.company}
                      </div>
                      <div className="text-slate-500 text-xs">
                        {item.industry}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-white font-medium mb-2">
                    {item.metric}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#cases"
              className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              {resources.sections.caseStudies.cta} <span className="ml-2">→</span>
            </a>
          </div>

          {/* Tools */}
          <div
            id="tools"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-amber-500/50 hover:translate-y-[-5px] scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-amber-500/10 mb-6">
              <div className="text-2xl"><Hammer /></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
              {resources.sections.tools.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light">
              {resources.sections.tools.description}
            </p>

            <div className="space-y-4 mb-8">
              {resources.sections.tools.items.map((item) => (
                <a
                  key={item.id}
                  href={item.href ?? "#"}
                  className="flex items-start p-4 bg-slate-800/30 hover:bg-slate-800/50 rounded-lg border border-slate-700/50 transition-colors group/item"
                >
                  <div className="text-amber-400 mr-3 mt-1">
                    {item.icon === "smartphone" && <Smartphone />}
                    {item.icon === "bell" && <Bell />}
                    {item.icon === "hammer" && <Hammer />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-medium">
                        {item.title}
                      </h4>

                      {item.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-400 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="text-slate-500 group-hover/item:text-amber-400 transition-colors ml-2">
                    →
                  </div>
                </a>
              ))}
            </div>

            {resources.sections.tools.cta && (
              <a
                href="#tools"
                className="inline-flex items-center text-sm font-medium text-amber-400 hover:text-amber-300"
              >
                {resources.sections.tools.cta} <span className="ml-2">→</span>
              </a>
            )}
          </div>

          {/* Support */}
          <div
            id="support"
            className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl transition-all duration-300 hover:border-rose-500/50 hover:translate-y-[-5px] scroll-mt-28"
          >
            <div className="inline-flex p-4 rounded-2xl bg-rose-500/10 mb-6">
              <div className="text-2xl"><LifeBuoy /></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-300 transition-colors">
              {resources.sections.support.title}
            </h3>

            <p className="text-slate-300 mb-6 font-light">
              {resources.sections.support.description}
            </p>

            <div className="space-y-3 mb-8">
              {resources.sections.support.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center p-4 bg-slate-800/30 hover:bg-slate-800/50 rounded-lg transition-colors group/item"
                >
                  <div className="flex-1">
                    <div className="text-white font-medium">
                      {item.title}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {item.subtitle}
                    </div>
                  </div>

                  <div className="text-slate-500 group-hover/item:text-rose-400 transition-colors">
                    →
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">
                {resources.sections.support.sla}
              </span>

              <a
                href="#support"
                className="text-rose-400 hover:text-rose-300 font-medium"
              >
                Contact support →
              </a>
            </div>
          </div>


        </div>



        



        

        {/* Featured Resource - eBook o Whitepaper */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                  <span className="text-sm font-medium text-cyan-300">
                    {resources.featuredResource.badge}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {resources.featuredResource.title}
                </h2>
                <p className="text-slate-300 mb-6">
                  {resources.featuredResource.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {resources.featuredResource.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    {resources.featuredResource.actions.primary}
                  </button>
                  <button className="bg-transparent border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    {resources.featuredResource.actions.secondary}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-900/20 to-slate-900/40 rounded-xl border border-cyan-700/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4"><Book className="m-auto" size={50}/></div>
                    <div className="text-white font-bold text-xl mb-2">
                      {resources.featuredResource.meta.label}
                    </div>
                    <div className="text-slate-300">
                      {resources.featuredResource.meta.pages} Pages • {resources.featuredResource.meta.format} Download
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              {resources.newsletter.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              {resources.newsletter.description}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={resources.newsletter.placeholder}
                className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button className="bg-cyan-600 t hover:bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
                {resources.newsletter.button}
              </button>
            </div>
            <p className="text-center text-slate-500 text-sm mt-4">
              {resources.newsletter.privacyText}{" "}
              <a href="#privacy" className="text-cyan-400 hover:text-cyan-300">
                {resources.newsletter.privacyLink}
              </a>
            </p>
          </div>
        </div>

        {/* CTA específico para Resources */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center p-8 bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 max-w-3xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                {resources.finalCta.title}
              </h3>
              <p className="text-slate-300">
                {resources.finalCta.description}
              </p>
            </div>
            <a
              href="#contact-resources"
              className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {resources.finalCta.action}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}