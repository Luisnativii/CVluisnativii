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
  availability: 'Open to remote opportunities and relocation worldwide',
  email: 'luis.nativi2018@gmail.com',
  github: 'https://github.com/Luisnativii',
  linkedin: 'https://www.linkedin.com/in/luis-nativ%C3%AD-b64b11202',
  cvUrl: '#',
  photo: '/luis-nativi-claude.png',
};

export const summary =
  'Software Developer focused on building reliable business solutions with a strong sense of ownership, adaptability, and continuous learning. I enjoy working with teams, researching new technologies, and delivering maintainable systems that support long-term project value and operational efficiency.';

export const focusAreas = [
  { label: 'Microsoft Dynamics 365 Business Central', icon: Boxes },
  { label: 'AL Development', icon: FileCode2 },
  { label: 'ERP Workflow Automation', icon: PackageCheck },
  { label: 'SOAP XML Integrations', icon: Code2 },
  { label: 'Dockerized Applications', icon: ShieldCheck },
  { label: 'GitHub, Jira & Delivery Flow', icon: LayoutDashboard },
];

export const education = [
  {
    degree: 'B.S. in Computer Engineering',
    institution: 'Universidad Centroamericana Jose Simeon Canas (UCA)',
    period: 'Currently in 9th cycle',
    details:
      'Final-year student developing a foundation in software engineering, databases, systems analysis, and project-oriented problem solving.',
    icon: GraduationCap,
  },
];

export const experience = [
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
];

export const projects = [
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
    description:
      'Placeholder integration layer for structured XML communication between business systems.',
    tech: ['SOAP', 'XML', 'Backend Logic'],
    link: '#',
  },
];

export const certifications = [
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
];

export const stats = [
  { value: '1+', label: 'Year in Business Central' },
  { value: '2', label: 'Formal roles' },
  { value: '9th', label: 'Engineering cycle' },
];

export const sectionIcons = {
  education: GraduationCap,
  experience: BriefcaseBusiness,
  projects: Code2,
  certifications: Award,
};
