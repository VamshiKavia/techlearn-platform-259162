# Project Repository

This repository contains the LMS application.

Containers:
- lms_frontend (React) — port 3000

Frontend development:
- See lms_frontend/README.md for instructions.
- Health route: /health (uses REACT_APP_HEALTHCHECK_PATH if provided)

Configuration: All frontend configuration uses REACT_APP_* variables (see lms_frontend/.env.example).