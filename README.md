# Cypress Automation Testing

![Cypress](https://img.shields.io/badge/Cypress-15.16.0-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![CI](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

End-to-end automation testing framework built with **Cypress** and **JavaScript**, implementing the **Page Object Model (POM)** design pattern for maintainable and scalable test suites.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Smoke, Sanity & Regression Testing](#smoke-sanity--regression-testing)
- [Test Report](#test-report)
- [CI/CD Pipeline](#cicd-pipeline)

---

## About

This repository contains automated end-to-end tests using Cypress with JavaScript. The framework is designed with best practices including Page Object Model, reusable page objects, and integrated CI/CD via GitHub Actions.

**Target Application:** https://www.demoblaze.com — a demo e-commerce web application.

### Test Coverage

- ✅ Login & Authentication
- ✅ User Registration
- ✅ Product Browsing
- ✅ Add to Cart & Checkout Flow
- ✅ Positive & Negative Scenarios

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Cypress | Browser automation framework |
| JavaScript | Test scripting language |
| Node.js | JavaScript runtime |
| GitHub Actions | CI/CD pipeline |

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

### Installation

```bash
# Clone repository
git clone https://github.com/hast99/cypress-automation.git

# Navigate to project directory
cd cypress-automation

# Install dependencies
npm install
```

### Verify Cypress Installation

```bash
npx cypress verify
```

### Open Cypress

```bash
npx cypress open
```

---

## Running Tests

```bash
# Run all tests
npx cypress run

# Run tests in Chrome
npx cypress run --browser chrome

# Run specific test file
npx cypress run --spec "cypress/e2e/login.cy.js"

# Run signup tests
npx cypress run --spec "cypress/e2e/signup.cy.js"

# Run product tests
npx cypress run --spec "cypress/e2e/product.cy.js"

# Open interactive mode
npx cypress open
```

---

## Smoke, Sanity & Regression Testing

This framework supports test categorization using tags with `cy-grep`.

### Example Tagging

```javascript
it('Login Success', {
  tags: ['smoke', 'sanity']
}, () => {

})

it('Login Invalid Password', {
  tags: ['regression']
}, () => {

})
```

### Run Smoke Tests

```bash
npx cypress run --env grepTags=smoke
```

### Run Sanity Tests

```bash
npx cypress run --env grepTags=sanity
```

### Run Regression Tests

```bash
npx cypress run --env grepTags=regression
```

### Run Full Test Suite

```bash
npx cypress run
```

---

## Test Report

```bash
# Run tests
npx cypress run
```

Cypress generates execution artifacts including:

- ✅ Test results (pass/fail)
- 📸 Screenshots on failure
- 🎥 Video recordings
- 📋 Command logs

### Screenshots

```text
cypress/screenshots/
```

## CI/CD Pipeline

This project uses **GitHub Actions** to automatically run tests on every push and pull request to the `main` branch.

```yaml
# Triggered on: push & pull_request to main
# Browser tested: Chrome
# Report: Uploaded as GitHub Actions artifact
```

> View workflow: `.github/workflows/cypress.yml`

---

## Author

**Hafidh Syahputra** — QA Engineer

GitHub: https://github.com/hast99