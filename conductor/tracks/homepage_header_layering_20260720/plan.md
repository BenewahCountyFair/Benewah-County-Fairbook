# Homepage Header Layering Fix — Implementation Plan

## Phase 1: Regression Coverage

- [x] Task: Add a focused homepage layout regression test
  - [x] Assert the stylesheet establishes a dedicated stacking layer for the AppShell header.
  - [x] Assert the hero copy remains within its local stacking layer and cannot outrank the header.
  - [x] Verify the test covers the shared header rule rather than changing non-homepage route behavior.
- [x] Task: Run the focused test and confirm it fails before the style fix.

## Phase 2: Layering Fix

- [x] Task: Update the application stylesheet's AppShell header rule
  - [x] Give the sticky AppShell header a higher stacking order and opaque surface background.
  - [x] Preserve the existing header layout and non-sticky behavior selection; do not alter navigation markup or routing.
  - [x] Keep the change compatible with desktop and the existing mobile header layout.
- [x] Task: Run the focused test and confirm it passes.

## Phase 3: Verification

- [~] Task: Validate the complete application
  - [x] Run `npm test`.
  - [x] Run `npm run build`.
  - [ ] Manually scroll the homepage at desktop and mobile widths to verify no hero/body content overlays the header.
