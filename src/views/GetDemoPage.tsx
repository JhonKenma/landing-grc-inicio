import { useParams } from "react-router-dom";
import { 
  Phone,
  Shield,
  Users,
  Zap,
  Target
} from "lucide-react";
import DemoForm from "@/components/forms/DemoForm";
import { useTranslation } from "@/hooks/useTranslation";
import type { Lang } from "@/types";

const GetDemoPage = () => {
    //Lee el idioma desde la URL.
  const { lang = "en" } = useParams<{ lang: Lang }>()

  //Elegir el diccionario correcto
  const { pages:{demo: demoPage}} = useTranslation(lang)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <span className="text-sm font-medium text-blue-300">
                  {demoPage.badge}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                {demoPage.title}
              </h1>
              <p className="text-xl text-slate-300">
                {demoPage.subtitle}
              </p>
            </div>

            <div className="bg-slate-950 shadow-blue-950/25 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-slate-700/50">
              <DemoForm/> 
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 backdrop-blur-md rounded-2xl border border-blue-700/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-blue-400" />
                {demoPage.contactTitle}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-slate-400 mb-2">
                    {demoPage.callLabel}
                  </div>
                  <a href="tel:+18135954933" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                    +1 (813) 595-4933
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-slate-400 mb-2">
                    {demoPage.salesEmailLabel}
                  </div>
                  <a href="mailto:sales@shieldgrid365.com" className="text-xl text-blue-400 hover:text-blue-300 transition-colors">
                    sales@shieldgrid365.com
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-slate-400 mb-2">
                    {demoPage.hoursLabel}
                  </div>
                  <p className="text-white">{demoPage.hours}</p>
                  <p className="text-slate-300 text-sm">{demoPage.spanishSupport}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-700/30">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {demoPage.internationalNumbers}
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">{demoPage.countries.spain}</div>
                    <div className="text-white">+34 900 123 456</div>
                  </div>
                  <div>
                    <div className="text-slate-400">{demoPage.countries.mexico}</div>
                    <div className="text-white">+52 800 123 4567</div>
                  </div>
                  <div>
                    <div className="text-slate-400">{demoPage.countries.uk}</div>
                    <div className="text-white">+44 800 123 4567</div>
                  </div>
                  <div>
                    <div className="text-slate-400">{demoPage.countries.australia}</div>
                    <div className="text-white">+61 1800 123 456</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {demoPage.whatToExpectTitle}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {demoPage.personalizedDemo.title}
                    </h4>
                    <p className="text-slate-300">
                      {demoPage.personalizedDemo.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {demoPage.dedicatedExpert.title}
                    </h4>
                    <p className="text-slate-300">
                      {demoPage.dedicatedExpert.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {demoPage.caseAnalysis.title}
                    </h4>
                    <p className="text-slate-300">
                      {demoPage.caseAnalysis.description}
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <BarChart className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {demoPage.roiEstimate.title}
                    </h4>
                    <p className="text-slate-300">
                      {demoPage.roiEstimate.description}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Trust Indicators Card */}
            <div className="bg-gradient-to-br from-emerald-900/20 to-slate-900/40 backdrop-blur-md rounded-2xl border border-emerald-700/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {demoPage.whyChooseTitle}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">99.9%</div>
                  <div className="text-sm text-slate-300">
                    {demoPage.uptime}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">24h</div>
                  <div className="text-sm text-slate-300">
                    {demoPage.responseTime}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
                  <div className="text-sm text-slate-300">
                    {demoPage.companiesTrust}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                  <div className="text-sm text-slate-300">
                    {demoPage.satisfaction}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-emerald-700/30">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {demoPage.certifiedSecurity}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {demoPage.certifications}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDemoPage;