# Repair Exhibition-Class Numbering Across FairBook Content

## Problem

Some exhibition classes preserve numbering resets from a former three-column layout. Within a single class, entries may restart at 1 after a visual column break, producing incorrect lot numbers in the web guide.

## Requirements

- Identify every affected class in the published FairBook source.
- Renumber each affected class as one consecutive sequence beginning at 1.
- Preserve class headings, entry wording, and class boundaries.
- Keep the corresponding Notion export aligned where it contains the same fairbook content.
- Add regression coverage for the corrected numbering pattern.
- Confirm the application tests and production build pass.

## Acceptance Criteria

- Class 2, Canned Vegetable/Juices, lists entries 1 through 16 without a reset.
- No affected class contains repeated numbered entries caused by the old column layout.
- Class 4, Cakes, remains numbered 1 through 12.
- Existing unrelated content is unchanged.
