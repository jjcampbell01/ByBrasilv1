
import React from 'react';
import { Product, Sector } from './types';
import { 
  ShieldCheck as ShieldIcon, 
  Clock as ClockIcon, 
  Award as AwardIcon, 
  Hospital as HospitalIcon, 
  Factory as FactoryIcon, 
  Building2 as BuildingIcon, 
  GraduationCap as SchoolIcon 
} from 'lucide-react';

// Array de produtos vazio conforme solicitado, o foco será o PDF
export const PRODUCTS: Product[] = [];

export const SECTORS: Sector[] = [
  {
    id: 'industry',
    title: 'Indústria e Logística',
    description: 'Uniformes de alta visibilidade e resistência para ambientes fabris, obras e centros de distribuição.',
    image: 'https://i.ibb.co/jvGw9VRs/Gemini-Generated-Image-b2xl3jb2xl3jb2xl-1.png',
    icon: <FactoryIcon />
  },
  {
    id: 'health',
    title: 'Saúde e Bem-estar',
    description: 'Soluções para hospitais e clínicas que exigem assepsia, conforto e uma imagem de confiança.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    icon: <HospitalIcon />
  },
  {
    id: 'corporate',
    title: 'Corporativo e Eventos',
    description: 'Soluções para escritórios e equipes que precisam de uma identidade visual coesa e profissional.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    icon: <BuildingIcon />
  },
  {
    id: 'education',
    title: 'Educação e Escolas',
    description: 'Padronização inteligente para alunos e docentes, com foco em durabilidade extrema.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
    icon: <SchoolIcon />
  }
];

export const FEATURES = [
  {
    icon: <AwardIcon className="w-8 h-8 text-blue-800" />,
    title: 'Bordado de Precisão',
    description: 'Tecnologia industrial para reproduzir logotipos complexos com nitidez premium.'
  },
  {
    icon: <ShieldIcon className="w-8 h-8 text-blue-800" />,
    title: 'Consultoria Técnica',
    description: 'Orientação sobre tecidos e modelagens feita por especialistas em produção.'
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-blue-800" />,
    title: 'Agilidade no Atacado',
    description: 'Processo ágil de orçamento e logística programada para grandes volumes e empresas.'
  }
];

export const WHATSAPP_LINK = "https://wa.me/555193486266?text=Olá! Gostaria de uma consultoria para os uniformes da minha empresa.";
export const CATALOG_LINK = "https://drive.google.com/file/d/1QzzMeA1Tmyf6iaEjJSx8kGBVU4DcOBgv/view?usp=drivesdk";
