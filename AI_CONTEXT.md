# AI Context - Luis Nativi Claude Portfolio

This file is a handoff context for future AI sessions working on this project. Read it before making changes.

## Project Summary

This project is a personal portfolio / web CV for Luis Nativi Claude.

The goal is to present Luis as a Software Developer with a professional, modern, premium dark website. The site is written in English and should help with remote job opportunities and possible international relocation.

The website is built with:

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- Docker
- Nginx for production serving

The repository is connected to GitHub:

- Remote: `https://github.com/Luisnativii/CVluisnativii.git`
- Branch: `main`

## Personal Profile

- Name: Luis Nativi Claude
- Professional title: Software Developer
- Location: El Salvador
- Availability: Open to remote opportunities and relocation worldwide
- Email: `luis.nativi2018@gmail.com`
- GitHub: `https://github.com/Luisnativii`
- LinkedIn: `https://www.linkedin.com/in/luis-nativ%C3%AD-b64b11202`
- CV PDF: not created yet

LinkedIn note:

- The user shared a LinkedIn URL from the mobile share flow with tracking parameters.
- LinkedIn could not be verified externally because it blocks unauthenticated access.
- The clean encoded URL above is the one currently used in code.

## Current Site Structure

Main sections currently present:

- About
- Education
- Experience
- Projects
- Certifications

Hero includes:

- Name
- Title
- Summary
- Location
- Focus tags
- Email button
- GitHub button
- LinkedIn button
- CV button disabled until a PDF exists
- Professional photo

The visual style should remain:

- Dark premium background
- Cold gray / deep black base
- Light blue accent inspired by Luis's shirt in the photo
- Warm gold/orange accent inspired by the photo background
- Professional, elegant, modern, and sober

Avoid turning the site into a generic template. Keep it polished and personal.

## Important Files

- `src/data.ts`: most editable content lives here.
- `src/App.tsx`: main UI and section rendering.
- `src/styles.css`: global visual design and responsive CSS.
- `public/luis-nativi-claude.png`: professional photo.
- `public/certificates/`: certificate PDFs.
- `public/certificates/previews/`: generated PNG previews for certificate cards.
- `Dockerfile`: production Docker build.
- `nginx.conf`: Nginx production config.
- `package.json`: project scripts and dependencies.

## Current Profile Summary

Current English summary used in the site:

> Software Developer focused on building reliable business solutions with a strong sense of ownership, adaptability, and continuous learning. I enjoy working with teams, researching new technologies, and delivering maintainable systems that support long-term project value and operational efficiency.

## Focus Areas

Current focus areas:

- Microsoft Dynamics 365 Business Central
- AL Development
- ERP Workflow Automation
- SOAP XML Integrations
- Dockerized Applications
- GitHub, Jira & Delivery Flow

## Education

- Degree: B.S. in Computer Engineering
- Institution: Universidad Centroamericana Jose Simeon Canas (UCA)
- Status: Currently in 9th cycle

Real context from user:

- User studies Ingenieria Informatica at Universidad Centroamericana Jose Simeon Canas (UCA).
- User is currently in cycle 9, close to the final year.

## Work Experience

### Farmacia San Nicolas

Current site role:

- Business Central AL Developer
- Company: Departamento de Informatica, Farmacia San Nicolas
- Period: 1 year

Known responsibilities:

- Development in Microsoft Dynamics 365 Business Central using AL.
- Responsible for inventory, warehouse transfer, and transit workflows.
- Accounting-requested improvements to automate operational and administrative processes.
- RDLC report creation.
- Complete inventory transfer flow between sales rooms, warehouses, and transit locations.

### Pergaminos

Current site role:

- Junior Database Administrator & Dashboard Developer
- Company: Pergaminos
- Period: Short-term role

Known responsibilities:

- Managed database information for document digitization and warehouse location.
- Built dashboards to monitor staff productivity.
- Created queries to locate documents by floor and shelf.
- Improved records and database connections for filtering and search workflows.

## Certifications

The user added certificate PDFs under `public/certificates/`.

All available certificate PDFs currently in the project:

- `diploma-estrategias-ingles.pdf`
- `diploma-informatica-forense.pdf`
- `diploma-pensamiento-critico-ia.pdf`
- `Math-Basics.pdf`
- `Python-Programming-Basics.pdf`
- `PythonUdemy.pdf`
- `UI.pdf`

The user asked to display only the most important certificates first, in this order:

1. Python Programming Basics - Huawei ICT Academy
2. Complete Python Course 2024: From Zero to Master with Python 3 - Udemy
3. Critical Thinking for Using Artificial Intelligence - Platzi
4. Math Basics - Huawei ICT Academy
5. Introduction to UI Design - UCA

Current displayed certifications in `src/data.ts`:

- Python Programming Basics
  - Issuer: Huawei ICT Academy
  - Date: May 2026
  - Link: `/certificates/Python-Programming-Basics.pdf`
  - Preview: `/certificates/previews/python-programming-basics.png`
- Complete Python Course 2024: From Zero to Master with Python 3
  - Issuer: Udemy
  - Date: Jul 2024
  - Link: `/certificates/PythonUdemy.pdf`
  - Preview: `/certificates/previews/python-udemy.png`
- Critical Thinking for Using Artificial Intelligence
  - Issuer: Platzi
  - Date: May 2026
  - Link: `/certificates/diploma-pensamiento-critico-ia.pdf`
  - Preview: `/certificates/previews/ai-critical-thinking-platzi.png`
- Math Basics
  - Issuer: Huawei ICT Academy
  - Date: May 2026
  - Link: `/certificates/Math-Basics.pdf`
  - Preview: `/certificates/previews/math-basics.png`
- Introduction to UI Design
  - Issuer: Universidad Centroamericana Jose Simeon Canas (UCA)
  - Date: Sep 2023
  - Link: `/certificates/UI.pdf`
  - Preview: `/certificates/previews/ui-design.png`

Certificate previews were generated from the first page of each selected PDF and placed in:

- `public/certificates/previews/python-programming-basics.png`
- `public/certificates/previews/python-udemy.png`
- `public/certificates/previews/ai-critical-thinking-platzi.png`
- `public/certificates/previews/math-basics.png`
- `public/certificates/previews/ui-design.png`

The certificates grid currently behaves as:

- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile

Each certificate card shows a preview image and opens the full PDF in a new tab.

## Projects

Real projects have not been added yet.

Current placeholder projects:

1. Inventory Transfer Flow
2. Operations Dashboard
3. SOAP XML Integration

The user said they will later provide the most important projects. These projects may need:

- Clean repository
- Professional README
- Screenshots
- Test deployment/demo
- GitHub link
- Demo link if possible
- Strong portfolio case-study copy

Recommended project card format:

- Name
- Type
- Short description
- Technologies
- GitHub link
- Demo link
- Screenshot/preview
- Optional case study details: problem, solution, result

## CV PDF Status

The CV PDF does not exist yet.

The user wants help creating a professional CV later. The current priority is continuing the web CV/portfolio.

Recommended CV direction:

- Create an ATS-friendly professional resume first.
- Prefer English.
- Keep it clean and technical, probably 1 page.
- Later optionally create a more visual version matching the portfolio style.

Recommended tools/templates discussed:

- FlowCV, especially a Harvard-style clean template.
- Overleaf, especially Jake's Resume or a software engineer resume template.
- Canva only if using a simple ATS-friendly layout.
- Harvard tech resume examples as reference.

Questions planned for the future CV:

1. Should the CV be in English, Spanish, or both?
2. What role should it target: Software Developer, Business Central Developer, Junior Backend Developer, Full Stack Developer, ERP Developer, etc.?
3. Should the CV focus more on Business Central / ERP or general software development?
4. What is the user's real English level?
5. Which technologies are strongest and which are only basic?
6. What measurable achievements can be described from Farmacia San Nicolas?
7. Are there personal or university projects to include?
8. Are there more certifications or course certificates to include?
9. Should the CV include a photo or be ATS-only with no photo?
10. What countries or company types is the user targeting?

## Completed Work In This Conversation

Completed:

- Read the previous chat context from an attached text file.
- Reviewed the current project structure.
- Confirmed stack and main files.
- Proposed improvement plan.
- Created `public/certificates/`.
- User added certificate PDFs.
- Generated certificate preview PNGs.
- Replaced placeholder certifications with real certificates.
- Added certificate previews to certificate cards.
- Made certificate links open PDF files in a new tab.
- Adjusted certificate responsive layout.
- Added real LinkedIn URL.
- Verified production build with `npm.cmd run build`.
- Verified in browser:
  - Certificate images load correctly.
  - Desktop has 3-column certificate layout.
  - Tablet has 2-column certificate layout.
  - Mobile has 1-column certificate layout.
  - No horizontal overflow in tested breakpoints.

Build command used successfully:

```bash
npm.cmd run build
```

Important Windows note:

Running `npm run build` directly in PowerShell failed because the system blocked `npm.ps1` by execution policy. Use `npm.cmd run build` on this machine.

Development server used:

```bash
npm.cmd run dev -- --port 5173
```

Local URL:

```text
http://localhost:5173
```

## Pending Improvements

High priority:

- Add real project data.
- Add project screenshots or previews.
- Add GitHub/demo links for each project.
- Create a more complete skills section.
- Add real CV PDF when created.
- Add SEO and Open Graph.
- Deploy the site.

Medium priority:

- Improve project cards into case studies.
- Add Currently Learning section.
- Add Professional Goals section.
- Add subtle scroll animations.
- Improve accessibility and focus states.
- Add keyboard navigation polish.
- Add tests or automated checks before deployment.

Later:

- Bilingual English/Spanish mode.
- Filterable project tags.
- Move content to JSON or a simple CMS-like structure.
- Create a downloadable CV PDF with matching portfolio style.

## Recommended Next Order

Recommended order from the previous planning:

1. Finish core real data: LinkedIn, CV, certificates.
2. Replace projects with real projects.
3. Create a complete skills section.
4. Add SEO and Open Graph.
5. Deploy.
6. Add animations, filters, bilingual mode, and advanced enhancements.

Since LinkedIn and certificates are now done, the next natural step is:

1. Work on real projects.
2. Prepare repositories and demos.
3. Add project previews/screenshots.
4. Improve portfolio copy around project impact.

## Style Guidance For Future AI Work

Keep the user-facing site in English.

The user communicates mostly in Spanish and may have typos. Answer in Spanish unless they ask otherwise.

When changing the project:

- Prefer editing `src/data.ts` for content changes.
- Keep the current premium dark visual identity.
- Avoid major redesign unless explicitly requested.
- Do not remove existing user content.
- Keep cards polished and responsive.
- Test with `npm.cmd run build`.
- For frontend visual changes, verify in the browser when possible.

The user prefers collaborative planning before large changes. If the next change involves project content, ask for the project names, descriptions, technologies, repository links, and demo status.
