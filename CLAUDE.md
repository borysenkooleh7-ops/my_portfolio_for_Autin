# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start Vite development server with HMR
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

No testing or linting commands are configured.

## Architecture Overview

This is a React 18 personal portfolio website built with Vite. The application is a single-page site with multiple sections rendered as components.

### Core Stack
- **React 18** with functional components and hooks
- **Vite** as the build tool
- **SASS** for component styling (colocated .scss files)
- **Material-UI (MUI)** for card components and icons
- **AOS** (Animate On Scroll) for scroll-triggered animations
- **GSAP** and **Vanta.js** for advanced animations and WebGL backgrounds
- **Three.js** loaded via CDN in index.html

### Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Main component, initializes AOS
├── index.scss            # Global styles, CSS variables, fonts
├── components/           # All UI sections
│   ├── index.js          # Barrel exports
│   ├── Navbar/           # Navigation with mobile menu
│   ├── Hero/             # Landing section with typing animation
│   ├── About/
│   ├── Skills/           # Data-driven from imports.js
│   ├── Projects/         # Data-driven from imports.js
│   ├── Contact/
│   └── Earphone/         # Audio toggle component
├── pages/
│   ├── Loader/           # Loading screen
│   └── VantaLoader/      # Vanta.js animated loader
└── assets/
    ├── images/           # projects/, skills/, certificate/, socials/
    └── audio/
```

### Key Patterns

- **Barrel exports**: Components are exported via `components/index.js`
- **Data files**: Skills and Projects data live in `imports.js` within their component folders
- **CSS Variables**: Global theming in `index.scss` using `--color-main`, `--gradient-text`, etc.
- **Colocated styles**: Each component has its own `.scss` file alongside it
- **AOS attributes**: Animations use `data-aos-*` attributes on elements
