# Fairbook update report — October 22, 2026

## Complete PDF

Updated `Fairbook PDF/Complete_Fairbook.pdf` in place, retaining 28 pages:

- Page 2: updated Antlers & Wildlife.
- Page 3: updated Art & Antiques.
- Pages 22–24: updated Sewing.

All five inserted pages were checked against rendered source pages and matched pixel for pixel. The other 23 pages also matched their previous renders. The Art update is available as `Fairbook PDF/Art.pdf`.

## Web edition

Updated the official department text, search data, and printable downloads:

- Antlers & Wildlife: Skulls, Pelts, Game Bird, and Other; removed the previous Judges’ Choice wording that is absent from the new PDF.
- Art: Collages and Spray Paint. Fixed the department section boundary so the page displays both Antiques & Collectibles and Art. Search lots now match the printed Oil Painting and Mixed Media classes.
- Sewing: quilt sections A–D (including Paper Pieced), the revised nine quilt lots, Hats and Stuffed Animals & Characters in the shared knitting/crochet lots. All 18 sewing classes are represented in search.
- The complete book and all three department downloads under `WebVersion/public/fairbook-pdfs/` match the updated source PDFs.

The final corrected Sewing export distinguishes quilt lot 1 (Baby) from lot 2 (Lap). This correction is included in the complete book, the web details/search data, and the Sewing download. The corrected Antlers and Art exports also resolve the repeated Skulls heading and clipped Drawing title. All three departments now use the latest supplied exports.

## Reported Dependabot alerts: fixed locally

| Alert | Package | Issue | Installed update |
| --- | --- | --- | --- |
| [#1](https://github.com/BenewahCountyFair/Benewah-County-Fairbook/security/dependabot/1) — high | browserslist | Unbounded query cache can exhaust memory | 4.28.6 → 4.29.4 |
| [#2](https://github.com/BenewahCountyFair/Benewah-County-Fairbook/security/dependabot/2) — high | browserslist | Untrusted custom statistics can crash processing or change an object prototype | 4.28.6 → 4.29.4 |
| [#3](https://github.com/BenewahCountyFair/Benewah-County-Fairbook/security/dependabot/3) — moderate | baseline-browser-mapping | Invalid input can terminate the process | 2.10.44 → 2.11.31 |

The patched minimums are browserslist 4.28.7 and baseline-browser-mapping 2.11.0. Sources: [cache advisory](https://github.com/advisories/GHSA-c83g-rgw3-j3cx), [custom statistics advisory](https://github.com/advisories/GHSA-73wf-gq98-2v4g), and [process termination advisory](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv). Severity labels above follow the repository alerts.

These packages are reached through the Babel/Vite React build tooling. Fairbook serves a static website; visitors do not submit Browserslist queries or custom statistics to a server. This limits exposure in the published site, while updating still protects the build environment.

The lockfile also received compatible fixes for additional audit findings: nanoid 3.3.20, postcss 8.5.31, and source-map-js 1.2.2. The build and test dependencies were subsequently upgraded as described below.

## Build and test tooling upgrade: complete

The final `npm audit` reports **zero vulnerabilities** across production and development dependencies, including optional dependencies. All five previously outstanding package findings are resolved.

| Tool | Previous version | Installed version |
| --- | --- | --- |
| Vite | 5.4.20 | 8.3.5 |
| React Vite plugin | 4.3.4 | 5.2.0 |
| Vitest | 2.1.9 | 5.0.5 |
| esbuild | 0.21.5 (transitive) | 0.28.2 (direct development dependency) |

Vitest's vulnerable Tinypool dependency is no longer installed. Its mocker package is now 5.0.5. Vite and Vitest share the same installed Vite 8.3.5 version.

The React plugin's installed 5.2.0 release explicitly supports Vite 8. The latest plugin 6.1.2 encountered an npm conflict between optional Babel 8 tooling and the design CLI's Babel 7 dependencies. Plugin 5.2.0 works with the latest Vite without forced dependency resolution or overrides.

Vite and Vitest configuration files now use the `.mts` extension, and npm scripts point to those files. This declares ESM explicitly and resolves the Vite 8 native config loader warnings.

The build explicitly retains the previous compilation targets: ES2020, Chrome 87, Edge 88, Firefox 78, and Safari 14. These are compilation targets, not a guarantee for every browser feature used by the site. Vite 8's default Lightning CSS minifier changed the design system's banner and background appearance during verification. The build uses the documented `cssMinify: 'esbuild'` compatibility option with patched esbuild 0.28.2 to retain the existing appearance. JavaScript building uses Vite 8's default engine. Development verification also exposed a pre-existing duplicate React key for the two livestock check-in sessions on the same day; the schedule key now includes the event time so both sessions have distinct identities.

Migration references: [Vite 8 migration guide](https://vite.dev/guide/migration), including the CSS minification compatibility option, and [Vitest 5 migration guide](https://vitest.dev/guide/migration/). Vitest 5 requires Node.js 22.12 or later on a supported release line; the existing deployment workflow uses Node.js 24.

## Checks and publication status

- All 11 tests pass, including the new department content/search regression test.
- TypeScript checks and the Vite 8 production build pass after the security updates, including the GitHub Pages base path. A clean lockfile install also passed before the CSS compatibility dependency was added.
- Browser checks passed on both the Vite 8 development server and the production build: Home, Exhibits, Schedule, General rules, Print downloads, the three updated department pages at mobile width, searches for Pelts, Collages, Spray Paint, Lap and Stuffed Animals, and all 15 PDF downloads. No browser exceptions or horizontal overflow were detected on the checked pages. The desktop homepage and mobile Art page were visually reviewed; the CSS compatibility setting restored the original banner and page background.
- Source-file whitespace checks pass. PDF data is checked with PDF parsing/rendering rather than text whitespace rules.
- The existing GitHub Pages workflow deploys web changes pushed to `master`. GitHub reassesses the three original alerts when the updated lockfile reaches the default branch; the local audit reports zero vulnerabilities.
