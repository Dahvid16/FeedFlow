# Welcome to your FeedFlow project
This project was built as a Task given for Elevvo pathway internship

## Project info

**URL**: https://feedflow-eta.vercel.app/

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
<!-- README for FeedFlow (Vite + React + TypeScript) -->

# FeedFlow

> A responsive frontend demo built with Vite + React + TypeScript, using shadcn-ui patterns and Tailwind CSS. This repository was used for an internship/task and demonstrates a modern component-driven UI.

Live demo: https://feedflow-eta.vercel.app/ (if available)

## Quick overview

FeedFlow is a frontend application scaffolded with Vite and written in TypeScript + React. It provides a collection of prebuilt UI components under `src/components` suitable for marketing pages, dashboards, and small web apps.

This README explains how to run the project locally, the available scripts, and the key places to look in the codebase.

## Screenshots

![FeedFlow Hero Section](/public/screenshots/hero.png)
*The landing page hero section with key features and call-to-action.*

![Component Examples](/public/screenshots/components.png)
*A selection of shadcn-ui based components used throughout the app.*

## Table of contents

- Project status
- Tech stack
- Getting started
- Available scripts
- Project structure
- Contributing
- License

## Project status

- Type: Frontend application (Vite + React + TypeScript)
- Status: Starter / demo (no backend bundled)

If you want to deploy, build artifacts are produced by `npm run build` and can be served by any static hosting provider.

## Tech stack

- Vite (dev server + build)
- React 18 + TypeScript
- Tailwind CSS
- shadcn-ui component patterns (Radix + Tailwind)
- React Router

See `package.json` for the full dependency list.

## Getting started

Prerequisites

- Node.js (recommended 18+ or latest LTS)
- npm or yarn

Clone and run (PowerShell example)

```powershell
git clone https://github.com/Dahvid16/FeedFlow.git
cd FeedFlow
npm install
npm run dev
```

The dev server (Vite) will start and print a local URL (usually http://localhost:5173). Open that in your browser.

Build for production

```powershell
npm run build
npm run preview
```

This creates an optimized production build in the `dist` folder and serves it locally for a quick check.

## Available scripts

Key scripts from `package.json`:

- npm run dev — start Vite dev server
- npm run build — build production assets
- npm run build:dev — build with development mode
- npm run preview — preview the production build
- npm run lint — run ESLint

Use `npm run` to list all scripts defined in the package manifest.

## Project structure (important files)

- src/
	- main.tsx — app entry
	- App.tsx — top-level app component and routes
	- index.css / App.css — Tailwind and app styles
	- components/ — UI sections and shadcn-ui-based components
	- hooks/ — custom hooks used across the app
	- lib/ — utilities

- public/ — static assets
- package.json — scripts and dependencies
- vite.config.ts — Vite configuration

Explore `src/components` to see small, focused UI components (cards, navbar, hero, pricing, etc.).

## Contributing

This repository is primarily a frontend demo. If you'd like to contribute:

1. Fork the repository and create a branch for your change.
2. Add a clear, small commit and push your branch.
3. Open a pull request against `main` with a concise description of your change.

## Notes & next steps

- The README has been refreshed to match the frontend code in this workspace.
- I can also add screenshots, a CONTRIBUTING guide, or a CI workflow (lint + build) — tell me which you'd prefer next.

## License