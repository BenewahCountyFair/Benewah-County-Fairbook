# Implementation Plan: Repair Exhibition-Class Numbering

## Phase 1: Identify and Protect the Intended Numbering

- [x] Task: Inventory numbering resets in published and source-aligned fairbook content
    - [x] Locate class-local numbered-list resets caused by visual column breaks (42 classes in the web source; Baking remains only in the Notion export).
    - [x] Record the expected consecutive range for each affected class.
- [x] Task: Add regression tests for sequential class numbering
    - [x] Write a source-level regression test covering every top-level class list, including Canned Vegetable/Juices.
    - [x] Confirm the test failed against legacy resets and passed after correction.

## Phase 2: Correct and Verify Exhibition Content

- [x] Task: Renumber all affected exhibition classes
    - [x] Update the web source without changing entry names or class boundaries.
    - [x] Update the corresponding Notion export where it mirrors the source content.
- [x] Task: Verify the repaired content
    - [x] Run the full test suite.
    - [x] Run the production build.
    - [x] Review the content diff for unintended wording changes.
