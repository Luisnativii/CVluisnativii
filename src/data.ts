import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
} from 'lucide-react';

export const profile = {
  name: 'Luis Nativi Claude',
  location: 'El Salvador',
  email: 'luis.nativi2018@gmail.com',
  github: 'https://github.com/Luisnativii',
  linkedin: 'https://www.linkedin.com/in/luis-nativ%C3%AD-b64b11202',
  cvUrl: '/CV-Luis-Nativi-Claude.pdf',
  photo: '/luis-nativi-claude.png',
};

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const localizedContent = {
  en: {
    documentTitle: 'Luis Nativi Claude | AL Developer | Microsoft Dynamics 365 Business Central',
    profile: {
      title: 'AL Developer | Microsoft Dynamics 365 Business Central',
      availability: 'Open to remote opportunities and relocation worldwide',
      location: 'El Salvador',
      portraitAlt: 'Portrait of Luis Nativi Claude',
      portraitCaption: 'Open to global teams',
    },
    nav: {
      aria: 'Primary navigation',
      top: 'Go to top',
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
    },
    actions: {
      email: 'Email me',
      cv: 'Download CV (ES)',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      openCredential: 'Open credential',
      language: 'Change language',
      languageShort: 'EN',
      languageTarget: 'ES',
    },
    hero: {
      summary: 'I build AL extensions for Microsoft Dynamics 365 Business Central, with experience in inventory transfers, LS Retail point of sale, and electronic invoicing.',
      meta: ['AL Extensions', 'LS Retail POS', 'ERP Automation'],
    },
    sections: {
      about: { eyebrow: 'About', title: 'ERP development and data analysis', description: 'I work on retail operations, inventory workflows, and reporting.' },
      education: { eyebrow: 'Education', title: 'Education', description: '' },
      experience: { eyebrow: 'Experience', title: 'Professional experience', description: '' },
      projects: { eyebrow: 'Projects', title: 'Selected projects', description: '' },
      certifications: { eyebrow: 'Certifications', title: 'Certifications', description: '' },
    },
    about: [
      'At Farmacia San Nicolás, I rebuilt the inventory transfer workflow used by all stores and warehouses. My work also covers LS Retail point-of-sale development and electronic invoicing.',
      'My background includes data analysis with SQL Server, ETL, and BI dashboards. I use AI-assisted CLI tools for development and code review.',
    ],
    education: [
      {
        degree: 'Computer Engineering',
        institution: 'Universidad Centroamericana José Simeón Cañas (UCA)',
        period: '2022 – Present',
        details: 'Currently in the second-to-last semester.',
        icon: GraduationCap,
      },
      {
        degree: 'High School Diploma',
        institution: 'Colegio Champagnat',
        period: '2021',
        details: '',
        icon: GraduationCap,
      },
    ],
    experience: [
      {
        role: 'Business Central AL Developer',
        company: 'Farmacia San Nicolás · IT Department',
        period: 'Sep 2025 – Present',
        highlights: [
          'Rebuilt the AL inventory transfer module from business logic through rollout, replacing legacy steps and redesigning the handling of in-transit stock. All company stores and warehouses use the new workflow.',
          'Develop and customize LS Retail point-of-sale workflows, including electronic invoicing.',
          'Create and maintain RDLC reports for ERP operations, and work with SQL Server and SOAP/XML endpoints in Business Central.',
          'Use Azure DevOps for version control and automated Business Central deployments, and Jira to track work.',
        ],
        icon: BriefcaseBusiness,
      },
      {
        role: 'Data Analyst',
        company: 'Pergaminos',
        period: 'Dec 2024 – Mar 2025',
        highlights: [
          'Worked with SQL Server and ETL workflows for data preparation.',
          'Built dashboards in Tableau and Google Data Studio to track team productivity and digitization progress.',
        ],
        icon: Database,
      },
    ],
    projects: [
      {
        name: 'Inventory Transfer Module',
        type: 'Business Central extension',
        description: 'Rebuilt the workflow for moving inventory between stores and warehouses, including in-transit stock handling. The module is used across the company.',
        tech: ['AL', 'Business Central', 'Inventory'],
      },
      {
        name: 'Electronic Invoicing Prototype',
        type: 'University team project',
        description: 'Sales and invoicing prototype that generates electronic documents in PDF and JSON with QR codes and simulates submission to the tax authority.',
        tech: ['JavaScript', 'Electronic Invoicing'],
      },
      {
        name: 'EliteDriver',
        type: 'Team project',
        description: 'Vehicle rental platform with a catalog, availability checks, and reservations. It runs with Docker Compose and integrates Wompi for card payments in test mode.',
        tech: ['React', 'Spring Boot', 'PostgreSQL', 'Docker Compose', 'Wompi'],
      },
      {
        name: 'Social Service Hours Platform',
        type: 'Software project',
        description: 'Application for recording and tracking social service hours, with a Go API, a web interface, and automated checks in Docker.',
        tech: ['Go', 'TypeScript', 'PostgreSQL', 'Docker'],
      },
    ],
    certifications: [
      {
        name: 'Python Programming Basics',
        issuer: 'Huawei ICT Academy',
        date: 'May 2026',
        link: '/certificates/Python-Programming-Basics.pdf',
        preview: '/certificates/previews/python-programming-basics.png',
      },
      {
        name: 'Complete Python Course 2024: From Zero to Master with Python 3',
        issuer: 'Udemy',
        date: 'Jul 2024',
        link: '/certificates/PythonUdemy.pdf',
        preview: '/certificates/previews/python-udemy.png',
      },
      {
        name: 'Critical Thinking for Using Artificial Intelligence',
        issuer: 'Platzi',
        date: 'May 2026',
        link: '/certificates/diploma-pensamiento-critico-ia.pdf',
        preview: '/certificates/previews/ai-critical-thinking-platzi.png',
      },
      {
        name: 'Math Basics',
        issuer: 'Huawei ICT Academy',
        date: 'May 2026',
        link: '/certificates/Math-Basics.pdf',
        preview: '/certificates/previews/math-basics.png',
      },
      {
        name: 'Introduction to UI Design',
        issuer: 'Universidad Centroamericana Jose Simeon Canas (UCA)',
        date: 'Sep 2023',
        link: '/certificates/UI.pdf',
        preview: '/certificates/previews/ui-design.png',
      },
    ],
  },
  es: {
    documentTitle: 'Luis Nativi Claude | Desarrollador AL | Microsoft Dynamics 365 Business Central',
    profile: {
      title: 'Desarrollador AL | Microsoft Dynamics 365 Business Central',
      availability: 'Disponible para oportunidades remotas y reubicación internacional',
      location: 'El Salvador',
      portraitAlt: 'Retrato de Luis Nativi Claude',
      portraitCaption: 'Abierto a equipos globales',
    },
    nav: {
      aria: 'Navegación principal',
      top: 'Ir al inicio',
      about: 'Sobre mí',
      education: 'Educación',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
    },
    actions: {
      email: 'Escríbeme',
      cv: 'Descargar CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      openCredential: 'Abrir certificado',
      language: 'Cambiar idioma',
      languageShort: 'ES',
      languageTarget: 'EN',
    },
    hero: {
      summary: 'Desarrollo extensiones en AL para Microsoft Dynamics 365 Business Central, con experiencia en traslados de inventario, punto de venta con LS Retail y facturación electrónica.',
      meta: ['Extensiones AL', 'Punto de venta con LS Retail', 'Automatización ERP'],
    },
    sections: {
      about: { eyebrow: 'Perfil', title: 'Desarrollo ERP y análisis de datos', description: 'Trabajo en procesos de venta, inventario y análisis operativo.' },
      education: { eyebrow: 'Educación', title: 'Formación académica', description: '' },
      experience: { eyebrow: 'Experiencia', title: 'Experiencia profesional', description: '' },
      projects: { eyebrow: 'Proyectos', title: 'Proyectos seleccionados', description: '' },
      certifications: { eyebrow: 'Certificaciones', title: 'Certificaciones', description: '' },
    },
    about: [
      'En Farmacia San Nicolás reconstruí el flujo de traslados de inventario que utilizan todas las salas de venta y bodegas. También trabajo en el desarrollo para puntos de venta con LS Retail y en facturación electrónica.',
      'Mi experiencia incluye análisis de datos con SQL Server, procesos ETL y tableros de inteligencia de negocios. Uso herramientas de IA en la terminal para apoyar la programación y la revisión de código.',
    ],
    education: [
      {
        degree: 'Ingeniería Informática',
        institution: 'Universidad Centroamericana José Simeón Cañas (UCA)',
        period: '2022 – Actualidad',
        details: 'Actualmente curso el penúltimo ciclo.',
        icon: GraduationCap,
      },
      {
        degree: 'Bachillerato',
        institution: 'Colegio Champagnat',
        period: '2021',
        details: '',
        icon: GraduationCap,
      },
    ],
    experience: [
      {
        role: 'Desarrollador AL en Business Central',
        company: 'Farmacia San Nicolás · Departamento de Informática',
        period: 'Sep 2025 – Actualidad',
        highlights: [
          'Reconstruí el módulo de traslados en AL desde la lógica de negocio hasta la puesta en producción. Reemplacé pasos obsoletos y rediseñé el manejo de inventario en tránsito. Todas las salas de venta y bodegas de la empresa usan el nuevo flujo.',
          'Desarrollo y personalizo procesos de punto de venta con LS Retail, incluida la facturación electrónica.',
          'Creo y mantengo reportes RDLC para la operación del ERP y trabajo con SQL Server y endpoints SOAP/XML en Business Central.',
          'Utilizo Azure DevOps para el control de versiones y los despliegues automatizados de Business Central, y Jira para el seguimiento de tareas.',
        ],
        icon: BriefcaseBusiness,
      },
      {
        role: 'Analista de Datos',
        company: 'Pergaminos',
        period: 'Dic 2024 – Mar 2025',
        highlights: [
          'Trabajé con SQL Server y procesos ETL para preparar datos.',
          'Desarrollé tableros en Tableau y Google Data Studio para dar seguimiento a la productividad del equipo y al avance de la digitalización.',
        ],
        icon: Database,
      },
    ],
    projects: [
      {
        name: 'Módulo de traslados de inventario',
        type: 'Extensión de Business Central',
        description: 'Reconstrucción del flujo de traslados entre salas de venta y bodegas, incluido el manejo de inventario en tránsito. El módulo se usa en toda la empresa.',
        tech: ['AL', 'Business Central', 'Inventario'],
      },
      {
        name: 'Prototipo de facturación electrónica',
        type: 'Proyecto universitario en equipo',
        description: 'Prototipo de ventas y facturación que genera documentos electrónicos en PDF y JSON con códigos QR y simula el envío a Hacienda.',
        tech: ['JavaScript', 'Facturación electrónica'],
      },
      {
        name: 'EliteDriver',
        type: 'Proyecto en equipo',
        description: 'Plataforma de alquiler de vehículos con catálogo, consulta de disponibilidad y gestión de reservas. Se ejecuta con Docker Compose e integra Wompi para pagos con tarjeta en modo de pruebas.',
        tech: ['React', 'Spring Boot', 'PostgreSQL', 'Docker Compose', 'Wompi'],
      },
      {
        name: 'Plataforma de servicio social',
        type: 'Proyecto de software',
        description: 'Aplicación para registrar y dar seguimiento a horas de servicio social, con una API en Go, una interfaz web y comprobaciones automatizadas en Docker.',
        tech: ['Go', 'TypeScript', 'PostgreSQL', 'Docker'],
      },
    ],
    certifications: [
      {
        name: 'Python Programming Basics',
        issuer: 'Huawei ICT Academy',
        date: 'Mayo 2026',
        link: '/certificates/Python-Programming-Basics.pdf',
        preview: '/certificates/previews/python-programming-basics.png',
      },
      {
        name: 'Curso Completo de Python 2024: De Cero a Master con Python 3',
        issuer: 'Udemy',
        date: 'Jul 2024',
        link: '/certificates/PythonUdemy.pdf',
        preview: '/certificates/previews/python-udemy.png',
      },
      {
        name: 'Pensamiento Critico para Usar Inteligencia Artificial',
        issuer: 'Platzi',
        date: 'Mayo 2026',
        link: '/certificates/diploma-pensamiento-critico-ia.pdf',
        preview: '/certificates/previews/ai-critical-thinking-platzi.png',
      },
      {
        name: 'Math Basics',
        issuer: 'Huawei ICT Academy',
        date: 'Mayo 2026',
        link: '/certificates/Math-Basics.pdf',
        preview: '/certificates/previews/math-basics.png',
      },
      {
        name: 'Introduccion al Diseno de Interfaces UI',
        issuer: 'Universidad Centroamericana Jose Simeon Canas (UCA)',
        date: 'Sep 2023',
        link: '/certificates/UI.pdf',
        preview: '/certificates/previews/ui-design.png',
      },
    ],
  },
} as const;

export const sectionIcons = {
  education: GraduationCap,
  experience: BriefcaseBusiness,
  projects: Code2,
  certifications: Award,
};
