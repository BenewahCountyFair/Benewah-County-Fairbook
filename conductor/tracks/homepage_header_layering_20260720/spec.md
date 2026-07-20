# Homepage Header Layering Fix

## Overview

Prevent homepage content from visually covering or passing over the site header while the user scrolls. Preserve the header's existing scrolling behavior.

## Functional Requirements

- The header must remain visually unobstructed throughout scrolling on the homepage.
- Homepage hero and body content must not render above the header.
- Do not change the header from its current non-sticky behavior.
- Preserve existing header behavior on non-homepage routes.
- Verify the fix at desktop and mobile viewport sizes.

## Quality Requirements

- Add a focused automated regression test when the current Vitest/Testing Library setup can reliably exercise the affected behavior.
- Run the relevant tests and production build.
- Perform a manual homepage scroll check at desktop and mobile sizes.

## Acceptance Criteria

- Scrolling the homepage never causes hero or body text/images to appear over the header.
- The header retains its current scrolling behavior.
- Other routes retain their existing header presentation.
- Relevant automated checks pass, and the production build succeeds.

## Out of Scope

- Redesigning the header or navigation.
- Making the header sticky/fixed.
- Changing fair content or homepage layout beyond what is required to correct stacking.
