import type { DemoFormData } from "@/types";
import {
    Building,
    Globe,
    Mail,
    MessageSquare,
    Phone,
    User,
    Briefcase,
    Factory,
    Users,
    Target,
    Shield,
    Lock,
    CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomSelect from "../ui/CustomSelect";
import { companySizeOptions, country, countryOptions, industryOptions, jobTitleOptions, useCaseOptions } from "@/data";
import { useParams } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/types";
import { DEFAULT_LANG } from "@/config/lang";

export default function DemoForm() {
    //Lee el idioma desde la URL.
    const { lang } = useParams<{ lang: Lang }>()

    const currentLang = lang ?? DEFAULT_LANG

    //Elegir el diccionario correcto
    const { pages:{ demo:{from : t} } } = useTranslation(currentLang)

    const [formData, setFormData] = useState<DemoFormData>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        country: "",
        jobTitle: "",
        companySize: "",
        industry: "",
        useCase: "",
        message: "",
        agreedToTerms: false,
        countryCode: "+51",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSelectChange = (value: string, name: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => { 
        const newErrors = {...prev}; 
        delete newErrors[name]; 
        return newErrors; 
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
        }));
        if (errors[name]) setErrors(prev => { 
        const newErrors = {...prev}; 
        delete newErrors[name]; 
        return newErrors; 
        });
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = t.requiredField;
        if (!formData.lastName.trim()) newErrors.lastName = t.requiredField;
        if (!formData.email.trim()) {
        newErrors.email = t.requiredField;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = t.invalidEmail;
        }
        if (!formData.company.trim()) newErrors.company = t.requiredField;
        if (!formData.jobTitle) newErrors.jobTitle = t.requiredField;
        if (!formData.companySize) newErrors.companySize = t.requiredField;
        if (!formData.industry) newErrors.industry = t.requiredField;
        if (!formData.useCase) newErrors.useCase = t.requiredField;
        if (!formData.phone.trim()) newErrors.phone = t.requiredField;
        if (!formData.country) newErrors.country = t.requiredField;
        if (!formData.agreedToTerms) newErrors.agreedToTerms = t.requiredField;

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast.error(t.requiredField, { theme: "dark" });
        return;
        }

        setIsSubmitting(true);
        try {
        // Simulación de envío de datos
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Form data submitted:", formData);

        toast.success(t.successMessage, { theme: "dark" });

        // Resetear formulario
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            country: "",
            jobTitle: "",
            companySize: "",
            industry: "",
            useCase: "",
            message: "",
            agreedToTerms: false,
            countryCode: "+51",
        });
        setErrors({});
        } catch (error) {
        toast.error(t.errorMessage, { theme: "dark" });
        console.error("Submission error:", error);
        } finally {
        setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                <User className="inline w-4 h-4 mr-2" />
                {t.firstNameLabel} *
            </label>
            <div className="relative">
                <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder={t.firstNamePlaceholder}
                />
            </div>
            {errors.firstName && (
                <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>
            )}
            </div>
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                {t.lastNameLabel} *
            </label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder={t.lastNamePlaceholder}
            />
            {errors.lastName && (
                <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>
            )}
            </div>
        </div>

        {/* Email */}
        <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
            <Mail className="inline w-4 h-4 mr-2" />
            {t.emailLabel} *
            </label>
            <div className="relative">
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder={t.emailPlaceholder}
            />
            </div>
            {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
        </div>

        {/* Company */}
        <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
            <Building className="inline w-4 h-4 mr-2" />
            {t.companyLabel} *
            </label>
            <div className="relative">
            <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder={t.companyPlaceholder}
            />
            </div>
            {errors.company && (
            <p className="mt-1 text-sm text-red-400">{errors.company}</p>
            )}
        </div>

        {/* Job Title & Company Size */}
        <div className="grid md:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                <Briefcase className="inline w-4 h-4 mr-2" />
                {t.jobTitleLabel} *
            </label>
            <CustomSelect
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleSelectChange}
                options={jobTitleOptions}
                required
                placeholder={t.jobTitlePlaceholder}
                error={errors.jobTitle}
                variant="primary"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                <Users className="inline w-4 h-4 mr-2" />
                {t.companySizeLabel} *
            </label>
            <CustomSelect
                name="companySize"
                value={formData.companySize}
                onChange={handleSelectChange}
                options={companySizeOptions}
                required
                placeholder={t.companySizePlaceholder}
                error={errors.companySize}
            />
            </div>
        </div>

        {/* Industry & Use Case */}
        <div className="grid md:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                <Factory className="inline w-4 h-4 mr-2" />
                {t.industryLabel} *
            </label>
            <CustomSelect
                name="industry"
                value={formData.industry}
                onChange={handleSelectChange}
                options={industryOptions}
                required
                placeholder={t.industryPlaceholder}
                error={errors.industry}
                variant="secondary"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                <Target className="inline w-4 h-4 mr-2" />
                {t.useCaseLabel} *
            </label>
            <CustomSelect
                name="useCase"
                value={formData.useCase}
                onChange={handleSelectChange}
                options={useCaseOptions}
                required
                placeholder={t.useCasePlaceholder}
                error={errors.useCase}
                variant="primary"
            />
            </div>
        </div>

        {/* Phone & Country */}
        <div className="flex flex-col gap-4">
            <div>
            {/* Phone con Country Code */}
            <label className="block text-sm font-medium text-slate-300 mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                {t.phoneLabel} *
            </label>
            <div className="flex gap-2">
                {/* Select de Código de País */}
                <div className="w-28">
                <CustomSelect
                    name="countryCode"
                    value={formData.countryCode || "+51"}
                    onChange={handleSelectChange}
                    options={country}
                    placeholder="+51"
                    icon={<Globe className="w-4 h-4" />}
                    variant="primary"
                />
                </div>

                {/* Input del teléfono */}
                <div className="flex-1 relative">
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder={t.phonePlaceholder.replace("+1 (555) 123-4567", "987654321")}
                />
                </div>
            </div>

            {/* Validaciones */}
            {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
            )}
            </div>
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
                <Globe className="inline w-4 h-4 mr-2" />
                {t.countryLabel} *
            </label>
            <CustomSelect
                name="country"
                value={formData.country}
                onChange={handleSelectChange}
                options={countryOptions}
                required
                placeholder={t.jobTitlePlaceholder.replace("cargo", "país")}
                error={errors.country}
            />
            </div>
        </div>

        {/* Message */}
        <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
            <MessageSquare className="inline w-4 h-4 mr-2" />
            {t.messageLabel}
            </label>
            <div className="relative">
            <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                placeholder={t.messagePlaceholder}
            />
            </div>
        </div>

        {/* Terms */}
        <div className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
            <div className="flex items-center h-5">
            <input
                type="checkbox"
                id="terms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleInputChange}
                required
                className="w-4 h-4 rounded border-slate-600 bg-slate-800/50 text-blue-500 focus:ring-blue-500/50 focus:ring-2"
            />
            </div>
            <label htmlFor="terms" className="text-sm text-slate-300">
            {t.termsText}{" "}
            <a
                href="/privacy"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
                {t.privacyPolicy}
            </a>
            . {t.messageLabel.includes("adicional") ? "Puedo darme de baja en cualquier momento." : "I can unsubscribe at any time."}
            {errors.agreedToTerms && (
                <p className="mt-1 text-sm text-red-400">{errors.agreedToTerms}</p>
            )}
            </label>
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3
            bg-blue-600 hover:bg-blue-700
            text-white font-semibold
            rounded-lg
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center
            cursor-pointer"
        >
            {isSubmitting ? (
            <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                {t.submittingButton}
            </>
            ) : (
            <>
                {t.submitButton}
                {/* <ArrowRight className="ml-2 w-5 h-5" /> */}
            </>
            )}
        </button>

        {/* Additional Info */}
        <div className="text-center space-y-2">
            <p className="text-slate-400 text-sm">
            <CheckCircle className="inline w-4 h-4 text-emerald-400 mr-1" />
            <span className="text-emerald-400 font-medium">
                {t.responseGuarantee}
            </span>
            </p>
            <p className="text-slate-500 text-xs">
            {t.teamContact}
            </p>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-4 border-t border-slate-700/30">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>{t.secureConnection}</span>
            <Lock className="w-3 h-3 text-emerald-400" />
        </div>
        </form>
    );
}