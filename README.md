# ∞ Anantha Wealth OS

**Infinite Possibilities.** A 100% private, offline, and auto-piloted personal finance and wealth management dashboard that runs entirely in your browser. 

Wealth OS acts as your personal "Robo-Advisor." It automatically parses your investment statements, projects your future wealth, and algorithmically maps your assets to your life goals based on specific time horizons and risk profiles—all without a single piece of your financial data ever leaving your device.

## ✨ Key Features (V3.1)

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
* **Dynamic Budgeting Module:** Track incoming cash against living and discretionary expenses. The engine calculates your monthly surplus and recommends exact percentage splits (e.g., "Put 30% in Safe Assets, 70% in Stock Market") to ensure your goals are met. Data persists securely across sessions.
* **Advanced Visualizations:** Smooth, dynamic Chart.js integrations that map your Asset Allocation Progression over rolling 10+ year horizons, syncing dynamically with your active filters.
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

## 📝 Backlog & Upcoming Features

The following features and UX overhauls are scheduled for upcoming development sprints:

### **Feature Enhancements**
1. **Default 2050 Baseline:** If no goals are currently defined by the user, automatically generate a blank accumulation goal aligning with the year 2050 to ensure the engine always has a long-term trajectory.
2. **Goal Creation Timestamping:** Capture the exact year a goal is created so that compounding logic works seamlessly as legacy goals roll over and fresh files for future years are uploaded.
3. **Dashboard Metric Labeling:** Rename "Expected Future Wealth" to "What You'll Have by 2050" to provide immediate clarity to novice users.
4. **Simplified Portfolio View:** Introduce a cleaner, minimal toggle view within the "Portfolio" tab to reduce visual clutter for everyday monitoring.

### **UX/UI Overhaul & Simplification Principles**
1. **Guided Goal Creation:** Replace the complex "Goal Type" dropdown with a friendly, step-by-step wizard.
2. **Visual Engine Room:** Transform the text-heavy Auto-Pilot Engine Room explanation into a clean, visual diagram.
3. **Progressive Disclosure in Budgeting:** Reduce cognitive load in the Budget module by displaying the Summary/Action Plan first, while hiding the input form inside a collapsible/expandable section.
4. **System-Wide Simplification Standards:**
    * **Terminology:** Enforce plain English and emojis over strict financial jargon.
    * **Visual Hierarchy:** Use colored cards and distinct sections instead of dense text blocks.
    * **Forms:** Reduce the number of visible fields by default; expand advanced options only when requested.
    * **Explanations:** Add brief, inline contextual help near every complex feature.
    * **Empty States:** Provide encouraging next steps and CTAs instead of blank spaces.
    * **Modals:** Include a 1-line description at the top of every modal explaining exactly what the user will accomplish.
    * **Warnings:** Soften system language (e.g., change "Danger Zone" to "Reset").
    * **Instructions:** Use step numbers and simple language for any multi-step processes.

---
*Anantha Wealth OS V3.1*
