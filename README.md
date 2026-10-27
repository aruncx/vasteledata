# ⚡ VAST Electricity Dashboard

A live, single-page web dashboard that shows how the campus of **Vidya Academy of Science and Technology (VAST), Thrissur** generates, buys and saves electricity. It turns the monthly electricity sheet into clear numbers, charts, pop-ups and animated pictures, so management can see the full picture in one place.

![Live](https://img.shields.io/badge/🌐_Live-aruncx.github.io%2Fvasteledata-2563eb?style=for-the-badge)
![Data](https://img.shields.io/badge/📊_Data-Google_Sheets-16a34a?style=for-the-badge)
![Charts](https://img.shields.io/badge/📈_Charts-Chart.js-f59e0b?style=for-the-badge)
![Mobile](https://img.shields.io/badge/📱_Mobile-Friendly-8b5cf6?style=for-the-badge)

> ☀️ **Solar** · 🛢️ **DG sets** · 🔌 **KSEB grid** · 💰 **Net saving** · 🌱 **Impact** — all in one live page.

🌐 **Live page:** https://aruncx.github.io/vasteledata/

👨‍🏫 **Developed by:** Arun Xavier, Assistant Professor, Department of Electrical and Electronics Engineering (EEE), VAST, Thrissur.

---

## 🌟 Why this dashboard? (Advantages)

| Advantage | What it means for the college |
|---|---|
| 💰 **Net saving at a glance** | Shows how much money solar generation saves compared with buying every unit from KSEB, with the percentage saved. |
| 🧾 **True cost visibility** | Shows the bill if all units came from KSEB, what we actually paid KSEB, the solar bill, and the cost per unit with our mix of sources. |
| ⏰ **Tariff awareness** | Zone 1, Zone 2 and Zone 3 amounts, Maximum Demand (MD) charges for our HT connection, and duty and other charges, so we can plan when to use power. |
| 🥧 **Clear energy mix** | Percentage share of solar, DG sets and KSEB, so dependence on diesel and grid is easy to see. |
| ☀️ **Plant-wise performance** | Each solar plant's output, share and kWh per kWp, so weak or exceptional plants are easy to spot. |
| 🗓️ **Financial-year reporting** | View any financial year (April to March) or calendar year, to match accounts and audits. |
| 📈 **Trends over time** | Month-wise charts of energy and bills help spot seasonal patterns and unusual months early. |
| 🔄 **Live and effortless** | Connected to a Google Sheet. Enter the new month's readings and the dashboard updates by itself. No software, no re-upload, no extra cost. |
| 🏆 **Proof of solar return** | Shows savings, days of campus electricity met by solar, and performance per kWp. |
| 🌱 **Sustainability story** | The Impact tab turns solar kWh into CO₂ avoided, coal, trees, homes, diesel, water, LPG cylinders and more, linked to the UN Sustainable Development Goals. |
| 📱 **Easy for everyone** | Works on mobile and desktop, with Dark, Medium and Light themes, navigation tabs and animated pictures. |
| 📋 **Useful for reporting** | Supports management reviews, audits and documentation with one consistent set of figures. |

---

## 🔌 Energy sources tracked

- 🛢️ **DG-1:** diesel generator, 125 kVA
- 🛢️ **DG-2:** diesel generator, 380 kVA
- ☀️ **Solar plants:** 15 kWp, 100 kWp and 120 kWp (the 120 kWp plant counts from April 2026)
- 🔌 **KSEB grid:** import, export, three tariff zones, MD charges, duty and other charges

**KSEB tariff zones used in the page**

| Zone | Time | Type |
|---|---|---|
| 🌞 Zone 1 | 6 AM – 6 PM | Normal |
| 🌆 Zone 2 | 6 PM – 10 PM | Peak |
| 🌙 Zone 3 | 10 PM – 6 AM | Off-peak |

---

## ✨ Complete feature list

### 🎛️ Header and controls

- 🏫 College logo and campus photo in the header, with the title **VAST Electricity Dashboard**.
- 📅 **Year dropdown** with three groups:
  - 🌐 **All years**
  - 🗓️ **Financial year (Apr – Mar)**, for example FY 2026-27 runs from 1 April 2026 to 31 March 2027
  - 📆 **Calendar year (Jan – Dec)**, including "2014 – May 2018 (cumulative)"
- 🗂️ **Month dropdown.** It lists Jan to Dec for calendar years and Apr to Mar for financial years, and its first entry becomes "Full FY" when a financial year is chosen.
- 🔄 **Sync chip** that shows whether live data is on, how many months are loaded and the latest month. Tap it to refresh.
- 🎨 **Dark / Medium / Light** theme switch. The choice is remembered in the browser.
- 🧭 **Sticky navigation tabs:** Net saving, Energy flow, Sources, KSEB tariff, Trends, Month data and 🌱 Impact. Tabs scroll smoothly to each section and highlight the section you are reading.
- ✅ Every section follows the selected period.

### 1. 💰 Net saving

- 💚 Large green **Net saving** card with the amount, the percentage saved against an all-KSEB supply, and a pay/save bar.
- 📅 When several months are selected, the card also shows the average saving per month and the best month.
- 🪙 Six cards: **All-KSEB bill (projected)**, **Paid to KSEB**, **Solar bill**, **Cost per unit (all from KSEB)**, **Cost per unit (our mix)** and **Saving per unit**, each with an animated money picture.

### 2. ⚡ Energy flow

Five animated cards: ☀️ **Solar plants**, 🛢️ **Diesel generators**, 🔌 **KSEB grid import**, 📤 **Exported to KSEB** and 🏫 **Campus consumption** (shown on the campus photo). Three of them open pop-ups:

| Click this card | Pop-up shows |
|---|---|
| 🛢️ **Diesel generators** | DG-1 (125 kVA) and DG-2 (380 kVA): kWh generated (counting up from 0), share of total DG generation with a bar, and the total. |
| ☀️ **Solar plants** | The 15, 100 and 120 kWp plants: kWh generated, share of total solar, and a **Solar performance per kWp installed** block with kWh/kWp/day, the yearly equivalent, a 0–6 gauge with the typical 3–5 band, a status tag (below, within or above the typical range) and a 🏆 mark for the best plant. |
| 🔌 **KSEB grid import** | Zone 1, Zone 2 and Zone 3 import in kWh, share, tariff rate in ₹ per kWh and the approximate value at that rate. It also shows the total import, the export and the net import. |

❎ Pop-ups close with ✕, by clicking outside them, or with Esc.

### 3. 🥧 Energy sources and mix

- 📋 A source list (KSEB import, DG-1, DG-2 and the three solar plants, plus export) with pictures, kWh and percentages.
- 🍩 A **Source share** doughnut chart with the % written on each slice, the total kWh in the centre and the % in the legend and hover.

### 4. 🧾 KSEB tariff

- 🧾 A banner showing what we would pay if all units came from KSEB.
- ⏰ Zone 1, Zone 2 and Zone 3 cards with the amount to pay, the zone's share of the bill, the kWh and the ₹ per kWh rate, with timings.
- 📟 **Maximum Demand (MD) charges** card for the HT line.
- 🧮 **Duty & other charges** card.
- 🌈 A colour bar showing **where the all-KSEB bill goes** (zones, MD, duty and others).

### 5. 📈 Trends and expandable charts

- ⚡ **Monthly energy (kWh):** stacked chart of the sources with the export line. Percentages are written on the bars when 14 months or fewer are shown.
- 💸 **Bills & savings (₹):** for each month, a grey bar for the all-KSEB bill beside a stacked bar of Paid to KSEB (blue), Solar bill (amber) and Net saving (green). The stacked bar adds up to the same height as the grey bar.
- 🔍 **Click either chart to expand it** into a large pop-up:
  - The chart scrolls sideways when there are many months.
  - Moving the pointer over a month (or tapping it) highlights that month with a band and a white outline.
  - The tooltip shows only the data of the bar you point at.
  - A details panel under the chart shows every value for the highlighted month, including net saving, total paid and cost per unit.

### 6. 🗓️ Month data

- 📑 A table of every month in the selected period.

### 7. 🌱 Impact tab

Opens a separate Impact page. Every value comes from the **solar generation of the selected period**, and the numbers count up from 0 to their final value with animated pictures.

- ☀️ **Banner:** total solar generation.
- ☁️ **Carbon:** CO₂ avoided, and the potential carbon-credit equivalent, with an "Important distinction" note. The emission factor can be edited on the page, and the page remembers it.
- 🔟 **Twelve equivalents** (🪨 coal, 🌳 trees, 🏠 homes, ⛽ petrol, 🚗 EV, 💧 water, 📅 days, 🛢️ diesel, 📱 phones, 🌍 Earth laps, ☀️ performance, 🔥 LPG): coal not burned, trees, homes, petrol, EV distance, thermal-power water, days of campus electricity met by solar, diesel saved, mobile phones charged, laps around the Earth by EV (with Moon trips), solar performance per kWp, and LPG cylinders' worth of CO₂.
- 🎯 **Six UN Sustainable Development Goal cards** in the official colours: Goal 4 (red), Goal 6 (light blue), Goal 7 (yellow), Goal 11 (orange), Goal 12 (gold) and Goal 13 (green).

### 8. 🎨 Look and feel

- 🎬 Animated pictures for solar panels and plants, DG sets, pylons, bills, coins, clocks, and more.
- ✨ Card hover lift, tilt and soft glow behind the text, click ripples, fade-in cards and counting numbers. These switch off automatically on devices set to "reduce motion".
- 📱 Fully responsive for phones, tablets and desktops.

---

## 📊 Where the data comes from

The page reads a **Google Sheet** and refreshes every 5 minutes (or when the sync chip is tapped). If the sheet cannot be reached, it shows the last saved copy of the data built into the page.

---

## 🧠 How the main numbers are calculated

| Figure | Formula |
|---|---|
| Net saving | Projected all-KSEB bill − KSEB bill paid − solar bill |
| Saving percentage | Net saving ÷ projected all-KSEB bill |
| Cost per unit (all KSEB) | Projected bill ÷ total units |
| Cost per unit (our mix) | (KSEB paid + solar bill) ÷ total units |
| Saving per unit | Net saving ÷ total units |
| Duty & other charges | Projected bill − zone amounts − MD charges |
| Source share | Each source ÷ (KSEB import + DG + solar) |
| Solar share of consumption | (Solar generation − exported units) ÷ total consumption |
| Days of campus electricity met by solar | (Solar − exported units) ÷ average daily campus consumption |
| Solar performance (kWh/kWp/day) | Solar kWh ÷ (installed kWp × days running) |
| Financial year | April of year Y to March of year Y+1 is shown as FY Y-(Y+1) |

The typical range used on the performance gauge is **3 to 5 kWh per kWp per day**, which is an illustrative value for rooftop plants in India.

---

## 🌍 Impact factors (illustrative estimates)

| Equivalent | Factor used |
|---|---|
| ☁️ CO₂ avoided | 0.71 kg CO₂ per kWh (CEA all-India weighted average, FY 2024-25, CO₂ Baseline Database v21.0) |
| 🪙 Carbon-credit equivalent | 1 credit = 1 tCO₂e (indicative only, not issued credits) |
| 🪨 Coal not burned | 0.55 – 0.70 kg per kWh |
| 🌳 Trees | 21.8 kg CO₂ absorbed per tree per year |
| 🏠 Homes | 1,200 kWh per household per year |
| ⛽ Petrol | 2.3 kg CO₂ per litre |
| 🚗 EV distance | 0.12 kWh per km |
| 💧 Water (thermal power) | 3 – 4 litres per kWh |
| 🛢️ Diesel (DG equivalent) | 0.3 litre per kWh |
| 📱 Mobile charges | 15 Wh per full charge |
| 🌍 Earth laps / 🌙 Moon trips | 40,075 km / 384,400 km |
| 🔥 LPG cylinder | 14.2 kg × about 3 kg CO₂ per kg = 42.6 kg CO₂ |

> ℹ️ The emission factor can be changed on the Impact page. Check the latest official value at https://cea.nic.in before formal reporting (a newer version, v22.0 for FY 2025-26, may be available). This dashboard does **not** certify carbon credits. One factor is applied to all years.

---

## 🔒 Security and privacy notes

The page includes basic deterrents: right-click, copy, text selection, common inspect shortcuts (F12, Ctrl+U and similar) and printing are blocked, the data and sheet ID are stored in encoded form, and the page asks search engines and AI crawlers not to index it.

---

## 🛠️ Troubleshooting

| Problem | What to do |
|---|---|
| Sync chip is grey ("Saved data") | The page could not reach the sheet. Check sharing ("Anyone with the link can view"), the column layout and your internet connection, then tap the chip. |
| New month not showing | Check the month format (`Nov-26`) and that at least one generation or import number is entered. Wait a minute or two, then tap the chip. |
| Old page still showing | Hard refresh (Ctrl+Shift+R) or clear the browser cache. |
| Charts look empty | Select a different month or year, or choose "Full year" or "Full FY". |
| A financial year looks short | It may still be in progress, or it may be FY 2018-19 (see the data notes above). |

---

## 📬 Contact

👤 **Arun Xavier**  
🎓 Assistant Professor, Department of EEE  
🏫 Vidya Academy of Science and Technology (VAST), Thrissur, Kerala  
📍 India

© Arun Xavier, Department of EEE, VAST. Please contact the author before reusing or redistributing this dashboard.
