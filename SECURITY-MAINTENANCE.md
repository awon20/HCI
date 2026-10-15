# Security maintenance — 2026-10-15

Retired Firebase client initialization, SDK dependencies, reads and uploads. Sketch saving now downloads a local PNG. The cloud archive is disabled; deny-all client rules are prepared. Removed old generated bundles containing the Firebase integration. The demonstration socket server listens on localhost.

Compatible dependency updates and a weekly Dependabot configuration are included. CRA 3/4 projects move to react-scripts 5.0.1 to build with current Node versions; React itself retains its existing major version. Legacy peer declarations are retained through the documented npm legacy-peer-deps setting.

## Validation

Installation: passed. Build: passed.

npm audit reports 101 affected packages: 0 critical, 66 high, 32 moderate, 3 low. Baseline total: 298.

## Remaining dependency findings

- gh-pages: high; registry suggests gh-pages@6.1.1 (major upgrade).
- material-ui-color-picker: high; no registry fix reported.
- react-scripts: high; registry suggests react-scripts@0.0.0 (major upgrade).

## Limits and deployment

This is a source/dependency maintenance review, not a security certification or a penetration test. npm audit counts vulnerable packages, not distinct exploitable defects. Legacy build tooling still has known advisories and requires a future migration; a successful build does not resolve those advisories. Audit suggestions to replace react-scripts with a nonfunctional package must not be applied automatically.

Local builds used Node 24.19.0 and npm 11.21.0 with installation lifecycle scripts disabled. Existing lint warnings are not treated as a successful lint audit. Browser permissions, live hosting configuration, account MFA, branch protections, cloud IAM, and full Git history were not comprehensively verified.

Reproduce with `npm ci --ignore-scripts`, `npm audit`, and `npm run build`. For redux-react-tuto, install at the root and in webpack-demo, then build in webpack-demo.

See [FIREBASE-RETIREMENT.md](FIREBASE-RETIREMENT.md): repository changes do not publish rules to Firebase, revoke download URLs, or replace old deployed copies. No cloud data was deleted.

