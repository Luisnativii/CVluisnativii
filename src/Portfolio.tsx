import { useRef, useState } from 'react';
import { Expand, X } from 'lucide-react';
import type { Language } from './data';
import { portfolio } from './portfolio-projects';

const labels = {
  es: {
    pending: 'Despliegue futuro',
    progress: 'En desarrollo',
    open: 'Ampliar captura',
    close: 'Cerrar captura',
    technologies: 'Tecnologías',
  },
  en: {
    pending: 'Future release',
    progress: 'In development',
    open: 'Enlarge screenshot',
    close: 'Close screenshot',
    technologies: 'Technologies',
  },
};

export function Portfolio({ language }: { language: Language }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<(typeof portfolio)[number]>();
  const text = labels[language];

  return (
    <>
      <div className="portfolio-grid">
        {portfolio.map((project) => (
          <article className="portfolio-card" key={project.id}>
            <button
              className="portfolio-preview"
              type="button"
              aria-label={`${text.open}: ${project.name}`}
              onClick={() => {
                setSelected(project);
                dialog.current?.showModal();
              }}
            >
              <img src={`/projects/${project.id}.webp`} alt="" loading="lazy" decoding="async" />
              <span className="portfolio-expand" aria-hidden="true"><Expand size={18} /></span>
            </button>
            <div className="portfolio-body">
              <div className="portfolio-meta">
                <span className="card-period">{project.type[language]}</span>
                <span className={`portfolio-status${project.inProgress ? ' portfolio-status-progress' : ''}`}>
                  {project.inProgress ? text.progress : text.pending}
                </span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description[language]}</p>
              <ul className="tag-row" aria-label={text.technologies}>
                {project.technologies.map((technology) => (
                  <li key={technology}><span>{technology}</span></li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <dialog ref={dialog} className="portfolio-dialog" aria-labelledby="portfolio-caption"
        onClose={() => setSelected(undefined)}
      >
        <div className="portfolio-dialog-header">
          <p id="portfolio-caption">{selected?.capture[language]}</p>
          <button className="icon-button" type="button" aria-label={text.close} onClick={() => dialog.current?.close()}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        {selected && <img src={`/projects/${selected.id}.webp`} alt={selected.capture[language]} />}
      </dialog>
    </>
  );
}
