# Da-ghost42 Portfolio

Personal portfolio for Mohamed Boutuil (Da-ghost42). Built with React + TypeScript, Vite, TailwindCSS, and Radix UI components.

## Features
- Animated performant starfield background
- Sections: Hero, About, Projects (42 school projects), Contact
- Accessible, responsive, dark-mode ready
- Deployed via GitHub Pages

## Development
```bash
npm install
npm run dev
```
Local dev server: http://localhost:3000

## Build
```bash
npm run build
```
Output in `build/`.

## Deploy (GitHub Pages)
Ensure repository name: `da-ghost42-portfolio` and GitHub username `da-ghost42`.
```bash
npm run deploy
```
This runs `vite build` then publishes `build/` to the `gh-pages` branch. A `404.html` copy is created for SPA routing fallback.

Live URL:
https://da-ghost42.github.io/da-ghost42-portfolio/

## Update Project Links
Edit `src/components/Projects.tsx` and replace placeholder `https://github.com/your-repo/...` URLs with actual repository links.

## License
MIT (add a LICENSE file if needed).
