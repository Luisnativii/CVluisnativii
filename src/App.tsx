import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  Sparkles,
} from 'lucide-react';
import {
  Language,
  localizedContent,
  profile,
  sectionIcons,
} from './data';
import { GitHubActivity } from './GitHubActivity';
import { Technologies } from './Technologies';

function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="section-header">
      {eyebrow !== title && (
        <div className="section-kicker">
          <Icon size={17} />
          <span>{eyebrow}</span>
        </div>
      )}
      <div className="section-title-row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>('es');
  const content = localizedContent[language];
  const nextLanguage = language === 'en' ? 'es' : 'en';
  const technologyTitle = language === 'es' ? 'Tecnologías' : 'Technologies';
  const githubTitle = language === 'es' ? 'Actividad en GitHub' : 'GitHub activity';

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.documentTitle;
  }, [content.documentTitle, language]);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-frost">
      <div className="page-shell">
        <nav className="nav-bar" aria-label={content.nav.aria}>
          <a href="#top" className="brand-mark" aria-label={content.nav.top}>
            LN
          </a>
          <div className="nav-links">
            <a href="#about">{content.nav.about}</a>
            <a href="#experience">{content.nav.experience}</a>
            <a href="#education">{content.nav.education}</a>
            <a href="#projects">{content.nav.projects}</a>
            <a href="#technologies">{technologyTitle}</a>
            <a href="#github">GitHub</a>
            <a href="#certifications">{content.nav.certifications}</a>
          </div>
          <button
            className={`language-switch ${language === 'es' ? 'is-spanish' : ''}`}
            type="button"
            onClick={() => setLanguage(nextLanguage)}
            aria-label={`${content.actions.language}: ${content.actions.languageTarget}`}
          >
            <Languages size={17} />
            <span className="language-current">{content.actions.languageShort}</span>
            <span className="language-track" aria-hidden="true">
              <span className="language-thumb" />
            </span>
            <span>{content.actions.languageTarget}</span>
          </button>
        </nav>

        <section id="top" className="hero-section">
          <div className="hero-copy">
            <div className="availability">
              <Sparkles size={16} />
              {content.profile.availability}
            </div>
            <h1>{profile.name}</h1>
            <p className="hero-title">{content.profile.title}</p>
            <p className="hero-summary">{content.hero.summary}</p>
            <div className="hero-meta">
              <span>
                <MapPin size={16} />
                {content.profile.location}
              </span>
              {content.hero.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {content.actions.email}
              </a>
              <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label={content.actions.github}>
                <Github size={19} />
              </a>
              <a
                className={`icon-button ${profile.linkedin === '#' ? 'is-disabled' : ''}`}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={content.actions.linkedin}
              >
                <Linkedin size={19} />
              </a>
              <a className="ghost-button" href={profile.cvUrl} download>
                <Download size={18} />
                {content.actions.cv}
              </a>
            </div>
          </div>

          <div className="portrait-panel" aria-label={content.profile.portraitAlt}>
            <div className="portrait-frame">
              <img src={profile.photo} alt={content.profile.portraitAlt} />
            </div>
            <div className="portrait-caption">
              <span>{content.profile.portraitCaption}</span>
              <MoveRight size={16} />
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <SectionHeader
            eyebrow={content.sections.about.eyebrow}
            title={content.sections.about.title}
            description={content.sections.about.description}
            icon={Sparkles}
          />
          <div className="about-card">
            {content.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeader
            eyebrow={content.sections.experience.eyebrow}
            title={content.sections.experience.title}
            description={content.sections.experience.description}
            icon={sectionIcons.experience}
          />
          <div className="card-grid">
            {content.experience.map(({ role, company, period, highlights, icon: Icon }) => (
              <article className="info-card" key={role}>
                <Icon className="card-icon" size={24} />
                <div>
                  <span className="card-period">{period}</span>
                  <h3>{role}</h3>
                  <p className="card-subtitle">{company}</p>
                  <ul>
                    {highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="content-section">
          <SectionHeader
            eyebrow={content.sections.education.eyebrow}
            title={content.sections.education.title}
            description={content.sections.education.description}
            icon={sectionIcons.education}
          />
          <div className="card-grid single">
            {content.education.map(({ degree, institution, period, details, icon: Icon }) => (
              <article className="info-card" key={degree}>
                <Icon className="card-icon" size={24} />
                <div>
                  <span className="card-period">{period}</span>
                  <h3>{degree}</h3>
                  <p className="card-subtitle">{institution}</p>
                  {details && <p>{details}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionHeader
            eyebrow={content.sections.projects.eyebrow}
            title={content.sections.projects.title}
            description={content.sections.projects.description}
            icon={sectionIcons.projects}
          />
          <div className="card-grid">
            {content.projects.map((project) => (
              <article className="project-card" key={project.name}>
                <span className="card-period">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="technologies" className="content-section">
          <SectionHeader
            eyebrow={technologyTitle}
            title={technologyTitle}
            description={language === 'es' ? 'Pasa el cursor o toca una tecnología para ver cómo la he usado.' : 'Hover over or tap a technology to see how I have used it.'}
            icon={Code2}
          />
          <Technologies language={language} />
        </section>

        <section id="github" className="content-section">
          <SectionHeader eyebrow="GitHub" title={githubTitle} description="" icon={Github} />
          <GitHubActivity language={language} />
        </section>

        <section id="certifications" className="content-section final-section">
          <SectionHeader
            eyebrow={content.sections.certifications.eyebrow}
            title={content.sections.certifications.title}
            description={content.sections.certifications.description}
            icon={sectionIcons.certifications}
          />
          <div className="card-grid three certification-grid">
            {content.certifications.map((certification) => (
              <article className="certificate-card" key={certification.name}>
                <a
                  className="certificate-preview"
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${content.actions.openCredential}: ${certification.name}`}
                >
                  <img src={certification.preview} alt={`${certification.name} preview`} />
                </a>
                <span className="card-period">{certification.date}</span>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
                <a
                  className="card-link"
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content.actions.openCredential}
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
