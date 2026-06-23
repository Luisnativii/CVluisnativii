import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  Sparkles,
} from 'lucide-react';
import {
  certifications,
  education,
  experience,
  focusAreas,
  profile,
  projects,
  sectionIcons,
  stats,
  summary,
} from './data';

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
      <div className="section-kicker">
        <Icon size={17} />
        <span>{eyebrow}</span>
      </div>
      <div className="section-title-row">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-frost">
      <div className="page-shell">
        <nav className="nav-bar" aria-label="Primary navigation">
          <a href="#top" className="brand-mark" aria-label="Go to top">
            LN
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
          </div>
        </nav>

        <section id="top" className="hero-section">
          <div className="hero-copy">
            <div className="availability">
              <Sparkles size={16} />
              {profile.availability}
            </div>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-summary">{summary}</p>
            <div className="hero-meta">
              <span>
                <MapPin size={16} />
                {profile.location}
              </span>
              <span>Business Central AL</span>
              <span>ERP Automation</span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Email me
              </a>
              <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={19} />
              </a>
              <a
                className={`icon-button ${profile.linkedin === '#' ? 'is-disabled' : ''}`}
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <a className={`ghost-button ${profile.cvUrl === '#' ? 'is-disabled' : ''}`} href={profile.cvUrl}>
                <Download size={18} />
                CV
              </a>
            </div>
          </div>

          <div className="portrait-panel" aria-label="Portrait of Luis Nativi Claude">
            <div className="portrait-frame">
              <img src={profile.photo} alt="Luis Nativi Claude" />
            </div>
            <div className="portrait-caption">
              <span>Open to global teams</span>
              <MoveRight size={16} />
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <SectionHeader
            eyebrow="About me"
            title="Reliable software for real business workflows."
            description="I bring technical curiosity, teamwork, and a delivery mindset to systems that need to be useful beyond the first release."
            icon={Sparkles}
          />
          <div className="about-grid">
            <div className="about-card">
              <p>
                I am a Software Developer currently working with Microsoft Dynamics 365 Business Central and AL. My
                professional focus is building maintainable ERP functionality, automating operational workflows, and
                translating business needs into reliable technical solutions.
              </p>
              <p>
                I adapt quickly to team environments, enjoy learning new topics, and care deeply about delivering
                quality work that remains clear, scalable, and valuable over time.
              </p>
            </div>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ label, icon: Icon }) => (
              <div className="focus-card" key={label}>
                <Icon size={20} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="content-section">
          <SectionHeader
            eyebrow="Education"
            title="Academic foundation in engineering."
            description="Formal computer engineering studies paired with practical business software experience."
            icon={sectionIcons.education}
          />
          <div className="card-grid single">
            {education.map(({ degree, institution, period, details, icon: Icon }) => (
              <article className="info-card" key={degree}>
                <Icon className="card-icon" size={24} />
                <div>
                  <span className="card-period">{period}</span>
                  <h3>{degree}</h3>
                  <p className="card-subtitle">{institution}</p>
                  <p>{details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeader
            eyebrow="Experience"
            title="Hands-on roles across ERP, data, and reporting."
            description="Experience connected to operational systems, database workflows, dashboards, and process automation."
            icon={sectionIcons.experience}
          />
          <div className="card-grid">
            {experience.map(({ role, company, period, highlights, icon: Icon }) => (
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

        <section id="projects" className="content-section">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work, ready for real case studies."
            description="These are temporary examples. They are structured so your real projects can be dropped in cleanly."
            icon={sectionIcons.projects}
          />
          <div className="card-grid three">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <span className="card-period">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tech.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className={`card-link ${project.link === '#' ? 'is-disabled' : ''}`} href={project.link}>
                  View project
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="content-section final-section">
          <SectionHeader
            eyebrow="Certifications"
            title="Credentials prepared for PDF links."
            description="Each card can link to Google Drive, a PDF file, or a verification page once you share the real certificates."
            icon={sectionIcons.certifications}
          />
          <div className="card-grid three certification-grid">
            {certifications.map((certification) => (
              <article className="certificate-card" key={certification.name}>
                <a
                  className="certificate-preview"
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${certification.name} certificate`}
                >
                  <img src={certification.preview} alt={`${certification.name} certificate preview`} />
                </a>
                <span className="card-period">{certification.date}</span>
                <h3>{certification.name}</h3>
                <p>{certification.issuer}</p>
                <a
                  className={`card-link ${certification.link === '#' ? 'is-disabled' : ''}`}
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open credential
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
