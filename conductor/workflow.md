# Project Workflow

## Guiding Principles

1. The plan is the source of truth.
2. Write tests before implementation where behavior can be tested.
3. Aim for more than 80% coverage for new code.
4. Prefer non-interactive, CI-friendly commands.
5. Commit each completed task and attach a Git Note summary.

## Task Lifecycle

1. Mark the next task in `plan.md` as in progress.
2. Add or update a focused failing test when appropriate.
3. Implement the smallest change that makes the test pass.
4. Run the relevant tests and the project build.
5. Record the completed task in the plan and commit the work.

## Development Commands

- `npm test` — run the test suite.
- `npm run build` — type-check and create a production build.
- `npm run dev` — start the local development server.
