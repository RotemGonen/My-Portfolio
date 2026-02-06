# Dashboard CV

A modern, mobile-first React web app that acts as a live dashboard CV / portfolio.

## Stack

- **React 19** + **Vite 7**
- Mobile-first responsive layout
- Sections: Hero, About, Experience, Skills, Projects, Contact

## Setup

```bash
npm install
```

## Scripts

| Command     | Description              |
| ----------- | ------------------------ |
| `npm run dev`    | Start dev server (e.g. http://localhost:5173) |
| `npm run build`  | Production build (output in project root) |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build, then commit and push built files to GitHub |
| `npm run lint`   | Run ESLint                |

## Project structure

```
src/
  App.jsx           # Main app
  index.css         # Global styles & CSS variables
  main.jsx          # Entry point
  components/       # Section and layout components
```

## Deploy to https://rotemg-portfolio.com

The app uses **relative base paths** (`base: './'`) so the same build works on both GitHub Pages and your custom domain.

1. **GitHub Pages**: Repo → Settings → Pages → Source: **main** branch, **/ (root)**.
2. **Custom domain**: `public/CNAME` contains `rotemg-portfolio.com`; it is copied to the root on build and must be committed when you deploy.
3. **Deploy**: Run `npm run deploy`. This builds (overwrites `index.html` with the built version, copies `public/` to root), then commits and pushes `index.html`, `assets/`, `CNAME`, `profile.png`, `vite.svg`, `.nojekyll`.
4. **After deploy**: Local `index.html` is the built one. Run `npm run dev` to restore the source `index.html` from `index.source.html` and start the dev server.

## First-time setup before commit

- Replace placeholder content in `src/components/` (Hero, About, Experience, Skills, Projects, Contact).
- Update `index.html` title and meta if needed.
- Add your own favicon in `public/` and reference it in `index.html`.

## License

Private — use as you like for your portfolio.
