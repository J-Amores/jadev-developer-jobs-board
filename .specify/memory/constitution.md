<!--
SYNC IMPACT REPORT:
Version: 1.0.0 → 1.1.0
Modified Principles: Updated tech stack from React to Astro
Added Sections: Branch Management section
Removed Sections: None
Templates Requiring Updates:
  ✅ .specify/templates/plan-template.md - Constitution references are generic
  ✅ .specify/templates/spec-template.md - No direct constitutional references
  ✅ .specify/templates/tasks-template.md - No direct constitutional references
Follow-up TODOs: Update all references from React to Astro components
PROJECT STATUS: Git branches restructured to match specs directories (001-skeleton, 002-job-listing, etc.)
-->

# Devjobs Board App Constitution

## Core Principles

### I. Code Quality First
Every line of code MUST be maintainable, readable, and self-documenting. Code reviews are mandatory for all changes, focusing on clarity over cleverness. Dead code, commented-out sections, and TODO markers MUST be eliminated before deployment. TypeScript strict mode and ESLint rules are non-negotiable.

*Rationale: A job board application serves as a professional showcase and must demonstrate industry-standard code quality practices to potential employers.*

### II. Test-Driven Development (NON-NEGOTIABLE)
Tests MUST be written before implementation begins. Red-Green-Refactor cycle is strictly enforced. Minimum 85% code coverage for all business logic. Integration tests required for user journeys: job search, filtering, job detail navigation, and responsive layout behavior.

*Rationale: Job board functionality is critical for user experience - job search failures or layout issues directly impact usability and must be caught before deployment.*

### III. User Experience Consistency
All interactive elements MUST have consistent hover states, focus indicators for accessibility, and smooth transitions. Design system tokens for colors, typography, and spacing are mandatory. Mobile-first responsive design with tested breakpoints at 375px, 768px, and 1200px.

*Rationale: Professional job boards must demonstrate attention to user experience details, as inconsistencies undermine user trust and professional credibility.*

### IV. Performance Standards
Page load times MUST be under 2 seconds on 3G networks. Core Web Vitals targets: LCP < 1.5s, FID < 100ms, CLS < 0.1. Image optimization and lazy loading are mandatory. JavaScript bundle size cannot exceed 150KB compressed.

*Rationale: Job seekers often browse on mobile devices with limited bandwidth - performance directly impacts user engagement and accessibility.*

### V. Accessibility Compliance
WCAG 2.1 AA compliance is mandatory. All interactive elements MUST be keyboard navigable. Screen reader testing required for job listings, filters, and navigation. Color contrast ratios MUST meet 4.5:1 minimum for normal text, 3:1 for large text.

*Rationale: Job boards must be accessible to all users, including those with disabilities, to ensure equal employment opportunity access.*

## Quality Gates

All code changes MUST pass automated quality gates before merge:
- TypeScript compilation with zero errors
- ESLint rules with zero warnings
- Prettier formatting compliance
- Jest test suite with 85% minimum coverage
- Lighthouse performance score ≥ 90 for mobile
- Accessibility audit with zero violations

Manual testing checklist MUST be completed for UI changes:
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Responsive behavior verification
- Dark/light mode functionality
- Filter and search accuracy
- Loading states and error handling

## Development Standards

**Component Architecture**: Astro components with TypeScript. Framework components (React/Vue/Svelte) only when interactivity is required. Props interfaces explicitly defined. Component files MUST not exceed 200 lines.

**State Management**: Astro global stores for theme and filters. Client-side framework state (React/Vue) only for interactive components. Minimize client-side JavaScript.

**Styling Approach**: CSS Modules or styled-components with design tokens. Global styles limited to reset, typography, and theme variables. Component-specific styles co-located with components.

**Data Management**: Mock data from provided JSON file during development. API integration preparation with proper error boundaries and loading states. Input validation on all user interactions.

## Branch Management

**Feature Branches**: Each feature MUST have its own branch matching the specs directory naming:
- 001-skeleton: Foundation Astro setup and basic structure
- 002-job-listing: Job listing display and grid layout
- 003-search-filter: Search and filtering functionality
- 004-job-details: Individual job detail pages
- 005-theme-system: Light/dark mode implementation
- 006-responsive-design: Mobile-first responsive design

**Workflow**: Features developed in sequence with proper testing. No feature merges until constitutional compliance verified.

## Governance

This constitution supersedes all other development practices and preferences. All pull requests MUST verify constitutional compliance during code review. Any complexity that violates these principles MUST be justified with specific technical reasoning and approved by project maintainers.

**Amendment Process**: Constitutional changes require documentation of the rationale, migration plan for existing code, and approval from primary contributors. Version increments follow semantic versioning rules.

**Compliance Review**: Weekly constitution review during development cycles. Non-compliance issues are prioritized as bugs and MUST be resolved before new feature development.

**Version**: 1.1.0 | **Ratified**: 2025-09-24 | **Last Amended**: 2025-09-24