# VAST Campus Electricity Dashboard (2026)

> **Smart Electricity Monitoring, Financial Intelligence & Sustainability Analytics**  
> **Vidya Academy of Science & Technology (VAST), Thrissur, Kerala, India**

![VAST Campus Electricity Dashboard](https://img.shields.io/badge/Platform-Electricity%20Dashboard-2563eb?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-059669?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-GitHub%20%7C%20Vercel-000000?style=for-the-badge)

---

## 🏛️ Institutional Identity & Governance

- **Institution:** Vidya Academy of Science & Technology (VAST)
- **Location:** Thalakkottukara, Thrissur, Kerala, India
- **Platform Designer & Developer:** **Arun Xavier**, Assistant Professor, Department of Electrical & Electronics Engineering (EEE)
- **Primary Data Administrator:** **Mr. Gopalakrishnan C S**, Technical Assistant, Vidya International Charitable Trust (VICT)
- **Utility Provider:** Kerala State Electricity Board (KSEB) · High Tension HT-IIA Educational Tariff

---

## ⚡ Campus Solar Generation Fleet

The campus deploys a multi-rooftop solar fleet spanning **235 kWp** total grid-connected capacity:

1. **South Block Solar Plant (15 kWp):** Pioneer rooftop unit (commissioned 2014).
2. **Auditorium Solar Plant (100 kWp):** Major high-yield rooftop installation (commissioned June 2018).
3. **Administration Block Solar Plant (120 kWp):** High-efficiency campus expansion (commissioned April 2026).
4. **Standby Captive Diesel Backup:** DG-1 (125 kVA) & DG-2 (380 kVA) sets for critical academic & laboratory continuity.

---

## 🎯 Key Architectural & Analytical Features

1. **Executive Management Overview:**
   - 12 verified Key Performance Indicators (KPIs) covering energy, grid exchange, tariffs, and net savings.
   - Dynamic **Energy Intelligence Highlights** offering automated insights into generation anomalies, self-consumption ratios, and peak efficiency.
2. **Interactive Campus Energy Flow:**
   - Visual mapping from generation sources (3 solar plants, 2 DGs, KSEB imports) to campus loads and grid exports.
   - Click-to-inspect popups with time-of-day tariffs, capacity factors (CUF), and equipment ratings.
3. **Solar Fleet Intelligence:**
   - Specific Yield (`kWh/kWp/day`) calculations calibrated for actual operational days.
   - Integrated high-resolution aerial installation layout map.
4. **Time-of-Use & KSEB HT-IIA Tariff Modeling:**
   - Zone 1 Normal (6:00 AM – 6:00 PM)
   - Zone 2 Peak (6:00 PM – 10:00 PM)
   - Zone 3 Off-peak (10:00 PM – 6:00 AM)
   - Maximum Demand (MD HT transformer charges) & statutory duties.
5. **Financial Accounting Integrity:**
   - Core Formula: `Net Savings = Projected All-KSEB Bill − (Actual KSEB Bill Paid − Utility Revenue) − Solar Bill`.
   - Incorporates **Utility Revenue** (Sheet Column AC) directly offsetting KSEB billing charges and boosting net campus financial savings.
   - Comparative multi-year stack charts analyzing historical cost savings vs utility bills.
6. **Carbon & Environmental Impact (CEA Baseline):**
   - Calibrated using the Central Electricity Authority (CEA) Indian Power Sector Grid Emission Factor (0.71 kg CO₂/kWh).
   - Equivalents: Coal avoided, mature trees absorption, EV driving kilometers, domestic households powered, thermal water conserved.
   - Alignment with UN Sustainable Development Goals (SDG 7, 11, 12, 13).
7. **Detailed Records & Analytics:**
   - Month-by-month tabular records with real-time text search and comprehensive period filtering.
   - Dedicated separate page views for Sustainability Impact and Institutional Governance.
8. **Responsive Enterprise Visual Design:**
   - Light, Medium, and Dark theme engine.
   - Fullscreen presentation mode for management reviews and board meetings.
   - Self-contained single-page architecture: Zero build dependencies, instantaneous cloud loading.

---

## 🚀 Deployment Instructions

### 1. Deploying to GitHub & GitHub Pages

1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: VAST Campus Energy Intelligence Platform 2026"
   ```
2. Create a new repository on GitHub (e.g. `vast-energy-intelligence`) and push:
   ```bash
   git remote add origin https://github.com/<your-username>/vast-energy-intelligence.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment**, select `Deploy from a branch`
   - Select Branch: `main` / `/ (root)` and click **Save**.

### 2. Deploying to Vercel

1. Import your GitHub repository directly on [Vercel Dashboard](https://vercel.com).
2. (Optional) In Vercel Project Settings > **Environment Variables**, add:
   - `GOOGLE_SHEET_ID`: your private Google Sheet ID
3. The platform will be deployed instantly on an SSL-secured custom URL.

---

## 🛡️ Anti-Scraping, AI Crawler & Google Sheet Protection

This project includes multi-layer enterprise protection against unauthorized AI replication, data scraping, and raw sheet leakage:

1. **AI Bot & Scraper Blocking (`robots.txt`):**
   - Explicitly disallows all major LLM training scrapers (`GPTBot`, `ChatGPT-User`, `CCBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, `PerplexityBot`, `Bytespider`, `Diffbot`, etc.).
2. **HTTP Protocol Security Headers (`vercel.json`):**
   - Serves `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai` at the edge server level before HTML is evaluated.
   - Enforces `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and strict `Referrer-Policy: no-referrer`.
3. **HTML Metadata Protections (`index.html`):**
   - Includes `<meta name="robots" content="noindex,nofollow,noai,noimageai">` and `<meta name="tdm-reservation" content="1">` (EU Text and Data Mining reservation standard).
4. **Google Sheet Source Protection (`/api/data.js`):**
   - Provides a Vercel Serverless Function proxy route (`/api/data`) that retrieves electricity records on the backend.
   - External visitors and inspection tools only see `/api/data` rather than your raw Google Sheet URL or ID.
   - Works seamlessly with offline fallback dataset `R` when tested locally.

---

## 📄 License & Institutional Governance

Developed for **Vidya Academy of Science & Technology (VAST)**, Thrissur, Kerala.  
*All rights reserved © 2026.*
