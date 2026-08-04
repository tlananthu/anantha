# ∞ Anantha Wealth OS

**Infinite Possibilities.** A 100% private, offline, and auto-piloted personal finance and wealth management dashboard that runs entirely in your browser. 

Wealth OS acts as your personal "Robo-Advisor." It automatically parses your investment statements, projects your future wealth, and algorithmically maps your assets to your life goals based on specific time horizons and risk profiles—all without a single piece of your financial data ever leaving your device.

## ✨ Key Features (V3.0)

* **100% Privacy & Offline First:** No servers, no cloud databases, no tracking. Everything is processed locally in your browser and saved to your device's LocalStorage. Installable as a Progressive Web App (PWA) for native-like offline access.
* **Auto-Pilot Engine:** Forget manual bucketing. The core algorithm automatically routes safe/cash assets to short-term goals, balanced assets to mid-term goals, and high-growth equities to long-term goals.
* **Smart Statement Parsing:** Effortlessly drag-and-drop bulk files. The engine automatically reads, categorizes, and extracts data from:
  * INDmoney
  * Zerodha (Kite & Console)
  * Upstox
  * Groww (Mutual Funds & Stocks)
  * Scripbox
  * ICICI (Fixed Deposits)
  * India Post Office (FDs, RDs, MIS, Savings)
* **Goal & Retirement Planning:** Create multi-stage Education plans, track Retirement Corpus requirements (with post-retirement return calculations), and monitor standard financial goals.
* **Dynamic Budgeting Module:** Track incoming cash against living and discretionary expenses. The engine calculates your monthly surplus and recommends exact percentage splits (e.g., "Put 30% in Safe Assets, 70% in Stock Market") to ensure your goals are met.
* **Advanced Visualizations:** Smooth, dynamic Chart.js integrations that map your Wealth Trajectory and Asset Class Progression over rolling 10+ year horizons.
* **Custom Profiles:** Manage assets for different family members under isolated or merged portfolios.

## 🚀 Getting Started

1. Download or clone this repository.
2. Open `index.html` in any modern web browser.
3. Head to the **Settings** tab to create a profile (e.g., "Main Portfolio").
4. Upload your broker statements to automatically populate the dashboard, or log assets manually.
5. (Optional) Click the **Install App** button in Settings to save Wealth OS to your desktop or mobile home screen.

## 🛠 Tech Stack
* **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+).
* **Libraries:** [SheetJS (xlsx)](https://sheetjs.com/) for offline Excel/CSV parsing, [Chart.js](https://www.chartjs.org/) for canvas-based data visualization.
* **Data Storage:** Browser `localStorage` (Exportable to local `.json` backups).

---

## 📝 Backlog & Known Issues

The following items are scheduled for upcoming development sprints:

1. **Goal Creation Timestamping:** Capture the exact year a goal is created. Ensure the compounding math logic works perfectly when legacy goals roll over and fresh files for future years (e.g., 2027, 2028) are uploaded.
2. **Bug Fix:** Resolve the persistent `app.renderGoals is not a function` error occurring during specific tab switches or data re-renders.
3. **Budget Persistence:** Save the inputs from the Monthly Budget & Investment Guide to `localStorage` so total income, total expenditure, and engine recommendations do not reset on page refresh.
4. **Simplified Portfolio View:** Introduce a cleaner, simplified toggle view within the "Portfolio" tab to reduce visual clutter for everyday monitoring. 

---
*Anantha Wealth OS V3.0*
