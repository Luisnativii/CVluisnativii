import type { Language } from './data';

type Translation = Record<Language, string>;

type PortfolioProject = {
  id: string;
  name: string;
  type: Translation;
  description: Translation;
  capture: Translation;
  technologies: string[];
  inProgress?: boolean;
};

export const portfolio: PortfolioProject[] = [
  {
    id: 'elite-driver',
    name: 'EliteDriver',
    type: { es: 'Alquiler de vehículos', en: 'Vehicle rental' },
    description: {
      es: 'Plataforma de alquiler con catálogo, búsqueda de disponibilidad por fechas y reservas. El panel administrativo gestiona la flota, los clientes, los proveedores y los períodos fuera de servicio. Las reservas retienen el vehículo temporalmente mientras se completa el pago con Wompi.',
      en: 'Vehicle rental platform with a catalog, date-based availability, and reservations. The admin panel manages fleet, customers, suppliers, and vehicle blackout periods. Reservations temporarily hold a vehicle while the customer completes payment through Wompi.',
    },
    capture: { es: 'Vista pública del alquiler', en: 'Customer-facing rental site' },
    technologies: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'Nginx', 'Docker Compose', 'Wompi'],
  },
  {
    id: 'wallet',
    name: 'Wallet Nativi',
    type: { es: 'Finanzas personales', en: 'Personal finance' },
    description: {
      es: 'Aplicación web progresiva para administrar cuentas, ingresos, gastos, transferencias y presupuestos. Organiza los movimientos por categorías y admite comprobantes adjuntos. La pantalla de reportes usa datos de demostración.',
      en: 'Progressive web app for managing accounts, income, expenses, transfers, and budgets. It organizes transactions by category and supports receipt attachments. The reports screen uses demo data.',
    },
    capture: { es: 'Pantalla de acceso a Wallet Nativi', en: 'Wallet Nativi sign-in screen' },
    technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'OpenAPI', 'Service Worker', 'Docker Compose'],
  },
  {
    id: 'hexgl',
    name: 'HexGL Customs',
    type: { es: 'Personalización 3D', en: '3D customization' },
    description: {
      es: 'Módulo de garaje para HexGL, el juego de código abierto creado por Thibaut Despoulain. Permite girar y acercar la nave en 3D, ajustar el color, los acabados y la estela, y guardar las preferencias para aplicarlas durante la carrera.',
      en: 'Garage module for HexGL, the open-source game by Thibaut Despoulain. Players can rotate and zoom the 3D ship, adjust colors, finishes, and trails, and save preferences for the race.',
    },
    capture: { es: 'Visor 3D con el panel de personalización abierto', en: '3D viewer with the customization panel open' },
    technologies: ['JavaScript', 'HTML5', 'CSS', 'Three.js', 'WebGL', 'Shaders', 'localStorage', 'Jest', 'Playwright'],
  },
  {
    id: 'veterinaria',
    name: 'La Casa del Perro',
    type: { es: 'Sitio web veterinario', en: 'Veterinary website' },
    description: {
      es: 'Sitio adaptable para una clínica veterinaria en Apopa. Presenta sus servicios, horarios y ubicación, y facilita coordinar citas por WhatsApp con un mensaje prellenado.',
      en: 'Responsive website for a veterinary clinic in Apopa. It presents services, opening hours, and location, and helps visitors arrange appointments through a prefilled WhatsApp message.',
    },
    capture: { es: 'Portada del sitio de la clínica', en: 'Veterinary clinic homepage' },
    technologies: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Lucide', 'Google Maps', 'WhatsApp'],
  },
  {
    id: 'kaso',
    name: 'KASO',
    type: { es: 'Inventario y gestión de usuarios', en: 'Inventory and user management' },
    description: {
      es: 'Proyecto académico en equipo para administrar el inventario de una marca de productos artesanales. Incluye catálogo, alertas de stock, gestión de productos y cuentas con permisos por rol.',
      en: 'Academic team project for managing inventory for a handmade goods brand. It includes a product catalog, stock alerts, product management, and role-based user accounts.',
    },
    capture: { es: 'Pantalla de inicio de sesión de KASO', en: 'KASO sign-in screen' },
    technologies: ['PHP', 'MySQL', 'PDO', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'horas-sociales',
    name: 'Portal de Horas Sociales',
    type: { es: 'Gestión de servicio social', en: 'Social service tracking' },
    description: {
      es: 'Portal diseñado para registrar y dar seguimiento a horas de servicio social. La versión actual incluye acceso administrativo, gestión de cuentas y una capa de datos para áreas y tipos de proyecto. El flujo de registro de horas sigue en desarrollo.',
      en: 'Portal designed to record and track social service hours. The current version includes admin sign-in, account management, and a data layer for areas and project types. The hours logging workflow is still in development.',
    },
    capture: { es: 'Pantalla actual de Horas Sociales', en: 'Current Social Service Portal screen' },
    technologies: ['Go', 'Chi', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'PostgreSQL', 'pgx', 'sqlc', 'Goose', 'OpenAPI', 'Nginx', 'Docker Compose'],
    inProgress: true,
  },
];
