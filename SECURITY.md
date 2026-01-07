# Security Hardening Guide

This project is currently a frontend (React + Vite). True security controls such as rate limiting, authentication, authorization, and secret handling must be enforced on the server or edge.

The changes in this repo add client-side validation and basic submission throttling for UX. Implement the following server-side measures before connecting real APIs.

## Rate Limiting (Server-Side)
- Apply IP- and user-based rate limiting to all public endpoints.
- Recommended: `express-rate-limit` or `rate-limiter-flexible` with Redis.
- Use a token bucket or sliding window. Suggested defaults:
  - `POST /api/*`: 3 requests/min per user, 60/min per IP.
  - Burst control with exponential backoff.
- Return HTTP 429 with JSON: `{ "error": "Too many requests" }` and a `Retry-After` header.

## Input Validation & Sanitization
- Enforce strict schema validation on server for every endpoint.
- Recommended: `zod`, `joi`, or `yup` on the server.
- Reject unexpected fields (`strict()` mode) and coerce/normalize types.
- Validate:
  - Strings: trim, length limits, character sets.
  - Email: RFC-compliant validation, max length 254.
  - Dates/times: ISO formats.
- Sanitize any user-generated content that may be rendered (avoid `dangerouslySetInnerHTML`).
- Log validation failures without leaking sensitive details.

## API Keys & Secrets
- Never expose secrets in client code. Frontend build-time vars prefixed with `VITE_` are public.
- Store secrets in server environment variables or a secrets manager (Azure Key Vault, AWS Secrets Manager).
- Rotate keys periodically and on compromise.
- Scope keys with least privilege; avoid long-lived tokens.

## Additional Server Controls
- Use `helmet` for secure HTTP headers (HSTS, no sniff, frameguard).
- Enforce CORS with explicit allowed origins/methods/headers.
- Use TLS with modern ciphers; redirect HTTP→HTTPS.
- Implement authentication (OIDC/OAuth2) and authorization (RBAC/ABAC).
- Add centralized request logging and correlation IDs.
- Enable WAF/CDN protections if deployed publicly.

## Client-Side Notes
- The demo form uses Zod for strict validation and basic local rate limiting. This does NOT replace server defenses.
- Avoid storing sensitive data in localStorage/sessionStorage.
- Avoid rendering untrusted HTML; React escapes JSX by default.

## Incident Response
- Monitor 4xx/5xx rates and anomalies.
- Keep dependency updates current; run `npm audit` and patch high severity issues promptly.

