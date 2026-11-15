# Varshini — Personal Developer Portfolio

Modern, professional, visually impressive personal developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**, styled in the curated **Arctic Blue** colour palette.

---

## 🎨 Theme System: Arctic Blue

The site uses the exact selected Arctic Blue colour scheme, centralized in [`src/theme.js`](file:///c:/Users/LENEVO/OneDrive/Desktop/portfolio/src/theme.js) and configured in [`tailwind.config.js`](file:///c:/Users/LENEVO/OneDrive/Desktop/portfolio/tailwind.config.js):

| Role | Colour Name | HEX Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Main Background** | Ice White | `#F8FAFC` | Dominant site canvas & background |
| **Primary Brand** | Cobalt Blue | `#1D4ED8` | Primary buttons, active nav, main highlights |
| **Secondary Interactive** | Sky Blue | `#3882F6` | Hover effects & secondary interactions |
| **Accent** | Aqua Blue | `#0EA5E9` | Decorative accents, badges, and glows |
| **Main Text & Headings** | Charcoal Slate | `#1F2937` | High-contrast readable typography |
| **Surfaces & Borders** | Soft Blue | `#DBEAFE` | Subtle card borders, tinted surfaces |
| **Main Card Surface** | White | `#FFFFFF` | Elevated project and section cards |

---

## 📁 Key File Locations & Instructions

### 1. Adding Your Profile Photo
- **Destination Folder:** `public/`
- **Filename:** `varshini-profile.jpg` (or `.png`)
- **Path:** `public/varshini-profile.jpg`
- **Current Behavior:** A stylish, tech-themed vector monogram placeholder is active until you drop your photo into the `public/` folder. Once added, your photo will automatically display!

### 2. Adding Your Final Resume PDF
- **Destination Folder:** `public/`
- **Filename:** `Varshini_Resume.pdf`
- **Path:** `public/Varshini_Resume.pdf`
- **Current Behavior:** Both the **"View Resume"** and **"Download Resume"** buttons in the navigation bar, hero section, and contact section are already wired to `/Varshini_Resume.pdf`. Once you copy your final resume file into `public/`, both buttons will immediately open and download it.

---

## 🚀 Running Locally

```bash
# Install dependencies (already completed)
npm install

# Start local development server
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:5173`).

---

## 🏗️ Production Build

```bash
npm run build
```
This produces an optimized production bundle inside the `dist/` directory, ready for one-click deployment on **Vercel** or **Render**.

---

## 📑 Portfolio Sections Breakdown
1. **Navigation Bar:** Glassmorphism header with active section tracking, smooth scroll, and mobile responsive menu.
2. **Hero Section:** Student developer introduction, location, core domain pills, action CTAs, and social links.
3. **About Me:** Genuine curiosity-driven mission, personal tenets, and core interest domains (AI, Cybersecurity, Research, Full-Stack).
4. **Education:** Academic timeline from AIT Chikkamagaluru (B.E. Data Science 2028), PU College (96.67%), and SSLC (95.52%).
5. **Technical Skills:** Visually organised categories (Frontend, Backend, Programming/DSA, Databases, Tools & Platforms).
6. **Featured Projects:**
   - **Stitchly:** Mobile-first tailoring management system with Kannada voice interface.
   - **FarmFlow:** SIH 2026 internal round selected marketplace and decision-support platform with Gemini Vision crop health indicator.
   - **HarmoniOcean AI:** Marine conservation and pollution awareness platform from Bengaluru 24h Hackathon.
7. **Ongoing Research:** AI-Based Email Phishing Analyser using verification-stance analysis and link intelligence.
8. **Compact Projects & Experiments:** Expense Tracker (PHP + JSON), YouTube Clone, Amazon Clone, and Rock Paper Scissors Game.
9. **Experience & Programs:** IBM SkillsBuild Quantum Computing Virtual Internship & Bengaluru 24h Hackathon.
10. **Achievements:** Smart India Hackathon 2026 Internal Round Selection & Bengaluru 24-Hour Hackathon.
11. **Certifications:** Reusable credential cards for Udemy Full-Stack (62 hrs), Udemy SQL (14.5 hrs), NPTEL Python Data Science (Elite 71%), and NPTEL Computer Networks (78%).
12. **Contact & Socials:** Direct email (`varu91490@gmail.com`) with quick copy button, mail composer, GitHub, LinkedIn, and LeetCode.
13. **Footer:** Monogram, back-to-top button, and Arctic Blue credits.
