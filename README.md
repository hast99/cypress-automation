# Cypress Automation Testing

![Cypress](https://img.shields.io/badge/Cypress-15.16.0-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![CI](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

Framework pengujian otomatis end-to-end yang dibangun menggunakan Cypress dan JavaScript, menerapkan design pattern Page Object Model (POM) agar test suite lebih mudah dikelola dan dikembangkan.

---

## About

Repositori ini berisi skrip automation pengujian end-to-end menggunakan Cypress dan JavaScript. Framework ini dirancang dengan mengikuti best practice, termasuk penerapan Page Object Model, page object yang bisa dipakai berulang (reusable), dan integrasi CI/CD melalui GitHub Actions.

Target Aplikasi: https://www.demoblaze.com — aplikasi web e-commerce untuk keperluan demo.

### Test Coverage

- ✅ Login & Authentication
- ✅ User Registration
- ✅ Product Browsing
- ✅ Add to Cart & Checkout Flow
- ✅ Positive & Negative Scenarios

---

## Project Structure

```text
cypress-automation/
├── cypress/
│
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── signup.cy.js
│   │   └── product.cy.js
│   │
│   ├── pages/
│   │   ├── loginPages.js
│   │   ├── signupPages.js
│   │   └── productPages.js
│   │
│   ├── screenshots/
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 8

### Instalasi

```bash
# Clone repository
git clone https://github.com/hast99/cypress-automation.git

# Masuk ke direktori proyek
cd cypress-automation

# Install dependencies
npm install
```

---

## Running Tests

```bash
# Menjalankan semua tests
npx cypress run

# Run tests in Chrome
npx cypress run --browser chrome

# Menjalankan spesifik test file
npx cypress run --spec "cypress/e2e/login.cy.js"

# Open GUI mode
npx cypress open
```

---

### Menjalankan Smoke Tests

```bash
npx cypress run --env grepTags=smoke
```

### Menjalankan Sanity Tests

```bash
npx cypress run --env grepTags=sanity
```

### Menjalankan Regression Tests

```bash
npx cypress run --env grepTags=regression
```

---

### Screenshots

```text
cypress/screenshots/
```

## Author

**Hafidh Syahputra** — QA Engineer

GitHub: https://github.com/hast99