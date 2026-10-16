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

## Frontend sample

The frontend is a React (Vite) prototype that uses fictional mock data. It has
no backend, saves nothing and does not process payments.

```sh
cd client
npm install
npm run dev
```

Screens (all sample data, held in memory only):

| Route | Screen |
| --- | --- |
| `/` | Dashboard overview |
| `/login`, `/register` | Login and register forms with validation |
| `/groups` | My groups list |
| `/groups/new` | Create-group form with validation |
| `/groups/:groupId` | Group details: members, contributions (record, confirm, dispute) and rounds (manual recipient selection) |
| `/contributions` | Contribution history with status and group filters |
| `/reports` | Group summaries and unconfirmed contributions |

Mock data lives in `client/src/services/` so it can later be replaced by real
API calls. Totals are calculated from confirmed contributions only.
