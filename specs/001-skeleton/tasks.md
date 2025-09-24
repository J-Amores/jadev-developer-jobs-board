# Tasks: Web App Skeleton Foundation

**Input**: Design documents from `/specs/001-skeleton/`
**Prerequisites**: spec.md (available), plan.md (not found), data-model.md (not available), contracts/ (not available)

## Execution Flow (main)
```
1. Load spec.md from feature directory ✓
   → Tech stack: Astro Build + TypeScript
   → Data source: assets/data.json with job listings
2. Load optional design documents:
   → data-model.md: Not available - inferred from data.json structure
   → contracts/: Not available - API endpoints not needed (static data)
   → research.md: Not available - tech stack from spec
3. Generate tasks by category:
   → Setup: Astro project, dependencies, TypeScript config
   → Tests: Component tests, integration tests for user scenarios
   → Core: Job listings, filtering, search, job details, theme system
   → Integration: Data loading, responsive design, theme persistence
   → Polish: Performance, accessibility, error handling
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness: ✓
   → All user scenarios have tests
   → All functional requirements covered
   → All components implemented
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: Astro project structure with `src/` at repository root
- TypeScript throughout
- Component-based architecture

## Phase 3.1: Setup
- [ ] T001 Initialize Astro project with TypeScript and install core dependencies (package.json, astro.config.mjs, tsconfig.json)
- [ ] T002 [P] Configure ESLint and Prettier for code quality (eslint.config.js, .prettierrc)
- [ ] T003 [P] Set up project structure (src/components/, src/layouts/, src/pages/, src/styles/, src/types/)

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T004 [P] Integration test for job listings display in tests/integration/job-listings.test.ts
- [ ] T005 [P] Integration test for job filtering by location and contract in tests/integration/job-filtering.test.ts
- [ ] T006 [P] Integration test for job search functionality in tests/integration/job-search.test.ts
- [ ] T007 [P] Integration test for job details page navigation in tests/integration/job-details.test.ts
- [ ] T008 [P] Integration test for theme switching and persistence in tests/integration/theme-system.test.ts
- [ ] T009 [P] Integration test for responsive design breakpoints in tests/integration/responsive.test.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T010 [P] Job data type definitions in src/types/job.types.ts
- [ ] T011 [P] Theme context and provider in src/contexts/ThemeContext.tsx
- [ ] T012 [P] Data loading utility for jobs in src/utils/dataLoader.ts
- [ ] T013 [P] JobCard component with company logo and job info in src/components/JobCard.astro
- [ ] T014 [P] FilterBar component for location and contract filters in src/components/FilterBar.astro
- [ ] T015 [P] SearchBar component for keyword search in src/components/SearchBar.astro
- [ ] T016 [P] ThemeToggle component for light/dark mode in src/components/ThemeToggle.astro
- [ ] T017 Main layout with header and theme integration in src/layouts/Layout.astro
- [ ] T018 Home page with job listings grid in src/pages/index.astro
- [ ] T019 Job details page with full job information in src/pages/job/[id].astro
- [ ] T020 [P] Global styles with CSS custom properties for theming in src/styles/global.css
- [ ] T021 [P] Responsive breakpoints and mobile-first design in src/styles/responsive.css

## Phase 3.4: Integration
- [ ] T022 Connect job data loading to components and implement filtering logic
- [ ] T023 Implement search functionality across job titles and companies
- [ ] T024 Add theme persistence using localStorage with prefers-color-scheme detection
- [ ] T025 Implement responsive navigation and mobile-friendly interactions
- [ ] T026 Add error handling for missing data and failed navigation

## Phase 3.5: Polish
- [ ] T027 [P] Component unit tests for JobCard in tests/unit/JobCard.test.ts
- [ ] T028 [P] Component unit tests for FilterBar in tests/unit/FilterBar.test.ts
- [ ] T029 [P] Component unit tests for SearchBar in tests/unit/SearchBar.test.ts
- [ ] T030 [P] Component unit tests for ThemeToggle in tests/unit/ThemeToggle.test.ts
- [ ] T031 [P] Performance optimization - image loading and lazy loading
- [ ] T032 [P] Accessibility improvements - ARIA labels, keyboard navigation, focus management
- [ ] T033 [P] SEO optimization - meta tags, structured data, sitemap
- [ ] T034 Handle edge cases - no results state, loading states, error boundaries
- [ ] T035 Cross-browser testing and final responsive design validation

## Dependencies
- Setup (T001-T003) before everything
- Tests (T004-T009) before implementation (T010-T026)
- T010 (types) blocks T011-T021 (components using types)
- T017 (layout) blocks T018-T019 (pages using layout)
- T012 (data loader) blocks T022 (data integration)
- T011 (theme context) blocks T024 (theme persistence)
- Implementation before polish (T027-T035)

## Parallel Example
```
# Launch T004-T009 together (all test files):
Task: "Integration test for job listings display in tests/integration/job-listings.test.ts"
Task: "Integration test for job filtering in tests/integration/job-filtering.test.ts"
Task: "Integration test for job search in tests/integration/job-search.test.ts"
Task: "Integration test for job details page in tests/integration/job-details.test.ts"
Task: "Integration test for theme switching in tests/integration/theme-system.test.ts"
Task: "Integration test for responsive design in tests/integration/responsive.test.ts"

# Launch T010-T016 together (independent components):
Task: "Job data type definitions in src/types/job.types.ts"
Task: "Theme context and provider in src/contexts/ThemeContext.tsx"
Task: "Data loading utility in src/utils/dataLoader.ts"
Task: "JobCard component in src/components/JobCard.astro"
Task: "FilterBar component in src/components/FilterBar.astro"
Task: "SearchBar component in src/components/SearchBar.astro"
Task: "ThemeToggle component in src/components/ThemeToggle.astro"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Use assets/data.json for job data
- Follow Astro best practices for SSG
- Implement mobile-first responsive design
- Support both light and dark themes
- Handle all functional requirements from spec.md

## Task Generation Rules
*Applied during main() execution*

1. **From Spec Requirements**:
   - FR-001 → T018, T021 (responsive job listings)
   - FR-002 → T014, T015, T022, T023 (filtering and search)
   - FR-003 → T015, T023 (search functionality)
   - FR-004 → T013, T019 (job details)
   - FR-005 → T011, T016, T024 (theme system)
   - FR-006 → T021, T025, T035 (responsive design)
   - FR-007 → T013, T031 (logo handling)
   - FR-008 → T019, T026 (external navigation)
   - FR-009 → T034 (no results state)
   - FR-010 → T024 (theme persistence)

2. **From User Scenarios**:
   - Job listings view → T004, T018
   - Filter functionality → T005, T014, T022
   - Search functionality → T006, T015, T023
   - Job details navigation → T007, T019
   - Theme switching → T008, T016, T024
   - Responsive design → T009, T021, T025

3. **From Data Structure** (assets/data.json):
   - Job entity → T010 (types)
   - Company logos → T013 (JobCard with logos)
   - Job properties → T012 (data loader)

4. **Ordering**:
   - Setup → Tests → Types → Components → Pages → Integration → Polish
   - Dependencies block parallel execution

## Validation Checklist
*GATE: Checked by main() before returning*

- [x] All functional requirements have corresponding tasks
- [x] All user scenarios have integration tests
- [x] All tests come before implementation
- [x] Parallel tasks truly independent
- [x] Each task specifies exact file path
- [x] No task modifies same file as another [P] task
- [x] Data structure accounted for (assets/data.json)
- [x] Tech stack properly implemented (Astro + TypeScript)
- [x] All edge cases handled (no results, errors, loading)