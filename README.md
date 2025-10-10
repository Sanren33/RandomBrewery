# 🍺 Tap Into Seattle

**Random Brewery Adventure Finder**

A simple, responsive web app that helps users discover a random brewery in **Seattle** using data from the [Open Brewery DB API](https://www.openbrewerydb.org).

---

## 🚀 Features

- Fetches live brewery data from the Open Brewery DB API
- Filter by brewery type (`micro`, `brewpub`, `regional`, `planning`, `proprietor`, `large`)
- Displays brewery name, type, address, website, and Google Maps location
- One-click buttons for:
  - Open website
  - Get directions
  - Copy address
- Randomizes brewery selection for each request
- Responsive two-panel layout with modern minimal design
- Built entirely with **HTML**, **CSS**, and **JavaScript**

---

## 🧩 Tech Stack

- **HTML5** – Structure
- **CSS3 (Flexbox)** – Layout and styling
- **JavaScript (ES6)** – Logic and API handling
- **[Open Brewery DB](https://www.openbrewerydb.org)** – Data source
- **Google Maps Embed** – Brewery location display

---

## ⚙️ How It Works

1. User selects a brewery type or leaves it blank.
2. Clicking **GO** fetches all Seattle breweries (optionally filtered by type).
3. A random brewery is selected from the API response.
4. The app displays:
   - Name
   - Type
   - Address
   - Embedded map
   - Website link and navigation options
5. User can:
   - View another random brewery
   - Return to the filter screen

---

## 📁 File Structure

```

tap-into-seattle/
│
├── index.html      # Main page layout
├── style.css       # Styling and layout rules
└── script.js       # Fetch and interaction logic

```

---

## 🧠 API Reference

**Endpoint:**

```

GET [https://api.openbrewerydb.org/v1/breweries?by_city=seattle](https://api.openbrewerydb.org/v1/breweries?by_city=seattle)

```

**Optional filters:**

```

by_type=micro | brewpub | regional | planning | proprietor | large
per_page=50

```

Example:

```

[https://api.openbrewerydb.org/v1/breweries?by_city=seattle&by_type=micro](https://api.openbrewerydb.org/v1/breweries?by_city=seattle&by_type=micro)

```

---

## 💡 Future Improvements

- Add support for other cities
- Save favorite breweries locally
- Integrate live status (“open” / “closed”)
- Dark mode and improved mobile layout

---

## 🏁 Getting Started

1. Clone or download this repository
2. Open `index.html` in any browser
3. Start exploring Seattle breweries

No build tools or dependencies required.

---

**Enjoy your random Seattle brewery adventure! 🍻**
