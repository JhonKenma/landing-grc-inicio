// components/ui/CustomSelect.tsx
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Search } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  label?: string; // Cambiar a opcional
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  options: SelectOption[];
  required?: boolean;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
}

const CustomSelect = ({
  label, // Ahora es opcional
  name,
  value,
  onChange,
  options,
  required = false,
  placeholder = "Seleccionar opción",
  error,
  disabled = false,
  className = "",
  icon,
  variant = "default",
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus en search cuando se abre
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  const filteredOptions = search
    ? options.filter(option =>
        option.label.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const handleSelect = (optionValue: string) => {
    onChange(optionValue, name);
    setIsOpen(false);
    setSearch("");
  };

  const variantStyles = {
    default: "bg-slate-800/50 border-slate-700/50 focus:ring-blue-500/50 focus:border-blue-500/50",
    primary: "bg-blue-900/20 border-blue-700/30 focus:ring-blue-500 focus:border-blue-500",
    secondary: "bg-emerald-900/20 border-emerald-700/30 focus:ring-emerald-500 focus:border-emerald-500",
  };

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {/* Label - Solo mostrar si existe */}
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-2">
          {icon && <span className="inline-flex items-center mr-2">{icon}</span>}
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Select Button (Trigger) */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full px-4 py-3 rounded-lg text-left transition-all duration-200
          flex items-center justify-between
          ${variantStyles[variant]}
          border
          ${error ? "border-red-500/50" : ""}
          ${disabled 
            ? "opacity-50 cursor-not-allowed" 
            : "hover:border-slate-600/70 cursor-pointer"
          }
          ${isOpen ? "ring-2 ring-blue-500/30 border-blue-500/50" : ""}
        `}
      >
        <div className="flex items-center gap-3">
          {selectedOption?.icon && (
            <span className="text-slate-400">{selectedOption.icon}</span>
          )}
          <span className={`truncate ${selectedOption ? "text-white" : "text-slate-400"}`}>
            {selectedOption?.label || placeholder}
          </span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
          <span className="w-4 h-4">⚠️</span>
          {error}
        </p>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-slate-800 border border-slate-700/50 rounded-lg shadow-2xl shadow-black/30 backdrop-blur-sm overflow-hidden animate-fadeIn">
          {/* Search Input */}
          <div className="p-2 border-b border-slate-700/50">
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar"
                className="w-full px-3 py-2 bg-slate-900/70 border border-slate-700/30 rounded text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-500" />
            </div>
          </div>

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`
                    w-full px-4 py-3 text-left flex items-center justify-between
                    transition-all duration-150
                    hover:bg-slate-700/50 active:bg-slate-700/70
                    ${option.value === value ? "bg-blue-900/30" : ""}
                  `}
                >
                  <div className="flex items-center gap-3">
                    {option.icon && (
                      <span className="text-slate-400">{option.icon}</span>
                    )}
                    <span className={`${option.value === value ? "text-white font-medium" : "text-slate-300"}`}>
                      {option.label}
                    </span>
                  </div>
                  {option.value === value && (
                    <Check className="w-4 h-4 text-blue-400" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-center text-slate-500 text-sm">
                No se encontraron resultados
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-2 border-t border-slate-700/50 bg-slate-900/30">
            <div className="text-xs text-slate-500 text-center">
              {filteredOptions.length} de {options.length} opciones
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;