# ⚡ VAST Electricity Dashboard

A live, single-page web dashboard that shows how the campus of **Vidya Academy of Science and Technology (VAST), Thrissur** generates, buys and saves electricity. It turns the monthly electricity sheet into clear numbers, charts and animated pictures, so management can see the full picture in one place.

**Live page:** https://aruncx.github.io/vasteledata/

**Developed by:** Arun Xavier, Assistant Professor, Department of Electrical and Electronics Engineering (EEE), VAST, Thrissur.

---

## Why this dashboard? (Advantages)

| Advantage | What it means for the college |
|---|---|
| **Net saving at a glance** | Shows how much money solar generation saves compared with buying every unit from KSEB. |
| **True cost visibility** | Shows the bill if all units came from KSEB, what we actually paid KSEB, the solar bill, and the cost per unit with our mix of sources. |
| **Tariff awareness** | Zone 1, Zone 2 and Zone 3 amounts, plus the Maximum Demand (MD) charges of our HT connection. This helps plan when to use power. |
| **Clear energy mix** | Percentage share of solar, DG sets and KSEB, so dependence on diesel and grid is easy to see. |
| **Trends over time** | Month-wise charts of energy and bills help spot seasonal patterns and unusual months early. |
| **Live and effortless** | Connected to a Google Sheet. Enter the new month's readings and the dashboard updates by itself. No software, no re-upload, no extra cost. |
| **Proof of solar return** | Shows savings, days of campus electricity met by solar, and kWh per kWp for each plant. |
| **Sustainability story** | The Impact tab turns solar kWh into CO₂ avoided, coal not burned, trees, homes, diesel, water and more, linked to the UN Sustainable Development Goals. |
| **Easy for everyone** | Works on mobile and desktop, with Dark, Medium and Light themes and simple tabs. |
| **Useful for reporting** | Supports management reviews, audits and documentation with one consistent set of figures. |

---

## Energy sources tracked

- **DG-1:** diesel generator, 125 kVA
- **DG-2:** diesel generator, 380 kVA
- **Solar plants:** 15 kWp, 100 kWp and 120 kWp (the 120 kWp plant started in April 2026)
- **KSEB grid:** import, export, three tariff zones and MD charges

**KSEB tariff zones used in the page**

| Zone | Time | Type |
|---|---|---|
| Zone 1 | 6 AM – 6 PM | Normal |
| Zone 2 | 6 PM – 10 PM | Peak |
| Zone 3 | 10 PM – 6 AM | Off-peak |

---

## What is on the page

**Header and filters**
- College logo and campus photo.
- **Year** and **Month** dropdowns. Every section follows the selected period.
- A sync chip showing whether live data is on, the number of months loaded and the latest month.
- **Dark / Medium / Light** theme switch.
- Navigation tabs: Net saving, Energy flow, Sources, KSEB tariff, Trends, Month data, 🌱 Impact.

**Dashboard sections**
1. **Net saving** – large saving card with the percentage saved, plus cards for the all-KSEB bill, paid to KSEB, solar bill, and cost per unit (all-KSEB, our mix, and saving).
2. **Energy flow** – animated cards for Solar plants, Diesel generators, KSEB import, Export to KSEB, and campus consumption.
   - Click the **Diesel generators** card for a pop-up with DG-1 (125 kVA) and DG-2 (380 kVA).
   - Click the **Solar plants** card for a pop-up with the 15, 100 and 120 kWp plants, including kWh per kWp.
3. **Energy sources and mix** – source list and a doughnut chart with percentage values.
4. **KSEB tariff** – the amount to pay if all units came from KSEB, shown per zone, with MD charges and a bar showing where the bill goes.
5. **Trends** – monthly energy chart (with % on the bars when one year is selected) and a bills and savings chart.
6. **Month data** – table of every month in the selected period.

**🌱 Impact tab** (all values come from solar generation of the selected period)
- Total solar generation, CO₂ avoided and potential carbon-credit equivalent.
- Equivalents: coal not burned, trees, homes, petrol, EV distance, water, days of campus electricity met by solar, diesel saved, mobile phones charged, laps around the Earth by EV, solar performance per kWp, and LPG cylinders of CO₂.
- Six UN Sustainable Development Goal cards in the official colours (Goals 4, 6, 7, 11, 12 and 13).
- Numbers count up from 0 to the final value, with animated pictures.

---

## Where the data comes from

The page reads a **Google Sheet** and refreshes every 5 minutes (or when the sync chip is tapped). If the sheet cannot be reached, it shows the last saved copy of the data built into the page.

### Sheet layout (columns used)

| Column | Content |
|---|---|
| A | Month, for example `Oct-26` |
| B, C | DG-1 and DG-2 generation (kWh) |
| D, E, F | Solar 15, 100 and 120 kWp generation (kWh) |
| G | KSEB import, Zone 1 (kWh) |
| H | Total Zone 1 (net of export) |
| I, J | KSEB Zone 2 and Zone 3 units (kWh) |
| K | Total units (consumption) |
| L, M, N | Zone 1, 2 and 3 amounts (₹) |
| Q | MD charges (₹) |
| V | Projected bill if all units came from KSEB (₹) |
| W | KSEB bill actually paid (₹) |
| X | Solar bill (₹) |
| Y | Export to KSEB (kWh) |
| Z | Saving (₹) = V − W − X |

### Rules for entering data

- Keep the columns in the same order. Do not insert or move columns.
- Write the month like `Nov-26`. The page also understands `Nov 26`, `November 2026`, `26-Nov-2026` and `2026-11-01`.
- A month appears as soon as any generation or import number is entered. If Total Units is empty, the page works it out.
- Rows that are not months (such as financial-year TOTAL rows) are ignored.
- The **May 2018** row holds the **cumulative total for Jan 2014 – May 2018**. The page shows it separately and leaves it out of monthly charts.
- The sheet must be shared as **Anyone with the link can view**.

---

## How the main numbers are calculated

| Figure | Formula |
|---|---|
| Net saving | Projected all-KSEB bill − KSEB bill paid − solar bill |
| Saving percentage | Net saving ÷ projected all-KSEB bill |
| Cost per unit (all KSEB) | Projected bill ÷ total units |
| Cost per unit (our mix) | (KSEB paid + solar bill) ÷ total units |
| Saving per unit | Net saving ÷ total units |
| Solar share of consumption | (Solar generation − exported units) ÷ total consumption |
| Days of campus electricity met by solar | (Solar − exported units) ÷ average daily campus consumption |
| Solar performance | Solar kWh ÷ (installed kWp × days) |

### Impact factors (illustrative estimates, editable in the code)

| Equivalent | Factor used |
|---|---|
| CO₂ avoided | 0.71 kg CO₂ per kWh (CEA all-India weighted average, FY 2024-25, CO₂ Baseline Database v21.0) |
| Carbon-credit equivalent | 1 credit = 1 tCO₂e (indicative only, not issued credits) |
| Coal not burned | 0.55 – 0.70 kg per kWh |
| Trees | 21.8 kg CO₂ absorbed per tree per year |
| Homes | 1,200 kWh per household per year |
| Petrol | 2.3 kg CO₂ per litre |
| EV distance | 0.12 kWh per km |
| Water (thermal power) | 3 – 4 litres per kWh |
| Diesel (DG equivalent) | 0.3 litre per kWh |
| Mobile charges | 15 Wh per full charge |
| Earth laps / Moon trips | 40,075 km / 384,400 km |
| LPG cylinder | 14.2 kg × about 3 kg CO₂ per kg = 42.6 kg CO₂ |

> The emission factor can be changed on the Impact page. Check the latest official value at https://cea.nic.in before formal reporting. This dashboard does **not** certify carbon credits.

---

## Files in this repository

| File | Purpose |
|---|---|
| `index.html` | The complete dashboard (one file: page, styles, logic and a saved data copy). Rename `energy_dashboard.html` to `index.html` if needed. |
| `robots.txt` | Asks search engines and AI crawlers not to index the page. It works only when placed at the root of the domain. |
| `README.md` | This guide. |

No server, database or build step is needed. Charts use **Chart.js 4.4.1** loaded from cdnjs.

---

## Publishing on GitHub Pages

1. Put `index.html` (and this README) in the repository `vasteledata`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then save.
4. After a minute the page is live at `https://aruncx.github.io/vasteledata/`.
5. After updating the file, hard refresh the page (Ctrl+Shift+R) to see the change.

### Changing the Google Sheet

The sheet ID is stored in encoded form inside `index.html` as `SID=atob('...')`. To use a different sheet:

1. Open your browser console and run `btoa('YOUR_NEW_SHEET_ID')`.
2. Replace the text inside `atob('...')` with the result.
3. Make sure the new sheet has the same column layout and is shared as "Anyone with the link can view".

---

## Security and privacy notes

The page includes basic deterrents: right-click, copy, text selection, common inspect shortcuts (F12, Ctrl+U and similar) and printing are blocked, the data and sheet ID are stored in encoded form, and the page asks search engines and AI crawlers not to index it.

**Important limits**
- These are deterrents only. Anything shown in a browser can still be captured with a screenshot or advanced tools.
- The Google Sheet is public to anyone with the link, because the page must read it.
- For real protection, put the page behind a login (for example Cloudflare Access, or Netlify or Vercel password protection) and share the sheet only with named people, using a small Google Apps Script to pass the page only the data it needs.

---

## Known data notes

- Rows before April 2019 do not add DG units into the Zone 1 total, while newer rows do. The page uses the totals as given in the sheet.
- The 120 kWp plant has two different April 2026 start dates in the sheet notes.
- Sep 2026 solar performance is about 4.75 kWh per kWp per day, which is high for a monsoon month. Please check plant sizes and meter readings.
- Impact figures are estimates for awareness, not audited measurements.

---

## Troubleshooting

| Problem | What to do |
|---|---|
| Sync chip is grey ("Saved data") | The page could not reach the sheet. Check sharing ("Anyone with the link can view"), the column layout, and your internet connection, then tap the chip. |
| New month not showing | Check the month format (`Nov-26`) and that at least one generation or import number is entered. Wait a minute or two, then tap the chip. |
| Old page still showing | Hard refresh (Ctrl+Shift+R) or clear the browser cache. |
| Charts look empty | Select a different month or year, or choose "Full year". |

---

## Contact

**Arun Xavier**
Assistant Professor, Department of EEE
Vidya Academy of Science and Technology (VAST), Thrissur, Kerala

© Arun Xavier, Department of EEE, VAST. Please contact the author before reusing or redistributing this dashboard.
