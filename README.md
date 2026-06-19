# MUGISHA Toussaint — Portfolio

A personal portfolio site built with React + Vite + Tailwind CSS.

## Run Locally (Windows)

**Requirements:** [Node.js 18+](https://nodejs.org) (download the LTS version)

**Option A — Double-click:**
1. Double-click `run.bat`
2. The browser opens automatically at `http://localhost:5173`

**Option B — Command Prompt / PowerShell:**
```bash
npm install
npm run dev
```

## Deploy to Render

1. Push this folder to a GitHub repository.
2. Go to [render.com](https://render.com) → New → Static Site.
3. Connect your GitHub repo.
4. Render auto-detects `render.yaml` and fills in:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
5. Click **Create Static Site** — done!

## Project Structure

```
portfolio/
├── public/
│   └── profile.jpg        # Your profile photo
├── src/
│   ├── App.jsx            # Dark mode state
│   ├── index.css          # Theme variables (light/dark)
│   ├── main.jsx           # React entry point
│   └── pages/
│       └── Home.jsx       # Full portfolio page
├── index.html
├── package.json
├── render.yaml            # Render deployment config
├── run.bat                # Windows one-click runner
└── vite.config.js
```

## Customization

- **Profile photo:** Replace `public/profile.jpg` with your own image.
- **Content:** Edit `src/pages/Home.jsx` — all text, skills, projects, and contact info is in plain arrays at the top of the component.
- **Colors:** Change `--primary` in `src/index.css` to any HSL value (currently cyan `180 100% 35%`).
- **Dark mode:** Defaults to light; user preference saved to `localStorage`.
