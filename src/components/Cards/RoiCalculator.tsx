import { useState, useMemo } from "react";
import { DEFAULT_LANG } from "@/config/lang";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/types";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function RoiCalculator() {
    const { lang } = useParams<{ lang: Lang }>();
    const currentLang = lang ?? DEFAULT_LANG;

    const {
        pages: {
            welcome: {
                pricing: { roi },
            },
        },
    } = useTranslation(currentLang);

    // -------------------------
    // State
    // -------------------------
    const [employees, setEmployees] = useState(100);
    const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

    // -------------------------
    // Config from JSON
    // -------------------------
    const { costPerHour, automationSavingsRate, monthlyPlatformCost } =
        roi.calculation;
    const hoursPerFramework = roi.inputs.frameworks.hoursPerFramework;

    const hasFrameworks = selectedFrameworks.length > 0;

    // -------------------------
    // Calculations
    // -------------------------
    const annualSavings = useMemo(() => {
        if (!hasFrameworks) return 0;
        return Math.round(
            employees *
                selectedFrameworks.length *
                hoursPerFramework *
                costPerHour *
                automationSavingsRate
        );
    }, [
        employees,
        selectedFrameworks,
        hoursPerFramework,
        costPerHour,
        automationSavingsRate,
        hasFrameworks,
    ]);

    const roiTimeline = useMemo(() => {
        if (!hasFrameworks || annualSavings === 0) return 0;
        return Number((monthlyPlatformCost / (annualSavings / 12)).toFixed(2));
    }, [annualSavings, monthlyPlatformCost, hasFrameworks]);

    const averageRoi = useMemo(() => {
        if (!hasFrameworks || annualSavings === 0) return "—";
        return `${Math.round(annualSavings / (monthlyPlatformCost * 12))}x`;
    }, [annualSavings, monthlyPlatformCost, hasFrameworks]);

    // -------------------------
    // Handlers
    // -------------------------
    const toggleFramework = (fw: string) => {
        setSelectedFrameworks((prev) => {
            const newSelection = prev.includes(fw)
                ? prev.filter((f) => f !== fw)
                : [...prev, fw];

            if (newSelection.length === 0) {
                toast.warning("Select at least one framework to calculate ROI", {
                    theme: "dark",
                });
            }

            return newSelection;
        });
    };

    const handleEmployeesChange = (value: number) => {
        if (!hasFrameworks) {
            toast.warning("Select at least one framework to calculate ROI", {
                theme: "dark",
            });
        }
        setEmployees(value);
    };

    // -------------------------
    // UI
    // -------------------------
    return (
        <div className="mb-20">
            <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {roi.title}
                        </h2>
                        <p className="text-slate-300 mb-6">{roi.description}</p>

                        <div className="space-y-6">

                            {/* Employees */}
                            <div>
                                <label className="block text-slate-400 text-sm mb-2">
                                    {roi.inputs.employees.label}
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type="range"
                                        min={roi.inputs.employees.min}
                                        max={roi.inputs.employees.max}
                                        value={employees}
                                        onChange={(e) =>
                                            handleEmployeesChange(Number(e.target.value))
                                        }
                                        className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <span className="ml-4 text-white font-semibold">
                                        {employees}
                                    </span>
                                </div>
                            </div>

                            {/* Frameworks */}
                            <div>
                                <label className="block text-slate-400 text-sm mb-2">
                                    {roi.inputs.frameworks.label}
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {roi.inputs.frameworks.options.map((framework) => {
                                        const active = selectedFrameworks.includes(framework);
                                        return (
                                            <button
                                                key={framework}
                                                onClick={() => toggleFramework(framework)}
                                                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                                                    active
                                                        ? "bg-emerald-600 text-white"
                                                        : "bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                                                }`}
                                            >
                                                {framework}
                                            </button>
                                        );
                                    })}
                                </div>
                                {!hasFrameworks && (
                                    <p className="mt-3 text-sm text-amber-400">
                                        Select at least one framework to calculate ROI
                                    </p>
                                )}
                            </div>

                            {/* Results */}
                            <div className="pt-4 border-t border-slate-700/50">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-slate-400 text-sm">
                                            {roi.results.savingsLabel}
                                        </div>
                                        <div className="text-3xl font-bold text-emerald-400">
                                            ${annualSavings.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-slate-400 text-sm">
                                            {roi.results.timelineLabel}
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {roiTimeline < 1 && hasFrameworks
                                                ? "< 1 month"
                                                : `${roiTimeline} months`}
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-emerald-900/20 to-slate-900/40 rounded-xl border border-emerald-700/30 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="text-6xl mb-4">💰</div>
                                <div className="text-white font-bold text-xl mb-2">
                                    {roi.results.averageRoi.label}
                                </div>
                                <div className="text-5xl font-bold text-emerald-400 mb-2">
                                    {averageRoi}
                                </div>
                                <div className="text-slate-300">
                                    {roi.results.averageRoi.description}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
