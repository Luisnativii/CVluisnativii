import {
  Award,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  LayoutDashboard,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';

export const profile = {
  name: 'Luis Nativi Claude',
  title: 'Software Developer',
  location: 'El Salvador',
  email: 'luis.nativi2018@gmail.com',
  github: 'https://github.com/Luisnativii',
  linkedin: 'https://www.linkedin.com/in/luis-nativ%C3%AD-b64b11202',
  cvUrl: '#',
  photo: '/luis-nativi-claude.png',
};

export const languages = {
  en: 'English',
  es: 'Espanol',
} as const;

export type Language = keyof typeof languages;

export const localizedContent = {
  en: {
    documentTitle: 'Luis Nativi Claude | Software Developer',
    profile: {
      title: 'Software Developer',
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
      cv: 'CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      viewProject: 'View project',
      openCredential: 'Open credential',
      language: 'Change language',
      languageShort: 'EN',
      languageTarget: 'ES',
    },
    hero: {
      summary:
        'Software Developer focused on building reliable business solutions with a strong sense of ownership, adaptability, and continuous learning. I enjoy working with teams, researching new technologies, and delivering maintainable systems that support long-term project value and operational efficiency.',
      meta: ['Business Central AL', 'ERP Automation'],
    },
    sections: {
      about: {
        eyebrow: 'About me',
        title: 'Reliable software for real business workflows.',
        description:
          'I bring technical curiosity, teamwork, and a delivery mindset to systems that need to be useful beyond the first release.',
      },
      education: {
        eyebrow: 'Education',
        title: 'Academic foundation in engineering.',
        description: 'Formal computer engineering studies paired with practical business software experience.',
      },
      experience: {
        eyebrow: 'Experience',
        title: 'Hands-on roles across ERP, data, and reporting.',
        description:
          'Experience connected to operational systems, database workflows, dashboards, and process automation.',
      },
      projects: {
        eyebrow: 'Projects',
        title: 'Selected work, ready for real case studies.',
        description:
          'These are temporary examples. They are structured so your real projects can be dropped in cleanly.',
      },
      certifications: {
        eyebrow: 'Certifications',
        title: 'Credentials prepared for PDF links.',
        description:
          'Each card can link to Google Drive, a PDF file, or a verification page once you share the real certificates.',
      },
    },
    about: [
      'I am a Software Developer currently working with Microsoft Dynamics 365 Business Central and AL. My professional focus is building maintainable ERP functionality, automating operational workflows, and translating business needs into reliable technical solutions.',
      'I adapt quickly to team environments, enjoy learning new topics, and care deeply about delivering quality work that remains clear, scalable, and valuable over time.',
    ],
    stats: [
      { value: '1+', label: 'Year in Business Central' },
      { value: '2', label: 'Formal roles' },
      { value: '9th', label: 'Engineering cycle' },
    ],
    education: [
      {
        degree: 'B.S. in Computer Engineering',
        institution: 'Universidad Centroamericana Jose Simeon Canas (UCA)',
        period: 'Currently in 9th cycle',
        details:
          'Final-year student developing a foundation in software engineering, databases, systems analysis, and project-oriented problem solving.',
        icon: GraduationCap,
      },
    ],
    experience: [
      {
        role: 'Business Central AL Developer',
        company: 'Departamento de Informatica, Farmacia San Nicolas',
        period: '1 year',
        highlights: [
          'Responsible for inventory, warehouse transfer, and transit workflows inside Microsoft Dynamics 365 Business Central.',
          'Develops accounting-requested improvements that automate operational and administrative processes.',
          'Creates RDLC reports and ERP customizations aligned with business requirements.',
          'Implemented a complete inventory transfer flow between sales rooms, warehouses, and transit locations.',
        ],
        icon: BriefcaseBusiness,
      },
      {
        role: 'Junior Database Administrator & Dashboard Developer',
        company: 'Pergaminos',
        period: 'Short-term role',
        highlights: [
          'Managed database information for document digitization and warehouse location processes.',
          'Delivered performance dashboards to monitor staff productivity and operational progress.',
          'Created optimized queries to locate requested documents by floor and shelf.',
          'Improved records and database connections to make filtering and search workflows easier.',
        ],
        icon: Database,
      },
    ],
    projects: [
      {
        name: 'Inventory Transfer Flow',
        type: 'Business Central Extension',
        description:
          'Placeholder project based on an ERP workflow for transfers between stores, warehouses, and transit locations.',
        tech: ['AL', 'Business Central', 'RDLC', 'ERP Automation'],
        link: '#',
      },
      {
        name: 'Operations Dashboard',
        type: 'Data & Reporting',
        description:
          'Placeholder dashboard for monitoring team productivity, digitization progress, and document movement.',
        tech: ['SQL', 'Dashboards', 'Data Modeling'],
        link: '#',
      },
      {
        name: 'SOAP XML Integration',
        type: 'Integration',
        description: 'Placeholder integration layer for structured XML communication between business systems.',
        tech: ['SOAP', 'XML', 'Backend Logic'],
        link: '#',
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
    documentTitle: 'Luis Nativi Claude | Desarrollador de Software',
    profile: {
      title: 'Desarrollador de Software',
      availability: 'Disponible para oportunidades remotas y reubicacion internacional',
      location: 'El Salvador',
      portraitAlt: 'Retrato de Luis Nativi Claude',
      portraitCaption: 'Abierto a equipos globales',
    },
    nav: {
      aria: 'Navegacion principal',
      top: 'Ir al inicio',
      about: 'Sobre mi',
      education: 'Educacion',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
    },
    actions: {
      email: 'Escribeme',
      cv: 'CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      viewProject: 'Ver proyecto',
      openCredential: 'Abrir certificado',
      language: 'Cambiar idioma',
      languageShort: 'ES',
      languageTarget: 'EN',
    },
    hero: {
      summary:
        'Desarrollador de Software enfocado en construir soluciones empresariales confiables, con sentido de responsabilidad, adaptabilidad y aprendizaje continuo. Disfruto trabajar en equipo, investigar nuevas tecnologias y entregar sistemas mantenibles que aporten valor a largo plazo.',
      meta: ['Business Central AL', 'Automatizacion ERP'],
    },
    sections: {
      about: {
        eyebrow: 'Sobre mi',
        title: 'Software confiable para flujos reales de negocio.',
        description:
          'Aporto curiosidad tecnica, trabajo en equipo y mentalidad de entrega a sistemas que deben seguir siendo utiles despues de su primera version.',
      },
      education: {
        eyebrow: 'Educacion',
        title: 'Base academica en ingenieria.',
        description:
          'Formacion en ingenieria informatica combinada con experiencia practica en software empresarial.',
      },
      experience: {
        eyebrow: 'Experiencia',
        title: 'Roles practicos en ERP, datos y reporteria.',
        description:
          'Experiencia conectada con sistemas operativos, bases de datos, dashboards y automatizacion de procesos.',
      },
      projects: {
        eyebrow: 'Proyectos',
        title: 'Trabajo seleccionado, listo para casos reales.',
        description:
          'Estos son ejemplos temporales. Estan estructurados para reemplazarlos de forma limpia por tus proyectos reales.',
      },
      certifications: {
        eyebrow: 'Certificaciones',
        title: 'Credenciales disponibles con vista previa.',
        description:
          'Cada tarjeta abre el PDF real del certificado para validar la formacion y los logros obtenidos.',
      },
    },
    about: [
      'Soy Desarrollador de Software y actualmente trabajo con Microsoft Dynamics 365 Business Central y AL. Mi enfoque profesional es construir funcionalidad ERP mantenible, automatizar flujos operativos y traducir necesidades del negocio en soluciones tecnicas confiables.',
      'Me adapto rapidamente a entornos de equipo, disfruto aprender temas nuevos y cuido mucho entregar trabajo de calidad que sea claro, escalable y valioso con el tiempo.',
    ],
    stats: [
      { value: '1+', label: 'Ano en Business Central' },
      { value: '2', label: 'Roles formales' },
      { value: '9no', label: 'Ciclo de ingenieria' },
    ],
    education: [
      {
        degree: 'Ingenieria Informatica',
        institution: 'Universidad Centroamericana Jose Simeon Canas (UCA)',
        period: 'Actualmente en 9no ciclo',
        details:
          'Estudiante en etapa final, desarrollando bases en ingenieria de software, bases de datos, analisis de sistemas y resolucion de problemas orientada a proyectos.',
        icon: GraduationCap,
      },
    ],
    experience: [
      {
        role: 'Desarrollador AL en Business Central',
        company: 'Departamento de Informatica, Farmacia San Nicolas',
        period: '1 ano',
        highlights: [
          'Responsable de flujos de inventario, traslados de almacen y ubicaciones en transito dentro de Microsoft Dynamics 365 Business Central.',
          'Desarrollo mejoras solicitadas por contabilidad para automatizar procesos operativos y administrativos.',
          'Creo reportes RDLC y personalizaciones ERP alineadas con requerimientos del negocio.',
          'Implemente un flujo completo de traslado de inventario entre salas de venta, bodegas y ubicaciones en transito.',
        ],
        icon: BriefcaseBusiness,
      },
      {
        role: 'Administrador Junior de Base de Datos y Desarrollador de Dashboards',
        company: 'Pergaminos',
        period: 'Rol de corto plazo',
        highlights: [
          'Administre informacion de base de datos para procesos de digitalizacion y ubicacion fisica de documentos.',
          'Entregue dashboards de rendimiento para monitorear productividad del equipo y avance operativo.',
          'Cree consultas optimizadas para localizar documentos solicitados por piso y anaquel.',
          'Mejore registros y conexiones de base de datos para facilitar flujos de filtrado y busqueda.',
        ],
        icon: Database,
      },
    ],
    projects: [
      {
        name: 'Flujo de Traslado de Inventario',
        type: 'Extension de Business Central',
        description:
          'Proyecto temporal basado en un flujo ERP para traslados entre tiendas, bodegas y ubicaciones en transito.',
        tech: ['AL', 'Business Central', 'RDLC', 'Automatizacion ERP'],
        link: '#',
      },
      {
        name: 'Dashboard Operativo',
        type: 'Datos y Reporteria',
        description:
          'Dashboard temporal para monitorear productividad del equipo, avance de digitalizacion y movimiento documental.',
        tech: ['SQL', 'Dashboards', 'Modelado de datos'],
        link: '#',
      },
      {
        name: 'Integracion SOAP XML',
        type: 'Integracion',
        description: 'Capa de integracion temporal para comunicacion XML estructurada entre sistemas empresariales.',
        tech: ['SOAP', 'XML', 'Logica backend'],
        link: '#',
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

export const focusAreas = [
  { label: 'Microsoft Dynamics 365 Business Central', icon: Boxes },
  { label: 'AL Development', icon: FileCode2 },
  { label: 'ERP Workflow Automation', icon: PackageCheck },
  { label: 'SOAP XML Integrations', icon: Code2 },
  { label: 'Dockerized Applications', icon: ShieldCheck },
  { label: 'GitHub, Jira & Delivery Flow', icon: LayoutDashboard },
];

export const sectionIcons = {
  education: GraduationCap,
  experience: BriefcaseBusiness,
  projects: Code2,
  certifications: Award,
};
