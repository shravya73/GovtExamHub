# GovtExamHub – One Platform. All Government Exams.

**GovtExamHub** is a modern, responsive, and comprehensive EdTech web application tailored for Indian competitive government exam aspirants preparing for **UPSC, SSC, Banking (IBPS/SBI), Railways (RRB), State PSCs (UPPSC, BPSC), Defence & Police, and Teaching (CTET/UGC NET)**.

---

## 🌟 Key Features

### 1. 🇮🇳 Modern Indian EdTech Aesthetic
- **Color Palette**: Sophisticated Navy Blue (`#0a1424`), Clean White/Slate, and vibrant Saffron/Orange (`#f97316` / `#ea580c`).
- **Typography**: Clean, accessible sans-serif font pairing (`Plus Jakarta Sans` & `Inter`).
- **Responsiveness**: Pixel-perfect on mobile phones, tablets, laptops, and ultra-wide desktops.

### 2. 🏛️ Comprehensive Exam Notifications & Calendar
- Cards covering all major central & state recruitment commissions:
  - **UPSC**: Civil Services (CSE), NDA, CDS
  - **SSC**: CGL, CHSL, Delhi Police & CAPF SI
  - **Banking**: IBPS PO/Clerk, SBI PO
  - **Railways**: RRB NTPC, Group D
  - **State PSC**: UPPSC PCS, BPSC CCE
  - **Teaching**: CTET, UGC NET
- Detailed view modal covering educational eligibility, age criteria & relaxations, exam stages, syllabus topics, and **direct links to official recruitment portals** (`upsc.gov.in`, `ssc.gov.in`, etc.).
- Clearly marked with **Demo Data Notices** to ensure transparency.

### 3. 📚 100% Free & Legal Study Materials
- Subject-wise notes, previous-year question papers (PYQs), and preparation guides.
- Open-access, public domain, and fair-dealing resources (e.g., Constitution of India extracts, NCERT summaries, Union Budget digests, Quantitative formula books).
- In-browser reading preview and simulated file downloads.

### 4. ⏱️ Interactive Mock Test & Quiz Engine
- Exam-hall experience styled like TCS iON / CBT online testing interfaces.
- Countdown timer with color-coded warning alert.
- Multiple-choice questions (MCQs) with single-choice selection.
- Option to Clear Response, Mark for Review, and navigate using the Question Palette.
- Instant evaluation: Score calculation with **negative marking**, accuracy percentage, and time taken.
- Comprehensive Question-by-Question review mode with detailed explanations.

### 5. 🛒 Doorstep Competitive Exam Books Marketplace
- Curated collection of top competitive titles: *Indian Polity by M. Laxmikanth*, *Quantitative Aptitude by Dr. R.S. Aggarwal*, *Modern History by Rajiv Ahir (Spectrum)*, *Lucent's GK*, and more.
- Book details modal with publisher details, table of contents, and syllabus mapping.
- Interactive Shopping Cart drawer with quantity controls (`+`, `-`, `trash`), discount savings calculation, and free delivery progress indicator.
- Demo Checkout Flow with shipping address form, payment mode simulation (UPI, Cards, Net Banking, COD), order ID generator, and downloadable demo invoice receipt.

### 6. 🔍 Global Search & Demo User Authentication
- Global interactive search modal (`Ctrl+K` / search button) indexing exams, books, notes, and mock tests with instant live filtering.
- Aspirant Sign In / Registration modal with demo auto-fill credentials.

### 7. 📖 About & Contact Helpdesk
- Official vision and mission description.
- Interactive contact form with category selector and instant feedback.
- Helpline toll-free number, Delhi Mukherjee Nagar hub address, social channels (Telegram, YouTube, WhatsApp).
- Frequently Asked Questions (FAQ) accordion.

---

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Icons**: Lucide React
- **Bundler & Dev Server**: Vite 5
- **Fonts**: Google Fonts (`Plus Jakarta Sans`)

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
```bash
# Clone or navigate to the project directory
cd DT

# Install dependencies (on Windows PowerShell, use npm.cmd if execution policy is restricted)
npm install
# or
npm.cmd install
```

### Development Server
```bash
# Start the local development server on port 3000
npm run dev
# or
npm.cmd run dev
```
Open your browser and navigate to `http://localhost:3000` to interact with the application.

### Production Build
```bash
# Build the optimized production bundle
npm run build
# or
npm.cmd run build

# Preview the production build locally
npm run preview
# or
npm.cmd run preview
```
The optimized production output will be generated in the `dist/` directory.

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Select your repository. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://www.netlify.com).
2. Set the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the contents of `dist/` to the `gh-pages` branch.

---

## ⚖️ Legal & Educational Disclaimer
GovtExamHub is an independent educational prototype portal created to consolidate publicly accessible information for students. GovtExamHub is **not affiliated with, associated with, or endorsed by** the Union Public Service Commission (UPSC), Staff Selection Commission (SSC), Railway Recruitment Boards (RRB), IBPS, or any State/Central Government department. All trademarks and official names are property of their respective holders. All dates and vacancies shown on the prototype are simulated demo data.

