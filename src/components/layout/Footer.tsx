import { Mail, Phone, MapPin, ChevronUp, Landmark, Hospital, Laptop, Store, Building, Book } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import type { Lang } from '@/types';
import LanguageSelector from '../ui/LanguageSelector';
import { DEFAULT_LANG } from '@/config/lang';

export default function Footer() {
  const { lang } = useParams<{ lang: Lang }>();

  const currentLang = lang ?? DEFAULT_LANG

  const { footer } = useTranslation(currentLang);


  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScroll(window.pageYOffset > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const solutionIcons = [<Landmark />, <Hospital />, <Laptop />, <Store />, <Building />, <Book />];

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-full shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
      <div className="relative h-20 -mb-1 overflow-hidden">
        <svg 
            className="absolute bottom-0 w-full h-20" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-slate-950"
            />
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="fill-slate-900"
            />
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35,6.36,119.13-6.29C750.77,35.55,777.39,26.65,806.67,20.6,852.45,10.38,898.81,6.8,945.6,9.42c47.39,2.73,94.39,12.75,140.4,30.4V0Z" 
              opacity=".5" 
              className="fill-slate-800"
            />
        </svg>
      </div>
      <footer className="bg-slate-950 pt-12">
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Columna 1: Logo + descripción */}
            <div className="space-y-6">
              <Link to={`/${lang}`}>
                <img className="w-60" src="./logo.png" alt="logo ShieldGrid365" />
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed">{footer.description}</p>
              <div className="space-y-3">
                {footer.trustBadges.map((badge) => (
                  <div key={badge} className="flex items-center text-slate-400 text-sm">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna 2: Plataforma */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">{footer.platform.title}</h3>
              <ul className="space-y-4">
                {footer.platform.links.map((link) => (
                  <li key={link}>
                    <Link to={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Soluciones */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">{footer.solutions.title}</h3>
              <ul className="space-y-4">
                {footer.solutions.links.map((link, idx) => (
                  <li key={link}>
                    <Link to={`#${link.toLowerCase().replace(/ & /g,'-').replace(' ', '-')}`} className="text-slate-400 hover:text-white text-sm flex items-center gap-2">
                      {solutionIcons[idx]} {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">{footer.contact.title}</h3>
              <ul className="space-y-4">
                <li><a href={`mailto:${footer.contact.email}`} className="flex items-center text-slate-400 hover:text-white text-sm gap-2"><Mail className="w-4 h-4" /> {footer.contact.email}</a></li>
                <li><a href={`tel:${footer.contact.phone}`} className="flex items-center text-slate-400 hover:text-white text-sm gap-2"><Phone className="w-4 h-4" /> {footer.contact.phone}</a></li>
                <li className="flex items-start text-slate-400 text-sm gap-2"><MapPin className="w-4 h-4 mt-0.5" /> <span>{footer.contact.address}</span></li>
              </ul>

              {/* Newsletter */}
              <div className="mt-6 flex gap-2 hidden">
                <input type="email" placeholder={footer.contact.newsletter.placeholder} className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-800 text-white rounded-l-lg focus:outline-none focus:border-blue-500/50" />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-r-lg">{footer.contact.newsletter.button}</button>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 text-sm text-slate-400">
            <span>© {currentYear} ShieldGrid365 Technologies Inc.</span>
            <div className="flex gap-4 hidden">
              {footer.legal.map((link) => (
                <Link key={link} to={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white">{link}</Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <LanguageSelector/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
