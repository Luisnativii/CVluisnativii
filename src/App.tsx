import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowUp,
  Code2,
  Download,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  FolderCode,
  Sparkles,
} from 'lucide-react';
import {
  Language,
  localizedContent,
  profile,
  sectionIcons,
} from './data';
import { GitHubActivity } from './GitHubActivity';
import { Portfolio } from './Portfolio';
import { Technologies } from './Technologies';

function SectionHeader({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <div className="section-header">
      <span className="section-icon" aria-hidden="true"><Icon size={21} /></span>
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

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;

        target.classList.add('has-entered');
        observer.unobserve(target);
      }
    }, { rootMargin: '0px 0px -24px' });

    document.querySelectorAll('.content-section > *').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell" id="top">
      <nav className="nav-bar" aria-label={content.nav.aria}>
        <a href="#top" className="brand-mark" aria-label={content.nav.top}>
          <span aria-hidden="true">LN</span>
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
          className="language-switch"
          type="button"
          onClick={() => setLanguage(nextLanguage)}
          aria-label={`${content.actions.language}: ${content.actions.languageTarget}`}
        >
          <Languages size={17} aria-hidden="true" />
          <span>{content.actions.languageShort}</span>
        </button>
      </nav>

      <main>
        <section className="hero-section" aria-labelledby="hero-name">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {content.profile.availability}
            </div>
            <h1 id="hero-name">{profile.name}</h1>
            <p className="hero-title">{content.profile.title}</p>
            <p className="hero-summary">{content.hero.summary}</p>
            <div className="hero-meta">
              {content.hero.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {content.actions.email}
              </a>
              <a className="ghost-button" href={profile.cvUrl} download>
                <Download size={18} />
                {content.actions.cv}
              </a>
              <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label={content.actions.github}>
                <Github size={19} />
              </a>
              <a
                className="icon-button"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={content.actions.linkedin}
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          <figure className="portrait-panel">
            <div className="portrait-frame">
              <img src={profile.photo} alt={content.profile.portraitAlt} width={1254} height={1254} fetchPriority="high" />
            </div>
            <figcaption className="portrait-caption">
              <MapPin size={16} aria-hidden="true" />
              {content.profile.location}
            </figcaption>
          </figure>
        </section>

        <section id="about" className="content-section">
          <SectionHeader
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
            title={content.sections.education.title}
            description={content.sections.education.description}
            icon={sectionIcons.education}
          />
          <div className="card-grid">
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
            title={content.sections.projects.title}
            description={content.sections.projects.description}
            icon={sectionIcons.projects}
          />
          <div className="card-grid">
            {content.projects.map((project) => (
              <article className="project-card" key={project.name}>
                <FolderCode className="card-icon" size={24} aria-hidden="true" />
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
          <h3 className="portfolio-extra-title">
            {language === 'es' ? 'Portafolio de aplicativos' : 'Application portfolio'}
          </h3>
          <Portfolio language={language} />
        </section>

        <section id="technologies" className="content-section">
          <SectionHeader
            title={technologyTitle}
            description={language === 'es' ? 'Pasa el cursor o toca una tecnología para ver cómo la he usado.' : 'Hover over or tap a technology to see how I have used it.'}
            icon={Code2}
          />
          <Technologies language={language} />
        </section>

        <section id="github" className="content-section">
          <SectionHeader title={githubTitle} description="" icon={Github} />
          <GitHubActivity language={language} />
        </section>

        <section id="certifications" className="content-section">
          <SectionHeader
            title={content.sections.certifications.title}
            description={content.sections.certifications.description}
            icon={sectionIcons.certifications}
          />
          <div className="card-grid three">
            {content.certifications.map((certification) => (
              <article className="certificate-card" key={certification.name}>
                <a
                  className="certificate-preview"
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${content.actions.openCredential}: ${certification.name}`}
                >
                  <img src={certification.preview} alt="" loading="lazy" decoding="async" />
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
      </main>
      <footer className="page-footer">
        <span>{profile.name}</span>
        <a href="#top" className="card-link">
          {content.nav.top} <ArrowUp size={16} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}

export default App;
