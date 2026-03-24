import { Award, BarChart, Bell, Building2, BuildingIcon, ChartColumn, CheckCircle, ClipboardCheck, Database, Earth, Factory, FileBarChart, FileCheck, FileText, GalleryVertical, Globe2, GraduationCap, Handshake, Hospital, Landmark, Lock, Rocket, Scale, Settings, Shield, ShieldCheck, ShoppingCart, Siren, Smartphone, UserCircle, UserCog, UserSquare, UsersRound, Wrench, Zap } from "lucide-react";
import { type MenuItem } from "../types";

export const menuItems : MenuItem[] = [
  {
    id: "product",
    children: [
      { id: "overview" },
      { id: "risk" },
      { id: "compliance-automation" },
      { id: "audit" },
      { id: "mobile-app" },
    ],
  },
  {
    id: "solutions",
    children: [
      { id: "banking" },
      { id: "healthcare" },
      { id: "technology" },
      { id: "retail" },
      { id: "manufacturing" },
      { id: "government" },
    ],
  },
  {
    id: "compliance",
    children: [
      // { id: "soc2" },
      { id: "iso42001" },
      { id: "gdpr" },
      // { id: "hipaa" },
      { id: "pci" },
      {id: "dg"}
    ],
  },
  {
    id: "resources",
    children: [
      { id: "blog" },
      { id: "case-studies" },
      { id: "webinars" },
      { id: "documentation" },
      { id: "tools" },
    ],
  },
  {
    id: "pricing",
    children: [
      {id: "essential"},
      {id: "growth"},
      {id: "enterprise"}
    ]
  },
];



export const countryOptions = [
  {
  value: "US",
  label: "United States",
  icon: <span className="text-sm">🇺🇸</span>,
  },
  { value: "CA", label: "Canada", icon: <span className="text-sm">🇨🇦</span> },
  {
  value: "UK",
  label: "United Kingdom",
  icon: <span className="text-sm">🇬🇧</span>,
  },
  {
  value: "DE",
  label: "Germany",
  icon: <span className="text-sm">🇩🇪</span>,
  },
  { value: "FR", label: "France", icon: <span className="text-sm">🇫🇷</span> },
  { value: "ES", label: "Spain", icon: <span className="text-sm">🇪🇸</span> },
  { value: "IT", label: "Italy", icon: <span className="text-sm">🇮🇹</span> },
  {
  value: "AU",
  label: "Australia",
  icon: <span className="text-sm">🇦🇺</span>,
  },
  { value: "JP", label: "Japan", icon: <span className="text-sm">🇯🇵</span> },
  { value: "CN", label: "China", icon: <span className="text-sm">🇨🇳</span> },
  { value: "MX", label: "Mexico", icon: <span className="text-sm">🇲🇽</span> },
  { value: "BR", label: "Brazil", icon: <span className="text-sm">🇧🇷</span> },
  {
  value: "AR",
  label: "Argentina",
  icon: <span className="text-sm">🇦🇷</span>,
  },
  { value: "CL", label: "Chile", icon: <span className="text-sm">🇨🇱</span> },
  {
  value: "CO",
  label: "Colombia",
  icon: <span className="text-sm">🇨🇴</span>,
  },
  { value: "PE", label: "Peru", icon: <span className="text-sm">🇵🇪</span> },
];
export const country = [
  {
      value: "+51",
      label: "+51 ",
      icon: <span className="text-sm">🇵🇪</span>,
  },
  {
      value: "+1",
      label: "+1 ",
      icon: <span className="text-sm">🇺🇸</span>,
  },
  {
      value: "+52",
      label: "+52 ",
      icon: <span className="text-sm">🇲🇽</span>,
  },
]

export const jobTitleOptions = [
  { value: "ciso", label: "CISO", icon: <Shield className="w-4 h-4" /> },
  {
  value: "compliance",
  label: "Compliance Manager",
  icon: <CheckCircle className="w-4 h-4" />,
  },
  {
  value: "risk",
  label: "Risk Manager",
  icon: <BarChart className="w-4 h-4" />,
  },
  {
  value: "security",
  label: "Security Director",
  icon: <Lock className="w-4 h-4" />,
  },
  {
  value: "it",
  label: "IT Director",
  icon: <Database className="w-4 h-4" />,
  },
  {
  value: "legal",
  label: "Legal Counsel",
  icon: <Scale className="w-4 h-4" />,
  },
  {
  value: "operations",
  label: "Operations Manager",
  icon: <Settings className="w-4 h-4" />,
  },
  {
  value: "executive",
  label: "Executive (C-Level)",
  icon: <UserSquare className="w-4 h-4" />,
  },
  { value: "other", label: "Other", icon: <UserCog className="w-4 h-4" /> },
];

export const companySizeOptions = [
    {
    value: "1-10",
    label: "1-10 employees",
    icon: <UserCircle className="w-4 h-4" />,
    },
    {
    value: "11-50",
    label: "11-50 employees",
    icon: <UsersRound className="w-4 h-4" />,
    },
    {
    value: "51-200",
    label: "51-200 employees",
    icon: <BuildingIcon className="w-4 h-4" />,
    },
    {
    value: "201-500",
    label: "201-500 employees",
    icon: <Building2 className="w-4 h-4" />,
    },
    {
    value: "501-1000",
    label: "501-1000 employees",
    icon: <Building2 className="w-4 h-4" />,
    },
    {
    value: "1001-5000",
    label: "1001-5000 employees",
    icon: <Globe2 className="w-4 h-4" />,
    },
    {
    value: "5000+",
    label: "5000+ employees",
    icon: <Rocket className="w-4 h-4" />,
    },
];

export const industryOptions = [
    {
    value: "banking",
    label: "Banking & Finance",
    icon: <Landmark className="w-4 h-4" />,
    },
    {
    value: "healthcare",
    label: "Healthcare",
    icon: <Hospital className="w-4 h-4" />,
    },
    {
    value: "technology",
    label: "Technology & SaaS",
    icon: <Database className="w-4 h-4" />,
    },
    {
    value: "retail",
    label: "Retail & E-commerce",
    icon: <ShoppingCart className="w-4 h-4" />,
    },
    {
    value: "manufacturing",
    label: "Manufacturing",
    icon: <Factory className="w-4 h-4" />,
    },
    {
    value: "government",
    label: "Government",
    icon: <Building2 className="w-4 h-4" />,
    },
    {
    value: "education",
    label: "Education",
    icon: <GraduationCap className="w-4 h-4" />,
    },
    {
    value: "energy",
    label: "Energy & Utilities",
    icon: <Zap className="w-4 h-4" />,
    },
    {
    value: "telecom",
    label: "Telecommunications",
    icon: <Smartphone className="w-4 h-4" />,
    },
    {
    value: "insurance",
    label: "Insurance",
    icon: <FileBarChart className="w-4 h-4" />,
    },
    { value: "other", label: "Other", icon: <Wrench className="w-4 h-4" /> },
];

export const useCaseOptions = [
    {
    value: "soc2",
    label: "SOC 2 Compliance",
    icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
    value: "ISO 42001",
    label: "ISO 27001 Certification",
    icon: <Award className="w-4 h-4" />,
    },
    // {
    // value: "hipaa",
    // label: "HIPAA Compliance",
    // icon: <Hospital className="w-4 h-4" />,
    // },
    {
    value: "gdpr",
    label: "GDPR/CCPA Compliance",
    icon: <Earth className="w-4 h-4" />,
    },
    {
    value: "risk",
    label: "Risk Management",
    icon: <BarChart className="w-4 h-4" />,
    },
    {
    value: "third-party",
    label: "Third-Party Risk",
    icon: <Handshake className="w-4 h-4" />,
    },
    {
    value: "audit",
    label: "Audit Management",
    icon: <ClipboardCheck className="w-4 h-4" />,
    },
    {
    value: "policy",
    label: "Policy Management",
    icon: <FileCheck className="w-4 h-4" />,
    },
    {
    value: "incident",
    label: "Incident Response",
    icon: <Bell className="w-4 h-4" />,
    },
    {
    value: "full-grc",
    label: "Full GRC Program",
    icon: <Shield className="w-4 h-4" />,
    },
];

type StepColor = "blue" | "emerald" | "amber" | "purple";

export const globalCompliance: {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: StepColor;
}[] = [
  {
    step: "1",
    title: "Assessment & Mapping",
    description: "Automatically map controls to regulations",
    icon: <FileText />,
    color: "blue",
  },
  {
    step: "2",
    title: "Evidence Collection",
    description: "Gather and organize compliance evidence",
    icon: <GalleryVertical />,
    color: "emerald",
  },
  {
    step: "3",
    title: "Monitoring & Alerts",
    description: "Continuous compliance monitoring",
    icon: <Siren />,
    color: "amber",
  },
  {
    step: "4",
    title: "Reporting & Audit",
    description: "Generate audit-ready reports",
    icon: <ChartColumn />,
    color: "purple",
  },
];
