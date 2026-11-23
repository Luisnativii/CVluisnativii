import {
  Atom, Boxes, Braces, ChartColumn, Cloud, Code2, CreditCard, Database,
  FileCode2, GitBranch, Globe, Leaf, Plug, Server, ShoppingCart, Terminal,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Language } from './data';

type Translation = Record<Language, string>;
type Technology = Translation & { name: string; icon: LucideIcon };

const groups: { title: Translation; items: Technology[] }[] = [
  {
    title: { es: 'ERP y punto de venta', en: 'ERP and point of sale' },
    items: [
      { name: 'Business Central', icon: Boxes, es: 'Desarrollo extensiones para inventario, traslados y operaciones en Microsoft Dynamics 365.', en: 'I develop extensions for inventory, transfers, and operations in Microsoft Dynamics 365.' },
      { name: 'AL', icon: FileCode2, es: 'Reconstruí en AL la lógica del módulo de traslados y el manejo del inventario en tránsito.', en: 'I rebuilt the transfer module logic and in-transit inventory handling in AL.' },
      { name: 'LS Retail', icon: ShoppingCart, es: 'Desarrollo procesos de punto de venta y facturación electrónica para Farmacia San Nicolás.', en: 'I develop point-of-sale and electronic invoicing workflows for Farmacia San Nicolás.' },
    ],
  },
  {
    title: { es: 'Lenguajes de programación', en: 'Programming languages' },
    items: [
      { name: 'C++', icon: Code2, es: 'Lo he utilizado para practicar programación y resolución de problemas.', en: 'I have used it to practice programming and problem solving.' },
      { name: 'C#', icon: Braces, es: 'He trabajado con C# y SDK de dispositivos para integrar lectores con aplicaciones .NET.', en: 'I have worked with C# and device SDKs to integrate readers with .NET applications.' },
      { name: 'JavaScript', icon: Braces, es: 'El prototipo universitario lo usa para generar documentos de facturación y simular su envío.', en: 'The university prototype uses it to generate invoices and simulate submission.' },
      { name: 'TypeScript', icon: FileCode2, es: 'Lo uso para tipar componentes y datos bilingües en este sitio.', en: 'I use it to type components and bilingual content on this site.' },
      { name: 'Kotlin', icon: Code2, es: 'Forma parte de los lenguajes que he utilizado para programar.', en: 'It is one of the languages I have used for programming.' },
      { name: 'Go', icon: Terminal, es: 'La plataforma de servicio social usa una API en Go para registrar y consultar horas.', en: 'The social service platform uses a Go API to record and retrieve hours.' },
    ],
  },
  {
    title: { es: 'Frameworks, bibliotecas y SDK', en: 'Frameworks, libraries, and SDKs' },
    items: [
      { name: 'React', icon: Atom, es: 'Construí este CV bilingüe con componentes reutilizables. EliteDriver también usa React.', en: 'I built this bilingual CV with reusable components. EliteDriver also uses React.' },
      { name: 'Spring Boot', icon: Leaf, es: 'El backend de EliteDriver lo usa para el catálogo, la disponibilidad y las reservas.', en: 'The EliteDriver backend uses it for the catalog, availability, and reservations.' },
      { name: '.NET y SDK de dispositivos', icon: Plug, es: 'Trabajo con aplicaciones .NET que se comunican con lectores mediante SDK de fabricantes.', en: 'I work with .NET applications that communicate with readers through vendor SDKs.' },
    ],
  },
  {
    title: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { name: 'SQL Server', icon: Database, es: 'Lo utilicé para procesos ETL en Pergaminos y para conexiones con Business Central.', en: 'I used it for ETL at Pergaminos and for Business Central connections.' },
      { name: 'PostgreSQL', icon: Database, es: 'EliteDriver lo usa para guardar vehículos y reservas. También se usa en la plataforma de servicio social.', en: 'EliteDriver uses it to store vehicles and reservations. The social service platform also uses it.' },
      { name: 'MongoDB', icon: Database, es: 'He trabajado con MongoDB como base de datos de documentos.', en: 'I have worked with MongoDB as a document database.' },
    ],
  },
  {
    title: { es: 'Inteligencia de negocios', en: 'Business intelligence' },
    items: [
      { name: 'Tableau', icon: ChartColumn, es: 'Lo utilicé en Pergaminos para visualizar indicadores operativos.', en: 'I used it at Pergaminos to visualize operational metrics.' },
      { name: 'Google Data Studio', icon: ChartColumn, es: 'Lo utilicé en Pergaminos para elaborar tableros de seguimiento.', en: 'I used it at Pergaminos to create monitoring dashboards.' },
    ],
  },
  {
    title: { es: 'Integraciones y pagos', en: 'Integrations and payments' },
    items: [
      { name: 'SOAP', icon: Plug, es: 'Trabajo con endpoints SOAP en el entorno de Business Central.', en: 'I work with SOAP endpoints in the Business Central environment.' },
      { name: 'XML', icon: FileCode2, es: 'Uso XML como formato de intercambio de datos al trabajar con servicios SOAP.', en: 'I use XML as a data exchange format when working with SOAP services.' },
      { name: 'Wompi', icon: CreditCard, es: 'EliteDriver integra enlaces de pago con tarjeta por reserva en modo de pruebas.', en: 'EliteDriver integrates card payment links for reservations in test mode.' },
    ],
  },
  {
    title: { es: 'Despliegue e infraestructura', en: 'Deployment and infrastructure' },
    items: [
      { name: 'Docker · Docker Compose', icon: Boxes, es: 'Los utilicé para ejecutar juntos el frontend, la API y la base de datos de EliteDriver.', en: 'I used them to run the EliteDriver frontend, API, and database together.' },
      { name: 'Vercel', icon: Cloud, es: 'Despliego este sitio desde GitHub y lo compilo con Vite.', en: 'I build this site with Vite and deploy it from GitHub.' },
      { name: 'Cloudflare', icon: Globe, es: 'Administración de dominios públicos y registros DNS.', en: 'Public domain and DNS record management.' },
      { name: 'Railway', icon: Database, es: 'Aprovisionamiento de bases de datos PostgreSQL para aplicaciones.', en: 'Provisioning PostgreSQL databases for applications.' },
      { name: 'OVHcloud · Cloudflare Tunnel', icon: Server, es: 'Despliegue de aplicaciones en VPS de OVHcloud y publicación mediante Cloudflare Tunnel.', en: 'Deploying applications on OVHcloud VPS instances and publishing them through Cloudflare Tunnel.' },
      { name: 'Kubernetes', icon: Boxes, es: 'Conocimientos de despliegue de aplicaciones en entornos locales de uso interno.', en: 'Knowledge of application deployment in local Kubernetes environments for internal use.' },
    ],
  },
  {
    title: { es: 'Prácticas de desarrollo', en: 'Development practices' },
    items: [
      { name: 'Git · GitHub', icon: GitBranch, es: 'Control de cambios con Git, ramas y revisión mediante pull requests en GitHub.', en: 'Version control with Git, branches, and pull request reviews on GitHub.' },
      { name: 'Azure DevOps', icon: GitBranch, es: 'Lo uso para versionar extensiones y automatizar despliegues de Business Central.', en: 'I use it to version extensions and automate Business Central deployments.' },
      { name: 'Jira', icon: Boxes, es: 'Lo uso para dar seguimiento a las tareas del equipo.', en: 'I use it to track team tasks.' },
      { name: 'Clean Code', icon: Code2, es: 'Nombres claros, funciones con una responsabilidad definida y refactorización para facilitar el mantenimiento.', en: 'Clear naming, single-responsibility functions, and refactoring for maintainability.' },
      { name: 'Codex CLI', icon: Terminal, es: 'Uso agentes de IA para apoyar la programación y revisar cambios con criterio propio.', en: 'I use AI coding agents to assist with development and review their changes before adoption.' },
    ],
  },
];

export function Technologies({ language }: { language: Language }) {
  return (
    <div className="technology-groups">
      {groups.map(({ title, items }) => (
        <section className="technology-group" key={title.en}>
          <h3>{title[language]}</h3>
          <ul className="technology-grid">
            {items.map(({ name, icon: Icon, ...description }, index) => {
              const id = `tech-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
              return (
                <li className="technology-card" key={name}>
                  <button
                    type="button"
                    aria-describedby={id}
                    onClick={event => event.currentTarget.focus()}
                    onKeyDown={event => {
                      if (event.key === 'Escape') event.currentTarget.blur();
                    }}
                  >
                    <Icon size={18} aria-hidden="true" />
                    <span>{name}</span>
                  </button>
                  <span className="technology-tooltip" role="tooltip" id={id}>{description[language]}</span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
