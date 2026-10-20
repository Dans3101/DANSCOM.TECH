# DANSCOM — Official Portfolio & Digital Services Platform
**Representing Daniel Musembi**

A high-performance, dark-first, accessible, PWA-enabled multi-page personal portfolio and digital services website engineered specifically for **100% free hosting on GitHub Pages**.

---

## 🌟 Overview & Capabilities

- **Brand:** DANSCOM
- **Owner:** Daniel Musembi (`musembidaniel615@gmail.com`)
- **Education:** Bachelor of Arts in Criminology and Penology, Maasai Mara University (2019–2023)
- **Positioning:** Executive Virtual Assistance, AI Automation, Responsive Web Development, Trading Technology Experiments, and Investigative Online Research.
- **Hosting Strategy:** Zero-cost static hosting via free GitHub Pages (no database, no PHP, no server maintenance).
- **PWA Ready:** Installable on desktop Chrome, Android, and iOS Safari with offline caching via Service Worker.

---

## 📁 Repository File Structure

Every file is an ordinary static asset with clean relative paths (`./`) so it works out-of-the-box on both root domains and GitHub Pages project subpaths:

```text
├── index.html                     # Homepage (Hero, Profile, Services, Projects, Process, CTA)
├── about.html                     # Professional Biography, Criminology Degree & Toolkit
├── services.html                  # Master Service Catalog & Deliverable Matrix
├── virtual-assistant.html         # Full-Service VA, Real Estate & E-Commerce Details
├── ai-automation.html             # AI Workflows, Prompt Systems & API Feasibility
├── development.html               # Static Web Dev, PWA Engineering & Technical Skills
├── trading-technology.html        # DANSCOMFX, Deriv Bot Prototype & Risk Disclaimers
├── writing-research.html          # Investigative Research (OSINT) & Technical Writing
├── projects.html                  # Filterable Portfolio with Modal Deep-Dives
├── blog.html                      # Searchable & Filterable Articles Directory
├── article-virtual-assistance.html# Guide: VA Scaling & Inbox Zero Protocols
├── article-ai-workflows.html      # Guide: Deterministic AI Workflows in Operations
├── article-static-sites.html      # Guide: Zero-Cost Static Architecture on GitHub Pages
├── article-research.html          # Guide: High-Signal Online Research & Criminology Methods
├── contact.html                   # Interactive Inquiry Form with Mailto & Copy Email
├── privacy.html                   # Transparent Static Privacy Policy
├── terms.html                     # Terms of Use, Service Scopes & Risk Notice
├── 404.html                       # Branded 404 Error Page
├── offline.html                   # PWA Service Worker Offline Fallback Page
├── manifest.webmanifest           # Progressive Web App Manifest
├── service-worker.js              # Versioned Cache Engine & Offline Routing
├── robots.txt                     # Search Engine Crawler Guidance
├── sitemap.xml                    # Canonical XML Sitemap
├── .nojekyll                      # Disables Jekyll processing on GitHub Pages
├── README.md                      # This Deployment Guide
└── assets/
    ├── css/
    │   └── main.css               # Complete Dark-First CSS Design System & Tokens
    ├── js/
    │   ├── config.js              # Central Configuration (Email, Brand, Socials)
    │   ├── main.js                # Theme Toggle, Mobile Nav Drawer, PWA & Toast Engine
    │   ├── projects.js            # Projects Data Store, Filters & Modal Controller
    │   ├── blog.js                # Blog Engine, Client-side Search & Share Functions
    │   ├── contact.js             # Form Validation & Mailto Generator
    │   └── zip-export.js          # In-Browser 1-Click ZIP Packager for Deployment
    ├── icons/
    │   ├── favicon.svg            # High-Resolution Favicon
    │   ├── icon-192.svg           # PWA 192x192 SVG Icon
    │   └── icon-512.svg           # PWA 512x512 Maskable SVG Icon
    └── images/
        └── profile-placeholder.svg# Branded Monogram Portrait Placeholder
```

---

## 🚀 Step-by-Step GitHub Pages Deployment Guide

You can deploy this website completely free from a **computer** or a **mobile smartphone browser** in under 5 minutes without writing any terminal commands.

### Method A: Deploying from a Computer (Browser or Git)

1. **Sign in to GitHub:** Go to [github.com](https://github.com) and log into your account (`DanielMusembi`).
2. **Create a New Repository:**
   - Click the **+** icon in the top right &rarr; **New repository**.
   - **Repository name:**
     - Option 1 (User Root Site): Name it `danielmusembi.github.io` (your site will live at `https://danielmusembi.github.io/`).
     - Option 2 (Project Site): Name it `danscom-portfolio` (your site will live at `https://danielmusembi.github.io/danscom-portfolio/`).
   - Set visibility to **Public**.
   - Do **NOT** initialize with a README (this repository already provides one).
   - Click **Create repository**.
3. **Upload Files:**
   - On the repository page, click **uploading an existing file**.
   - Drag and drop **all files and folders** into the upload box.
   - Ensure `index.html` and `.nojekyll` are located at the very root of the repository, not inside a subfolder!
   - Click **Commit changes**.
4. **Enable GitHub Pages:**
   - In your repository, click **Settings** (top tab).
   - On the left sidebar, click **Pages**.
   - Under **Build and deployment &rarr; Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and leave the folder set to `/ (root)`.
   - Click **Save**.
5. **View Your Live Website:**
   - Wait 60–90 seconds. Refresh the Settings &rarr; Pages screen.
   - A banner will appear: *"Your site is live at https://danielmusembi.github.io/danscom-portfolio/"*.
   - Click the link to open your live production website!

---

### Method B: Deploying Directly from a Smartphone Browser

1. Open Chrome or Safari on your phone and navigate to [github.com](https://github.com) (Switch to **Desktop Site** in browser settings if needed).
2. Tap **+ &rarr; New Repository** &rarr; Name it `danscom-portfolio` &rarr; Set to **Public** &rarr; **Create**.
3. Tap **Upload files** &rarr; Select files from your phone's file manager &rarr; Commit changes.
4. Go to **Settings &rarr; Pages** &rarr; Branch: `main` &rarr; Folder: `/(root)` &rarr; **Save**.

---

## ⚙️ How to Personalize Your Website

All primary website settings are centralized in one file: **`assets/js/config.js`**.

### 1. Update Email, Socials & Contact Info
Open `assets/js/config.js` and edit:
```javascript
window.DANSCOM_CONFIG = {
  brand: {
    owner: 'Daniel Musembi',
    ...
  },
  contact: {
    email: 'musembidaniel615@gmail.com', // Your verified email
    phonePlaceholder: '+254 7XX XXX XXX',
    whatsappPlaceholder: 'https://wa.me/254XXXXXXXXX',
  },
  socials: {
    github: 'https://github.com/DanielMusembi',
    linkedin: 'https://www.linkedin.com/in/daniel-musembi',
  }
};
```

### 2. Replace the Portrait Image
Drop your real photo into `assets/images/profile-portrait.jpg` (or `.png`), and update the `<img src="...">` tag in `index.html` and `about.html`.

### 3. Add or Modify Projects
Open `assets/js/projects.js` to add your new projects, live demos, or GitHub repositories. The projects page will dynamically render your updates automatically.

### 4. Optional Custom Domain (e.g. `danscom.com`)
1. Purchase a domain from any registrar (Namecheap, Cloudflare, Google Domains).
2. In GitHub repository **Settings &rarr; Pages &rarr; Custom domain**, enter your domain name.
3. Check the box for **Enforce HTTPS**.
4. In your domain registrar's DNS settings, add the 4 GitHub Pages `A` records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

---

## ✅ Pre-Launch Quality Checklist

- [x] **Relative Linking:** All internal links (`./about.html`, `./assets/...`) tested for GitHub Pages subpath compatibility.
- [x] **Nojekyll File:** `.nojekyll` included to bypass Jekyll file skipping.
- [x] **Contact Form:** Client-side validation + transparent mailto builder to `musembidaniel615@gmail.com`.
- [x] **Mobile Responsiveness:** Tested navigation drawer, readable typography, and zero-overflow grid layouts.
- [x] **PWA Install & Offline:** Valid `manifest.webmanifest`, `service-worker.js`, and `offline.html` included.
- [x] **Dark / Light Theme:** Accessible theme toggle with persistence in `localStorage`.
- [x] **Zero Fabrication:** All credentials, criminological degree, prototypes, and disclaimers strictly honest.
- [x] **One-Click Download:** Built-in "Download GitHub Pages Package (.zip)" button powered by JSZip.

---

&copy; 2026 DANSCOM. Built with precision for Daniel Musembi.
