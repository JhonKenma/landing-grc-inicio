import { Globe } from 'lucide-react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { LANGS} from '@/types';

 export default function LanguageSelector(){
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    const newLang = e.target.value;

    const langRegex = new RegExp(
      `^/(${LANGS.join("|")})`
    );

    const pathWithoutLang = location.pathname.replace(langRegex, "");

    navigate(`/${newLang}${pathWithoutLang}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <select
        value={lang}
        onChange={handleChange}
        className="bg-slate-900 text-white text-sm px-2 py-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
         {LANGS.map((lng) => (
            <option key={lng} value={lng}>
              {lng.toUpperCase()}
            </option>
          ))}
      </select>
    </div>
  );
};
