# AMRITHA P — Personal Portfolio Website

A modern, minimal, production-grade personal portfolio website for **Amritha P**, a Computer Science Engineering student at Amal Jyothi College of Engineering. Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Highlights & Design System

- **Design Philosophy**: Minimal + Modern Tech.
- **Theme**: Premium Light Mode aesthetic.
- **Palette**:
  - Primary Background: `#FFFFFF`
  - Secondary Background: `#F8F7FC`
  - Primary Accent: `#A78BFA` (Lavender)
  - Secondary Accent: `#C4B5FD`
  - Dark Accent: `#7C3AED` / `#8B5CF6`
  - Primary Text: `#18181B`
  - Secondary Text: `#71717A`
  - Borders: `#EAE7F1`
- **Typography**: Plus Jakarta Sans & JetBrains Mono.
- **Custom Cursor**: Desktop lavender micro-cursor with an interactive spring-tracked outer ring and hover reaction on clickable items (automatically disabled on touch devices and for reduced motion).
- **Responsive**: Fully optimized for Mobile, Tablet, Laptop, and Desktop screens.
- **Data-Driven**: All personal information, projects, skills, and links reside in a centralized, easily editable data file (`src/data/portfolio.ts`).

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── resume.pdf                 # Resume placeholder (replace with official resume)
├── src/
│   ├── components/
│   │   ├── About.tsx              # About Me narrative & 3 education/focus cards
│   │   ├── Achievements.tsx       # Activities & Experiences (SIH, Workshops, YIP)
│   │   ├── Contact.tsx            # Form with validation, Formspree & mailto fallback
│   │   ├── CustomCursor.tsx       # Minimal lavender custom cursor
│   │   ├── Footer.tsx             # Wordmark, tagline, nav links, copyright
│   │   ├── Hero.tsx               # Tech visual card, monogram, CTAs & scroll indicator
│   │   ├── Navbar.tsx             # Sticky nav, active section indicator, mobile menu
│   │   ├── Projects.tsx           # Featured project showcase (Smart Water Purification IoT)
│   │   └── Skills.tsx             # Verified C Programming foundation & roadmap
│   ├── data/
│   │   └── portfolio.ts           # Centralized configuration & content
│   ├── hooks/
│   │   └── useActiveSection.ts    # Scroll tracking for active navigation highlight
│   ├── types/
│   │   └── index.ts               # Clean TypeScript definitions
│   ├── App.tsx                    # Root component layout
│   ├── index.css                  # Tailwind styles & smooth animations
│   ├── main.tsx                   # React root entrypoint
│   └── vite-env.d.ts              # Vite environment variables typing
├── index.html                     # HTML5 template with SEO metadata & fonts
├── package.json                   # Dependencies and scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Custom Tailwind color palette & shadows
├── tsconfig.json                  # TypeScript bundler configuration
├── tsconfig.node.json             # Vite TypeScript config
└── vite.config.ts                 # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0.0 or later recommended; tested on v26)
- **npm** (or pnpm / yarn)

### 2. Installation
```bash
npm install
```

### 3. Local Development
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Production Build
Compile TypeScript and generate the optimized production bundle:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

### Centralized Data (`src/data/portfolio.ts`)
Update all text, links, social URLs, and projects in one file:
- **Personal Details**: Update name, headline, college, email.
- **Profile Photo**: Set `profilePhotoUrl` to a path in `public/` (e.g. `"/profile.jpg"`) to replace the monogram avatar.
- **Resume**: Place your PDF file in `public/resume.pdf` and set `hasResume: true` in `personal`.
- **Social Links**: Populate the `url` property for LinkedIn and GitHub in `contact.socialLinks`.
- **Skills & Projects**: Add new languages or projects to `skills.items` and `projects.items`.

### Contact Form & Formspree
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set your Formspree endpoint URL:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
3. *Fallback behavior*: If `VITE_FORMSPREE_ENDPOINT` is omitted, the form automatically falls back to an encoded `mailto:` trigger to `amritaprathibha@gmail.com`.

---

## 🚢 Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI (`npm i -g vercel`) or push the code to a Git repository (GitHub / GitLab).
2. Import the project into the [Vercel Dashboard](https://vercel.com).
3. Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variable `VITE_FORMSPREE_ENDPOINT` if using Formspree.
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com).
2. Settings:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
3. Under **Site configuration > Environment variables**, add `VITE_FORMSPREE_ENDPOINT` (optional).
4. Click **Deploy site**.

