# Aninda Bhattacharjee - Personal Academic & Engineering Portfolio

A modern, minimalist personal website inspired by the clean academic layout of [hasib.xyz](https://hasib.xyz/), rebuilt with an elevated modern color palette, interactive theme switching (Dark & Light modes), responsive layouts, and personalized with your complete professional profile.

---

## 🌟 Key Highlights & Design Adaptations

1. **Design Architecture (Inspired by hasib.xyz)**
   - **Academic Minimalism:** Clean, typography-driven structure with comfortable reading widths (`~920px max-width`).
   - **Full Navigation Hierarchy:**
     - **Home:** Profile hero card with your real photo (`assets/profile.jpg`), current roles (University of Aizu, National Cyber Security Agency), research interest cards, and bio overview.
     - **Education:** Master's in Computer Science & Engineering at University of Aizu (Oct. 2026 – Oct. 2028), B.Sc. in CSE from RUET (Jan. 2015 – Aug. 2019), HSC from Birshrestha Noor Mohammad Public College (2012 – 2014), and SSC from Monipur High School (2002 – 2012).
     - **Research:** Graduate research at University of Aizu under Prof. Truong Cong Thang, research with Dr. Jaydeb Sarker (University of Nebraska, Omaha) on Bug Report Analysis and Explainability of Generative AI, thesis, and core domains (Robotics, Computer Vision, NLP, Computer Security).
     - **Experience:** Assistant Director at National Cyber Security Agency (ICT Division), Research Assistant at University of Nebraska Omaha, and Assistant Programmer at Department of ICT.
     - **Certifications:** All 8 official certifications & trainings (APCICT-ESCAP, EDGE, DoICT, BPATC, UC San Diego Java, RUET Robotics).
     - **Skills & Awards:** World Bank EATL-Prothom Alo App Contest 2nd Runner-up ("DANGUL"), Programming, Data Science/ML/DL, Frameworks & Mathematics.
     - **Contact:** Direct email, phone, location (Aizuwakamatsu, Japan · Dhaka, Bangladesh), and interactive message submission.
   - **Explicit Omission:** The *"Game Verdict"* gaming review log from the original site has been omitted as requested.

2. **Refined Modern Color Palette**
   - **Dark Mode (Default):** Deep Obsidian Navy (`#0B0F19` & `#111827`), Electric Indigo (`#6366F1`), and Luminous Cyan (`#06B6D4`).
   - **Light Mode:** Crisp Porcelain (`#F8FAFC` & `#FFFFFF`) with Rich Indigo (`#4F46E5`) and Deep Cyan (`#0891B2`).
   - Persistent theme toggle that remembers the user's preference in `localStorage`.

3. **Authentic Details from Your Profile**
   - **Name:** Aninda Bhattacharjee
   - **Profile Picture:** High-resolution portrait uploaded directly to `assets/profile.jpg`.
   - **Email:** `bhattacharjee.aninda15@gmail.com`
   - **Phone:** `+88 01705571463`
   - **Location:** Aizuwakamatsu, Fukushima, Japan · Dhaka, Bangladesh
   - **Current Degree:** Master of Science in Computer Science & Engineering, University of Aizu (Supervisor: Prof. Truong Cong Thang)
   - **Current Positions:** Assistant Director, National Cyber Security Agency | Research Assistant, University of Nebraska, Omaha

---

## 🚀 How to Run & Preview

### Option 1: Double-Click `start-server.bat` (Instant Localhost)
Simply double-click **`start-server.bat`** inside the folder:
- It launches a local server on `http://localhost:8000/`.
- It automatically opens your default web browser to the page.
- Requires **zero external software or dependencies** (uses native Windows PowerShell).

### Option 2: Direct Browser Open
Double-click **`index.html`** or right-click and choose **Open with** → Chrome / Edge / Firefox.

### Option 3: Python or Node (If Installed)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

---

## 📁 File Structure

```
aninda-portfolio/
├── index.html            # Main HTML5 semantic structure & section tabs
├── styles.css            # Modular CSS with variables, dark/light themes & responsiveness
├── script.js             # Tab router, theme manager, filters, BibTeX & lightbox
├── README.md             # Project documentation and guide
└── assets/               # Visual SVGs & icons
    ├── avatar.svg        # Stylized engineer avatar with tech ring
    ├── favicon.svg       # Monogram "AB" favicon
    ├── snapshot-lab.svg
    ├── snapshot-conference.svg
    ├── snapshot-kolkata.svg
    ├── snapshot-terminal.svg
    ├── snapshot-travel.svg
    └── snapshot-hackathon.svg
```

---

## 🚢 Deployment to GitHub Pages or Vercel

### Deploying to GitHub Pages
1. Push this folder to your repository: `https://github.com/Conformist101/Conformist101.github.io`
2. Go to repository **Settings** → **Pages** → Source: **Deploy from a branch** (`main` / root).
3. Your site will immediately be live at `https://conformist101.github.io/`.
