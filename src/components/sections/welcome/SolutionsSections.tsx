import {
  Building,
  Hospital,
  Landmark,
  Laptop,
  Store,
  Wrench,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useParams } from "react-router-dom";
import type { Lang } from "@/types";
import { DEFAULT_LANG } from "@/config/lang";

export default function SolutionsSections() {
    const { lang } = useParams<{ lang: Lang }>();

    const currentLang = lang ?? DEFAULT_LANG

    const {
        pages: { welcome:{solutions} },
    } = useTranslation(currentLang);

    return (
        <article className="min-h-screen py-20 px-4 scroll-mt-28" id="solutions">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-sm font-medium text-blue-300">
                {solutions.header.badge}
                </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {solutions.header.title}
                <span className="block text-blue-400">
                {solutions.header.highlight}
                </span>
            </h1>
        
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                {solutions.header.description}
            </p>
        </div>

            {/* Grid industrias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Banking */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-blue-500/10">
                    <Landmark />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full">
                    {solutions.industries.banking.tag}
                </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                {solutions.industries.banking.title}
                </h3>
                <p className="text-slate-300 mb-6 font-light">
                {solutions.industries.banking.description}
                </p>

                <ul className="space-y-3 mb-8">
                    {solutions.industries.banking.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {bullet}
                        </li>
                    ))}
                </ul>

                <div className="pt-6 border-t border-slate-700/50">
                    <div className="text-xs text-slate-500 mb-2">
                        {solutions.industries.banking.successMetric.label}
                    </div>
                    <div className="text-lg font-bold text-white">
                        {solutions.industries.banking.successMetric.value}
                    </div>
                </div>
            </div>

            {/* Healthcare */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-emerald-500/10">
                    <Hospital />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full">
                    {solutions.industries.healthcare.tag}
                </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                {solutions.industries.healthcare.title}
                </h3>

                <p className="text-slate-300 mb-6 font-light">
                {solutions.industries.healthcare.description}
                </p>
                <ul className="space-y-3 mb-8">
                    {solutions.industries.healthcare.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {bullet}
                        </li>
                    ))}
                </ul>
                <div className="pt-6 border-t border-slate-700/50">
                    <div className="text-xs text-slate-500 mb-2">
                        {solutions.industries.healthcare.successMetric.label}
                    </div>
                    <div className="text-lg font-bold text-white">
                        {solutions.industries.healthcare.successMetric.value}
                    </div>
                </div>
            </div>

            {/* Technology */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-purple-500/10">
                    <Laptop />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full">
                    {solutions.industries.technology.tag}
                </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                {solutions.industries.technology.title}
                </h3>

                <p className="text-slate-300 mb-6 font-light">
                {solutions.industries.technology.description}
                </p>
                <ul className="space-y-3 mb-8">
                    {solutions.industries.technology.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                        {bullet}
                        </li>
                    ))}
                </ul>
                <div className="pt-6 border-t border-slate-700/50">
                <div className="text-xs text-slate-500 mb-2">
                    {solutions.industries.technology.successMetric.label}
                </div>
                <div className="text-lg font-bold text-white">
                    {solutions.industries.technology.successMetric.value}
                </div>
                </div>
            </div>

            {/* Retail */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-amber-500/10">
                    <Store />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full">
                    {solutions.industries.retail.tag}
                </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                {solutions.industries.retail.title}
                </h3>

                <p className="text-slate-300 mb-6 font-light">
                {solutions.industries.retail.description}
                </p>
                <ul className="space-y-3 mb-8">
                    {solutions.industries.retail.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                        {bullet}
                        </li>
                    ))}
                </ul>
                <div className="pt-6 border-t border-slate-700/50">
                <div className="text-xs text-slate-500 mb-2">
                    {solutions.industries.retail.successMetric.label}
                </div>
                <div className="text-lg font-bold text-white">
                    {solutions.industries.retail.successMetric.value}
                </div>
                </div>
            </div>

            {/* Manufacturing */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-red-500/10">
                    <Building />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-red-500/20 text-red-300 rounded-full">
                    {solutions.industries.manufacturing.tag}
                </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                {solutions.industries.manufacturing.title}
                </h3>

                <p className="text-slate-300 mb-6 font-light">
                {solutions.industries.manufacturing.description}
                </p>
                <ul className="space-y-3 mb-8">
                    {solutions.industries.manufacturing.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></div>
                        {bullet}
                        </li>
                    ))}
                </ul>
                <div className="pt-6 border-t border-slate-700/50">
                <div className="text-xs text-slate-500 mb-2">
                    {solutions.industries.manufacturing.successMetric.label}
                </div>
                <div className="text-lg font-bold text-white">
                    {solutions.industries.manufacturing.successMetric.value}
                </div>
                </div>
            </div>

            {/* Custom */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl border-dashed">
                <div className="flex items-center justify-between mb-6">
                <div className="inline-flex p-3 rounded-xl bg-cyan-500/10">
                    <Wrench />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full">
                    {solutions.industries.custom.tag}
                </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                {solutions.industries.custom.title}
                </h3>

                <p className="text-slate-300 mb-6 font-light">
                {solutions.industries.custom.description}
                </p>
                <ul className="space-y-3 mb-8">
                    {solutions.industries.custom.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                        {bullet}
                        </li>
                    ))}
                </ul>
                <div className="pt-6 border-t border-slate-700/50">
                <a
                    href="#contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                >
                    {solutions.industries.custom.cta}
                    <span className="ml-2">→</span>
                </a>
                </div>
            </div>
            </div>

            {/* Results */}
            <div className="mb-20 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                    {solutions.results.title}
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    {solutions.results.description}
                </p>
                 {/* Tarjetas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    {solutions.results.items.map((item) => (
                    <div
                        key={item.value}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="text-3xl font-bold text-blue-400 mb-2">
                        {item.value}
                        </div>
                        <div className="text-white font-semibold text-lg mb-1">
                        {item.title}
                        </div>
                        <div className="text-slate-300 text-sm">
                        {item.description}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* CTA */}
            <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center p-8 bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 max-w-3xl mx-auto">
                    <div className="text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {solutions.cta.title}
                    </h3>
                    <p className="text-slate-300">{solutions.cta.description}</p>
                    </div>
                    <a
                    href="#contact"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg"
                    >
                    {solutions.cta.action}
                    </a>
                </div>
            </div>
        </div>
        </article>
    );
}
