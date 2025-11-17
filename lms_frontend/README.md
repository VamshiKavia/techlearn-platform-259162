# LMS Frontend (React) - Ocean Professional Theme

Production-ready scaffolding for the LMS with role-aware layout (Admin, Instructor, Student), routing, feature flags, and Supabase placeholder integration.

## Quick Start

1. Install dependencies:
   - npm install

2. Configure environment (copy and edit placeholders):
   - cp .env.example .env
   - Fill only the variables you need. Do not commit secrets.

3. Run:
   - npm start
   - Open http://localhost:3000

## Routes

- /login — Placeholder auth UI (no real auth)
- /dashboard — Role-aware landing (Admin/Instructor/Student mock dashboards)
- /health — Health screen showing OK and configured health path

Use the role selector in the sidebar to switch roles.

## Configuration

All config is read from environment variables (Create React App):
- API base: REACT_APP_API_BASE
- Backend/Frontend URLs: REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL
- WebSocket URL: REACT_APP_WS_URL
- Health path: REACT_APP_HEALTHCHECK_PATH
- Logging: REACT_APP_LOG_LEVEL (error|warn|info|debug|trace)
- Feature Flags: REACT_APP_FEATURE_FLAGS (JSON or comma-separated)
- Experiments: REACT_APP_EXPERIMENTS_ENABLED (true/false)
- Supabase (optional): REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY

See .env.example for the full list.

## Supabase

Supabase SDK is lazily initialized only if REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY are provided. Otherwise a warning is logged and no client is created. No secrets are hardcoded.

## Theming

Ocean Professional minimalist theme:
- Primary #374151, Secondary #9CA3AF
- Success #10B981, Error #EF4444
- Background #FFFFFF, Surface #F9FAFB, Text #111827

Styles in src/styles/theme.css. Components: Button, Badge, Card.

## Accessibility

- Keyboard-accessible sidebar toggle (Topbar ☰ button)
- ARIA labels for navigation and controls
- Sufficient color contrast in theme palette

## API Client

services/apiClient.js provides apiFetch(path, options) that:
- Prefixes with REACT_APP_API_BASE
- Adds X-Request-Id header
- Applies a 10s default timeout
- Parses JSON responses and throws on non-OK

## Feature Flags

hooks/useFeatureFlag reads REACT_APP_FEATURE_FLAGS (JSON or comma) and REACT_APP_EXPERIMENTS_ENABLED to enable experimental-* flags.

## Development

- npm start — dev server
- npm test — unit tests
- npm run build — production build

Keep code modular and avoid logging secrets. All configuration should come from environment variables.
