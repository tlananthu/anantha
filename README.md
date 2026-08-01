# Anantha Wealth OS 📈

**A privacy-first, client-side personal finance and portfolio tracking dashboard.**

Wealth OS is a lightweight, single-page application (SPA) designed to help you track your net worth, manage financial goals, and automatically import your asset holdings without ever sending your sensitive financial data to a server. 

Everything runs directly in your browser and saves to your local storage. 

---

## ✨ Features

* 🔒 **100% Private & Secure:** No backend, no databases, no tracking. Your financial data never leaves your device.
* 🤖 **Smart Broker Imports:** Upload your raw Excel exports directly. The platform-aware parsing engine auto-detects and extracts data from:
  * **INDmoney** (`holdings-family-template.xlsx`)
  * **Zerodha** (`holdings-template-zerodha.xlsx`)
  * **Upstox** (`holdings_report_Upstox.xlsx`)
* 🎯 **Advanced Goal Tracking:** Plan for standard goals, track retirement corpus requirements, or build multi-stage educational timelines for your kids based on inflation and expected returns.
* 📊 **Asset Allocation Summary:** Group your portfolio instantly by Asset Class, Type, or custom Categories.
* 🔮 **Future Value Projections:** Automatically calculates the projected future value (FV) of your assets based on customizable historical or expected YoY growth rates.
* 📱 **Progressive Web App (PWA):** Installable on Android, iOS, and Desktop for a native app experience with full offline support.

---

## 🚀 Quick Start

Because Wealth OS is a client-side application, you don't need any complex build tools or servers to run it.

### Option 1: Local Usage (Easiest)
1. Clone or download this repository.
2. Double-click `index.html` to open it in any modern web browser.
3. Start logging your assets!

### Option 2: Cloud Hosting (For Mobile PWA Installation)
To install Wealth OS on your phone's home screen, it needs to be served over HTTPS.
1. Upload the files to a free static hosting provider like **GitHub Pages**, **Netlify**, or **Vercel**.
2. Open the hosted URL on your mobile device.
3. Tap **"Install App"** in the Settings tab, or use your browser's "Add to Home Screen" prompt.

---

## 📂 File Structure

The entire application relies on just three files:

```text
├── index.html       # The core application (UI, logic, and parsing engine)
├── manifest.json    # PWA configuration (app icon, name, theme colors)
└── sw.js            # Service Worker (enables 100% offline functionality)
