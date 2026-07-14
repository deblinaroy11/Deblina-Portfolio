# Design Spec — Replication Task

This is a replication task. The ground-truth reference is the live portfolio at
https://mohithfolio-dbt2gbc9.manus.space/ (Mohith Pandikunta QA portfolio).
The goal is to reproduce its design faithfully while replacing ALL content with
Deblina Roy's resume data. Fidelity to the reference OVERRIDES all other style guidance.

## Reference Design (ground truth)

- **Theme**: Light, clean, modern SaaS-like. White/very light blue-gray backgrounds, blue primary (#2563eb range), rounded-xl cards, soft shadows, subtle gradients.
- **Nav (sticky)**: avatar photo + name + tiny uppercase "QA & TEST AUTOMATION ENGINEER" subtitle left; links Home / Expertise / Skills / Experience / Projects / Education / Contact + solid blue "Resume" pill button right. Green online dot next to name.
- **Floating pill** below nav top-right: orange gradient "🚀 V3.0 DEV NEW — Tap to explore features".
- **Hero (2 columns)**:
  - Left: giant blue typewriter H1 cycling role words; "⚡ Working On" marquee pill of tech tags; green "Open to Work · City / Remote" pulse badge; intro paragraph with bold name & role; Meta key-client card (meta logo tile, "KEY CLIENT EXPERIENCE • AR/VR DEVICES TESTING", bold title, small desc); Download Resume (solid blue) + Get in Touch (outline) buttons; 4 square social buttons (LinkedIn blue, GitHub dark, Email red, WhatsApp green).
  - Right: "BUILD ENVIRONMENT" 3 version pills (v1.0 Live ACTIVE green, v2.0 RC, v3.0 Dev NEW) + orange marquee strip; big "QA TEST REPORT" card with teal gradient header, company badge, big % ring + 3 stat tiles (colored: blue/red/green) + labeled progress bars.
- **Expertise**: pill label "Quality Assurance Domain", H2 "Core Testing Expertise", 4 cards (emoji icon, title, desc, 3 ✓ items revealed on hover, "Hover to expand ▼").
- **Skills**: H2 "Technical Skills & Tools"; 3 gauge cards (circular percentage ring: teal/green/purple) flipping on hover to a list of skills with subtitles; below, "CORE METHODOLOGIES & TESTING COMPETENCIES" card with colorful dot-pill tags.
- **Experience**: label "Work History", H2 "Professional Journey", vertical timeline with dot, card: role, company blue, "Client: Meta" badge, dates right, location, intro, ✓ bullet list with bold highlights.
- **Projects**: label "Portfolio Work", H2 "Featured QA Projects", 2 cards: top row tag + date, title, "Client: Meta" badge, description, dot bullets.
- **Education**: label "Academic Background", H2 "Education", 3 cards with degree/field/institution/location, status badges (✅ Completed etc.), year at bottom.
- **Contact**: H2 "Let's Connect" + description; left column Email/Phone/Locations with icon tiles and copy-email button; right "File a Connection Ticket" form card (ticket ID header, Reporter Name, Reporter Email, Description) with File Ticket (mailto), Send Email, Send WhatsApp buttons.
- **Footer**: name, © 2026, LinkedIn/GitHub icons, version badge.
- Fonts: clean sans (system-ish, similar to Inter/Nunito Sans). Headings bold dark slate.

## Content Source (Deblina Roy resume)

All names, titles, contact info, experience, projects, education, skills, and achievements come from `/home/ubuntu/portfolio_notes.md` mapping (resume: Deblina Roy, QA Engineer, Tech Mahindra, Meta Reality Labs project, MCA from KIIT, Bravo Award, AI White Belt).

## Style Decisions
- Replicate the layout/structure/interaction patterns 1:1; adapt numbers/stats to Deblina's resume (800+ test cases, 30+ VR OS releases, 99% stability, zero critical defects).
- Placeholder profile avatar: generated female avatar illustration (user can replace).
- WhatsApp uses +916295237346; email deblinaroyy@gmail.com; LinkedIn https://www.linkedin.com/in/roy-deblina/; GitHub https://github.com/deblinaroy11.
