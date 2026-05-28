# George Devid John — Portfolio

Personal portfolio website built with React + Vite.

## Getting Started

### Prerequisites
- Node.js 18+
- npm 8+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Project Structure

```
portfolio-george-devid-john/
├── public/
│   └── images/              # Project screenshot thumbnails
│       ├── health-dialogue.png
│       ├── natures-trim.png
│       ├── tiny-hub.png
│       ├── st-thomas.png
│       ├── chromacut.png
│       └── portfolio-preview.png
├── src/
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Cloud.jsx
│   │   │   ├── Credentials.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Navbar.jsx
│   │       └── Icon.jsx
│   ├── data/
│   │   └── portfolio.js     # All portfolio content (edit here)
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customizing Content

All text content, links, and project data lives in **`src/data/portfolio.js`**.
Edit that file to update your experience, projects, skills, or contact info without touching any component code.
