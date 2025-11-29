# DevJobs Board

A stunning, modern job board application for developer positions. Featuring a premium **Glassmorphism** design, deep dark mode aesthetics, and smooth animations. Browse, search, and filter through developer job opportunities with an elegant interface that adapts to your device and theme preferences.

## Live Preview

[View Live Site](https://your-deployed-site-url.com)

## Screenshots

> *Note: Screenshots below are placeholders. The actual application features a new premium Glassmorphism UI.*

### Desktop View
![Desktop Homepage](./screenshots/desktop-home.png)
![Desktop Job Details](./screenshots/desktop-details.png)

### Mobile View
![Mobile Homepage](./screenshots/mobile-home.png)
![Mobile Filters](./screenshots/mobile-filters.png)

### Theme System
![Light Mode](./screenshots/light-mode.png)
![Dark Mode](./screenshots/dark-mode.png)

## Features

### Premium UI/UX
- **Glassmorphism Design**: Translucent cards, floating elements, and subtle glows.
- **Deep Dark Mode**: Rich dark blue backgrounds with animated gradient meshes.
- **Smooth Animations**: Page transitions, hover lift effects, and spring animations.
- **Modern Typography**: Using **Plus Jakarta Sans** for a clean, tech-focused look.

### Job Listings
- Responsive grid layout displaying job cards with essential information
- Company logos with custom background colors
- Position titles, contract types, locations, and posting times
- Hover states and smooth transitions

### Search & Filter
- **Floating Search Bar**: Elegant glass-effect search bar.
- Real-time keyword search across job titles and company names
- Location-based filtering
- Multiple contract type selection (Full Time, Part Time, Freelance)
- Combined filtering with cumulative results
- "No results" state with helpful messaging

### Job Details
- Comprehensive job detail pages with full descriptions
- Requirements and qualifications sections
- Role responsibilities and day-to-day duties
- Direct application links to external job postings
- Company website links

### Theme System
- **Advanced Theme Support**:
    - **Dark Mode**: The default premium experience with glass effects.
    - **Light Mode**: A clean, high-contrast alternative for bright environments.
- Automatic system preference detection on first visit
- Manual theme toggle with preference persistence
- Smooth theme transitions across all components

### Responsive Design
- Mobile-first approach
- Three breakpoints: mobile (375px), tablet (768px), desktop (1200px)
- Adaptive grid layout: 1/2/3 columns based on screen size
- Touch-friendly controls for mobile devices

## Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide Svelte

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd devjobs-board-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript and Svelte checks
- `npm run check:watch` - Run checks in watch mode

## Project Structure

```
devjobs-board-app/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable Svelte components
│   │   │   ├── FilterBar.svelte
│   │   │   ├── JobCard.svelte
│   │   │   ├── SearchBar.svelte
│   │   │   └── ThemeToggle.svelte
│   │   ├── stores/         # Svelte stores for state management
│   │   │   ├── filters.ts
│   │   │   ├── jobs.ts
│   │   │   └── theme.ts
│   │   └── types/          # TypeScript type definitions
│   │       └── job.types.ts
│   ├── routes/             # SvelteKit routes
│   │   ├── job/[id]/       # Dynamic job detail pages
│   │   ├── +layout.svelte  # Root layout
│   │   └── +page.svelte    # Homepage
│   ├── app.css             # Global styles
│   └── app.html            # HTML template
├── static/
│   ├── assets/             # Images, icons, logos
│   └── data/               # Job data JSON
├── tailwind.config.js      # Tailwind configuration
├── svelte.config.js        # SvelteKit configuration
└── vite.config.ts          # Vite configuration
```

## Data Structure

Job data is stored in `static/data/data.json` with the following structure:

```typescript
interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}
```

## Deployment

To deploy this application:

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `build/` directory

3. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

> Note: You may need to install a specific [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## License

This project is open source and available under the MIT License.
