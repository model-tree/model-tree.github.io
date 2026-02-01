# model-tree.github.io
Presentation page for model-tree

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**: Go to your repository settings → Pages → Source: select "GitHub Actions"

2. **Push to main branch**: The GitHub Actions workflow will automatically build and deploy your site when you push to the `main` branch.

3. **Your site will be available at**: `https://[your-username].github.io/model-tree.github.io/`

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
.
├── src/
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Tailwind imports
│   └── vite-env.d.ts    # Vite type definitions
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── .github/workflows/   # GitHub Actions workflow

```