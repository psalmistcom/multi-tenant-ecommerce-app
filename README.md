# Multi-Tenant E-Commerce Platform

A modern, scalable, and customizable multi-tenant e-commerce platform built with **React, TypeScript, Node.js, NestJS, Tailwind CSS, and shadcn/ui**. The platform is designed to support multiple online stores within a single application, allowing each tenant to manage its own products, customers, orders, and store settings.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Multi-Tenancy](#multi-tenancy)
- [API Documentation](#api-documentation)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [Deployment](#deployment)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project provides a foundation for building a multi-tenant e-commerce solution where multiple businesses can operate their online stores on a shared platform.

Each tenant can have its own store identity, product catalog, inventory, orders, and configuration while sharing the underlying application infrastructure.

The platform is designed with modular architecture, reusable UI components, type safety, and scalability in mind.

### Project Goals

- Enable multiple businesses to operate independent online stores.
- Provide a centralized platform for managing tenants and their stores.
- Deliver a responsive and accessible user interface.
- Build a modular backend API that is easy to maintain and extend.
- Enforce tenant-level data isolation and access control.
- Support future integrations with payment gateways, shipping providers, and notification services.

## Features

### Multi-Tenant Management
- Tenant registration and store creation.
- Store-specific configurations and branding.
- Tenant-aware data access.
- Centralized platform administration.
- Tenant-specific product and order management.

### Product Management
- Create, update, and delete products.
- Organize products into categories.
- Manage product descriptions, pricing, and images.
- Support product variants and inventory tracking as the application evolves.

### E-Commerce Operations
- Product browsing and search.
- Shopping cart management.
- Checkout workflow.
- Order creation and order history.
- Customer management.
- Payment and shipping integration capabilities.

### User Interface
- Responsive layouts built with Tailwind CSS.
- Reusable UI components using shadcn/ui.
- Type-safe frontend development with TypeScript.
- Consistent forms, dialogs, tables, dropdowns, and navigation.
- Storefront and administration interfaces.

### Security and Access Control
- Authentication and authorization.
- Role-based permissions.
- Tenant-scoped resource access.
- Input validation and error handling.
- Secure handling of environment variables and application secrets.

> **Note:** The feature list describes the intended platform capabilities. Features such as payments, shipping integrations, and advanced inventory management depend on their implementation in the codebase.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| TypeScript | Static typing and improved maintainability |
| Node.js | JavaScript runtime |
| NestJS | Backend framework and REST API |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Reusable and customizable UI components |
| npm | Package management and script execution |

Additional technologies, such as a database, ORM, authentication provider, testing framework, and payment gateway, can be integrated according to project requirements.

## Architecture

The application follows a frontend-backend architecture.

```text
┌─────────────────────────────────┐
│        React + TypeScript       │
│     Tailwind CSS + shadcn/ui    │
│                                 │
│  Storefront / Admin Dashboard   │
└────────────────┬────────────────┘
                 │ HTTP / REST API
                 ▼
┌─────────────────────────────────┐
│             NestJS              │
│                                 │
│  Authentication & Authorization │
│  Tenant Management              │
│  Products & Categories          │
│  Customers & Orders             │
│  Business Logic & Validation    │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│       Database / Data Layer     │
│                                 │
│  Tenant Data & Store Records    │
│  Products, Users & Orders       │
└─────────────────────────────────┘
```

The frontend communicates with the backend through HTTP requests. NestJS handles business logic, validates requests, enforces authorization, and interacts with the configured data layer.

## Getting Started

Follow the instructions below to set up the project locally.

### Prerequisites

Ensure the following tools are installed:

- [Node.js](https://nodejs.org/) — use a version supported by the project.
- npm — included with Node.js.
- Git.
- A database server, if required by the backend configuration.

Verify your installation:

```bash
node --version
npm --version
git --version
```

## Installation

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

Replace the placeholders with your repository URL and project directory.

### 2. Install Dependencies

For a monorepo with separate frontend and backend directories:

```bash
cd frontend
npm install

cd ../backend
npm install
```

Adjust the directory names to match your actual project structure.

### 3. Configure Environment Variables

Create the necessary environment files using the examples provided in the project.

Frontend:

```bash
cp .env.example .env
```

Backend:

```bash
cp .env.example .env
```

Run these commands from the respective directories where the example files exist. On Windows, you can also copy the files manually.

Update the variables with your local configuration.

## Environment Variables

### Frontend

Example `.env`:

```env
VITE_API_URL=http://localhost:3000/api
```

This example assumes a Vite-based React application. Use the appropriate variable prefix if your frontend uses a different build tool.

### Backend

Example `.env`:

```env
PORT=3000
NODE_ENV=development

# Database connection
DATABASE_URL=your_database_connection_string

# Authentication
JWT_SECRET=replace_with_a_secure_random_secret

# Frontend origin
FRONTEND_URL=http://localhost:5173
```

These are illustrative settings. Configure only the variables supported by the actual backend, database adapter, and authentication implementation.

**Important:** Never commit real credentials, API keys, database passwords, or production secrets to version control.

## Running the Application

Start the backend and frontend in separate terminals.

### Start the Backend

```bash
cd backend
npm run start:dev
```

The NestJS server should start on the configured port, typically:

```text
http://localhost:3000
```

### Start the Frontend

```bash
cd frontend
npm run dev
```

For a Vite-based application, the frontend is typically available at:

```text
http://localhost:5173
```

The actual ports depend on your project configuration.

## Project Structure

An example monorepo structure is shown below. Adapt it to the directories and files that exist in your repository.

```text
ecommerce-platform/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   └── shared/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── products/
│   │   │   ├── cart/
│   │   │   ├── orders/
│   │   │   └── tenants/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env.example
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── tenants/
│   │   ├── users/
│   │   ├── products/
│   │   ├── categories/
│   │   ├── customers/
│   │   ├── orders/
│   │   ├── common/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── test/
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

## Multi-Tenancy

Multi-tenancy allows multiple businesses to use the same platform while maintaining separation between their data and store configurations.

### Tenant Identification

A tenant may be identified using one of the following approaches:

- **Subdomain-based:** `store-a.example.com`
- **Custom domain-based:** `www.store-a.com`
- **Path-based:** `example.com/store-a`
- **Authenticated tenant context:** Tenant identity derived from the authenticated user's authorized memberships.

The appropriate strategy depends on the platform's routing, domain management, and business requirements.

### Data Isolation

Every tenant-owned resource must be scoped to the correct tenant. For example, product and order queries should enforce tenant ownership at the backend.

Recommended practices:

- Associate tenant-owned records with a tenant identifier.
- Validate tenant membership and permissions on protected requests.
- Apply tenant scoping consistently to database queries.
- Prevent users from accessing another tenant's resources by changing request parameters or identifiers.
- Test tenant isolation across products, customers, orders, and administrative operations.
- Use database-level isolation policies where appropriate.

**Security principle:** Never trust a tenant ID supplied by the frontend as proof of authorization. The backend must independently establish the user's permitted tenant context and enforce access control.

## API Documentation

The backend exposes API endpoints for communication with the frontend.

Example endpoint conventions:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/tenants` | Retrieve authorized tenants |
| POST | `/api/tenants` | Create a tenant |
| GET | `/api/products` | Retrieve accessible products |
| POST | `/api/products` | Create a product |
| GET | `/api/orders` | Retrieve accessible orders |
| POST | `/api/orders` | Create an order |

These endpoints are illustrative and should be updated to reflect the actual routes and authorization rules implemented in the project.

If Swagger is configured in NestJS, the API documentation can be exposed at a route such as:

```text
http://localhost:3000/api/docs
```

The documentation URL depends on the Swagger configuration in the backend.

## Development Guidelines

### Frontend
- Use TypeScript interfaces and types for application data.
- Build reusable components with React and shadcn/ui.
- Use Tailwind CSS consistently for styling and responsive layouts.
- Keep API communication in dedicated service modules.
- Handle loading, validation, empty, and error states.
- Avoid duplicating business logic across components.

### Backend
- Organize functionality into NestJS modules.
- Use controllers for HTTP request handling and services for business logic.
- Validate incoming payloads with DTOs and validation pipes.
- Apply authentication, authorization, and tenant-scoping guards where appropriate.
- Keep database operations separate from unrelated business logic.
- Use consistent API response and exception-handling patterns.

### Code Quality
- Follow the existing ESLint and Prettier configuration.
- Use meaningful variable, function, and module names.
- Keep environment-specific configuration outside source code.
- Write tests for important business rules and security boundaries.

## Testing

Run the test commands defined in the relevant `package.json` files.

Typical NestJS commands include:

```bash
cd backend

npm run test
npm run test:e2e
npm run test:cov
```

For the frontend, use the testing scripts configured for the selected test framework.

Recommended test coverage includes:

- Authentication and authorization.
- Tenant creation and membership.
- Tenant-level data isolation.
- Product and inventory operations.
- Shopping cart and checkout workflows.
- Order creation and status transitions.
- API validation and error handling.
- Responsive UI and accessibility.

Not all commands will be available until their corresponding test frameworks and scripts are configured.

## Deployment

The platform can be deployed using a hosting provider that supports Node.js applications and modern frontend builds.

### Production Checklist

1. Configure production environment variables and secrets.
2. Provision and secure the database.
3. Build the frontend for production.
4. Build the NestJS backend.
5. Apply database migrations through the deployment process.
6. Configure frontend and backend domains.
7. Set up HTTPS and appropriate CORS policies.
8. Configure logging, monitoring, and error reporting.
9. Verify tenant isolation and access controls.
10. Test essential storefront and checkout workflows before release.

For a Vite frontend, the production build is commonly generated with:

```bash
npm run build
```

For a NestJS backend, the production build is commonly generated with:

```bash
npm run build
npm run start:prod
```

Confirm the exact scripts in each application's `package.json`.

## Security Considerations

Security is essential for a multi-tenant platform.

- Enforce tenant isolation on the backend.
- Use secure authentication and session/token handling.
- Validate and sanitize user input.
- Apply rate limiting to sensitive endpoints.
- Configure CORS for approved frontend origins.
- Protect secrets and credentials.
- Enforce role-based permissions for administrative operations.
- Validate product prices and order totals on the server.
- Verify payment notifications with the payment provider before updating order status.
- Use secure file-upload validation and storage practices.
- Keep dependencies updated and audit them regularly.

## Contributing

Contributions, suggestions, and bug reports are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Add or update relevant tests.
5. Commit your changes with a descriptive message.
6. Open a pull request describing the changes.

Example:

```bash
git checkout -b feature/store-management
git add .
git commit -m "feat: add tenant store management"
git push origin feature/store-management
```

## License

Specify the license under which this project is distributed. If the repository is private or proprietary, document the applicable ownership and usage terms.

---

**Built with React, TypeScript, NestJS, Tailwind CSS, and shadcn/ui.**

A scalable foundation for building and managing multiple online stores on a single platform.