You are a web developer + content designer. Produce a single-page responsive website (complete HTML file with embedded CSS and minimal JS) for a drone-based high-rise building cleaning and painting startup operating in Chandigarh / Punjab / Haryana / Delhi NCR. Output one complete HTML file only. Do NOT output additional commentary.

Requirements:
- Mobile-first, responsive layout using CSS Grid/Flexbox and utility classes (no external frameworks).
- Critical site structure: header (logo + nav + CTAs), hero (video or image fallback), problem, solution, how-it-works (4-step graphic), service packages, interactive cost estimator form (JS), technology & safety, investor snapshot (download link placeholder), FAQ (FAQPage JSON-LD), contact form (name, email, phone, building height, message).
- SEO: Provide <title>, <meta name="description">, canonical tag, Open Graph tags, Twitter card.
- Include JSON-LD for Organization, LocalBusiness, Service, and FAQ (populate with the provided sample content).
- Accessibility: proper ARIA labels, alt attributes, semantic headings.
- Performance: optimized images (use <img src='placeholder.webp'>), lazy loading, defer non-critical JS.
- Visuals: provide placeholders with descriptive alt text and a CSS-styled SVG for the 4-step workflow (embedded inline SVG).
- Include "Investor Snapshot" card with a downloadable PDF placeholder link and a short metrics table (revenue per job, gross margin assumptions).
- Add a "Regulatory & Safety" section that references DGCA / Digital Sky registration requirements and a short checklist for each job.
- Add microcopy for CTAs, trust badges (insurance, DGCA compliance), and sample testimonials.
- Include an interactive cost estimator: inputs for building floors, facade area (m²) — output estimated duration (hours), crew size, and estimated price (based on per m² and height multipliers). Implement the calculation in plain JS.

Content requirements (copy):
- Use H1: "Safe. Fast. Cost-Effective High-Rise Cleaning & Painting — By Drone."
- Use key SEO phrases organically: "drone building cleaning", "high-rise facade cleaning Chandigarh", "drone painting services Delhi NCR", "DGCA compliant drone services".
- Provide 3 service package cards (Starter / Pro / Enterprise) with short bullets and price ranges in INR.
- Provide 5 FAQs with concise answers.

Citations:
- Embed a "Sources" footer with links to Lucid Bots Sherpa pages and the DGCA drone rules. Use these exact link values:
  - https://get.lucidbots.com/sherpa-drones/
  - https://siteserverobotics.co.uk/sherpa-drone
  - https://lucidbots.shop/products/sherpa-academy-online-training-course
  - https://digitalsky.dgca.gov.in/

Design & tone:
- Professional, modern, investor-friendly. Use short paragraphs, strong lead statements, and bullets.
- Use dark-slate background with a high-contrast accent (safety orange). Use Inter or system fonts.

Deliverables:
- A single .html file that is ready to drop on a server. Inline small CSS and JS are acceptable, but keep files minimal.
- Provide sample inline SVGs for hero icon and the 4-step workflow.
- Placeholder image sources should be visible (e.g., /assets/hero.webp) with good alt text.

Finish: Place everything in a single HTML file and ensure forms submit to a placeholder "#contact".
