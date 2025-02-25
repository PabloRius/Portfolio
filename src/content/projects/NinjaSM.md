---
title: Ninja SM
shortDescription: A full-stack application that scrapes data from different supermarkets and presents it all in one go
url: "https://ninja-sm.vercel.app/products"
repository:
  [
    "https://github.com/PabloRius/Ninja-SM-Frontend",
    "https://github.com/PabloRius/Ninja-SM-Backend",
    "https://github.com/PabloRius/Ninja-SM-Scraper",
  ]
stack: ["TypeScript", "NextJS", "Java", "SpringBoot", "Python"]
status: Early
---

# 🛒 SM Ninja - Web Scraper & Product Browser

## 🌍 Overview

**SM Ninja** is a full-stack application that enables users to browse and filter Tesco supermarket products scraped from the web. The project consists of:

- A **web scraper** that extracts product data and stores it in a CSV file.
- A **backend server** that reads the CSV file, exposes a REST API with filtering and pagination capabilities.
- A **frontend web application** that queries the server and displays products in an interactive and modern UI.

## ⚙️ Features

### **Web Scraper (Python)**

- Scrapes Tesco’s website for product data using BeautifulSoup.
- Stores product details (name, price, supermarket, image, etc.) in a CSV file.
- Ensures efficient and structured data extraction.

### **Backend (Java + Spring Boot)**

- Reads the scraped CSV file as a mock database.
- Provides REST API endpoints for:
  - **Fetching products** with pagination.
  - **Filtering** products based on name, price range, and supermarket.
- Ensures performance efficiency with structured API responses.

### **Frontend (Next.js + React)**

- Displays products in a **grid format** with a clean UI.
- Implements **filtering and search** options.
- Supports **pagination** to load products efficiently.
- Each product links to its Tesco page for more details.
- Uses **modern UI/UX** principles with TailwindCSS & Framer Motion for smooth transitions.

## 🖥️ Tech Stack

### **Backend:**

- **Java + Spring Boot** (REST API)
- **CSV Parsing** for data storage
- **Pagination & Filtering**

### **Frontend:**

- **Next.js + React**
- **TailwindCSS + Lucide Icons**
- **Framer Motion** for animations
- **React Query** for data fetching

## 🎯 Future Enhancements

- Implement a **live database** instead of CSV files.
- Add user authentication & favorites list.
- Expand scraping to multiple supermarkets.
- Improve UI/UX with advanced filtering and sorting options.

## 📷 Screenshots

(TBD - Include images of UI when available)

## 🚀 How to Run

1. **Backend:**

   - Clone the repo and navigate to the backend folder.
   - Run the Spring Boot application (`mvn spring-boot:run`).
   - Access the API at `http://localhost:9090/products`.

2. **Frontend:**
   - Navigate to the frontend directory.
   - Run `npm install` to install dependencies.
   - Start the development server with `npm run dev`.
   - Open `http://localhost:3000` in the browser.

---

✨ Developed by **Pablo Garcia Rius**
