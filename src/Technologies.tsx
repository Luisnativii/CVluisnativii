import {
  Atom, Boxes, Braces, Cloud, Code2, CreditCard, Database,
  FileCode2, GitBranch, Leaf, Plug, ShoppingCart, Terminal,
} from 'lucide-react';
import type { Language } from './data';

const technologies = [
  { name: 'Business Central · AL', icon: FileCode2, es: 'Reconstruí el módulo de traslados entre salas y bodegas, incluido el manejo del inventario en tránsito.', en: 'I rebuilt the inventory transfer module between stores and warehouses, including in-transit stock handling.' },
  { name: 'LS Retail', icon: ShoppingCart, es: 'Desarrollo procesos de punto de venta y facturación electrónica para Farmacia San Nicolás.', en: 'I develop point-of-sale and electronic invoicing workflows for Farmacia San Nicolás.' },
  { name: 'SQL Server', icon: Database, es: 'Lo usé en Pergaminos para preparar datos con procesos ETL y trabajo con conexiones a Business Central.', en: 'I used it for ETL at Pergaminos and work with Business Central connections.' },
  { name: 'Tableau · Google Data Studio', icon: Boxes, es: 'Creé tableros para seguir la productividad del equipo y el avance de la digitalización.', en: 'I built dashboards to track team productivity and digitization progress.' },
  { name: 'Azure DevOps · Jira', icon: GitBranch, es: 'Uso Azure DevOps para versionar extensiones y automatizar despliegues de Business Central. En Jira doy seguimiento a las tareas.', en: 'I use Azure DevOps to version extensions and automate Business Central deployments, and Jira to track work.' },
  { name: 'SOAP/XML', icon: Plug, es: 'Trabajo con endpoints SOAP/XML en el entorno de Business Central.', en: 'I work with SOAP/XML endpoints in the Business Central environment.' },
  { name: 'React · TypeScript', icon: Atom, es: 'Desarrollé este portafolio bilingüe con componentes reutilizables. EliteDriver también utiliza React para su interfaz.', en: 'I built this bilingual portfolio with reusable components. EliteDriver also uses React for its interface.' },
  { name: 'Spring Boot', icon: Leaf, es: 'Es la tecnología del backend de EliteDriver para el catálogo, la disponibilidad y las reservas.', en: 'It powers the EliteDriver backend for the catalog, availability, and reservations.' },
  { name: 'PostgreSQL', icon: Database, es: 'EliteDriver usa PostgreSQL para guardar vehículos y reservas. La plataforma de servicio social también lo utiliza.', en: 'EliteDriver uses PostgreSQL to store vehicles and reservations. The social service platform also uses it.' },
  { name: 'Docker Compose', icon: Boxes, es: 'Lo utilicé en EliteDriver para ejecutar el frontend, la API y la base de datos juntos.', en: 'I used it in EliteDriver to run the frontend, API, and database together.' },
  { name: 'Wompi', icon: CreditCard, es: 'En EliteDriver, cada reserva puede generar un enlace para pagar con tarjeta en modo de pruebas.', en: 'In EliteDriver, each reservation can generate a link for card payments in test mode.' },
  { name: 'Go', icon: Code2, es: 'La plataforma de servicio social usa una API en Go para registrar y consultar horas.', en: 'The social service platform uses a Go API to record and retrieve hours.' },
  { name: 'Vite · Vercel', icon: Cloud, es: 'Compilo el portafolio con Vite y lo despliego automáticamente en Vercel desde GitHub.', en: 'I build the portfolio with Vite and deploy it automatically to Vercel from GitHub.' },
  { name: 'JavaScript', icon: Braces, es: 'El prototipo universitario lo usa para generar documentos de facturación y simular el envío a Hacienda.', en: 'The university prototype uses it to generate invoice documents and simulate submission to the tax authority.' },
  { name: 'Codex CLI', icon: Terminal, es: 'Uso IA en la terminal para apoyar la programación y revisar cambios de código.', en: 'I use AI in the terminal to support development and review code changes.' },
];

export function Technologies({ language }: { language: Language }) {
  return (
    <div className="technology-grid">
      {technologies.map(({ name, icon: Icon, ...description }) => (
        <details className="technology-card" key={name}>
          <summary>
            <Icon size={21} aria-hidden="true" />
            <span>{name}</span>
          </summary>
          <p>{description[language]}</p>
        </details>
      ))}
    </div>
  );
}
