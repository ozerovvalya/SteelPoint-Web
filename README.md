# SteelPoint - Online Knife & Gear Store

SteelPoint is a web application simulating an online store for knives, multitools, machetes, axes, tactical shovels, and related gear.

---

## Features

- 🏠 Main page with product listing and pagination (20 per page)
- ⭐ Favorites page (no pagination)
- 🛒 Shopping cart page
- 🔍 Client-side filtering by product type
- ↕️ Client-side sorting (by name and price)
- 🛠 Data is fetched from a Spring Boot backend via REST API
- 🧭 Uses Vue Router for navigation

---

## Technologies Used

### Frontend

- Vue.js 3 (Vue CLI)
- SCSS
- Vue Router

### Backend

- Spring Boot (Java 17)
- H2 in-memory database

---

## Requirements

- **Java 17+**
- **Node.js v14.17.6**
- npm (Node package manager)

---

## Setup

### Backend

1. Open the project in an IDE with Java 17 support (e.g., IntelliJ IDEA).
2. Run the `SteelPointApplication.java` class.
3. The backend will be available at: `http://localhost:8080`
4. API Endpoints:
   - All products: `http://localhost:8080/api/products`
   - Filter by category: `http://localhost:8080/api/products/filter?category=Fixed`
5. H2 Console: `http://localhost:8080/h2-console` (login via application properties)

The backend loads initial product data from `DataLoader.java`, which creates categories and demo products automatically.

### Frontend

1. Open a terminal in the frontend directory.
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run serve
```

If the backend is not running, the frontend will display no products (they are fetched from the backend).

---

## Notes

- The frontend can be opened standalone but requires the backend to fetch product data.
- Product images must be placed in the appropriate `/images` folder and referenced by filename in the product JSON or entity.
- Demo data includes 40+ real-world items such as folders, multitools, fixed knives, axes, and more.

---

Made with ❤️ for a university coursework project.