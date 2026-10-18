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

## Known data notes

- Rows before April 2019 do not add DG units into the Zone 1 total, while newer rows do. The page uses the totals as given in the sheet.
- The 120 kWp plant has two different April 2026 start dates in the sheet notes.
- Sep 2026 solar performance is about 4.75 kWh per kWp per day, which is high for a monsoon month. Please check plant sizes and meter readings.
- Impact figures are estimates for awareness, not audited measurements.

---

## Contact

**Arun Xavier**
Assistant Professor, Department of EEE
Vidya Academy of Science and Technology (VAST), Thrissur, Kerala

© Arun Xavier, Department of EEE, VAST. Please contact the author before reusing or redistributing this dashboard.
