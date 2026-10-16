# Digital Seettu

Digital Seettu is a web-based rotating savings and credit management system.
The project is organized as a MERN application: a React client, an Express API,
and a MongoDB database.

## Project structure

- `client/` - React frontend
  - `src/app/` - application setup, routing, and providers
  - `src/components/` - shared UI components
  - `src/features/` - feature-specific code (auth, groups, rounds, contributions, reports)
  - `src/pages/` - page-level compositions
  - `src/services/` - API client and service calls
  - `src/utils/` - shared frontend utilities
- `server/` - Express backend
  - `src/config/` - environment and database configuration
  - `src/controllers/` - request and response handling
  - `src/middleware/` - authentication, validation, and error handling
  - `src/models/` - database models
  - `src/routes/` - REST API routes
  - `src/services/` - business rules and application logic
  - `src/validators/` - request validation
  - `src/utils/` - shared backend utilities
- `tests/` - unit, integration, and end-to-end tests
- `docs/` - requirements, diagrams, API, and deployment documentation

The initial release is intended to track contributions and payouts; it will not
process or transfer money.
