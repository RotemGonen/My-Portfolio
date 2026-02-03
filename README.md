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
| `npm run build`  | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint`   | Run ESLint                |

## Project structure

```
src/
  App.jsx           # Main app
  index.css         # Global styles & CSS variables
  main.jsx          # Entry point
  components/       # Section and layout components
```

## First-time setup before commit

- Replace placeholder content in `src/components/` (Hero, About, Experience, Skills, Projects, Contact).
- Update `index.html` title and meta if needed.
- Add your own favicon in `public/` and reference it in `index.html`.

## License

Private — use as you like for your portfolio.
