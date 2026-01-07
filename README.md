# ⚡ Ryze AI - AI-Powered Ad Management Platform

> **Smart advertising management that actually makes money**

Ryze AI is a modern, high-performance web application for AI-powered advertising campaign management. Built with React, Vite, and Framer Motion, it features a stunning UI with parallax effects, animated components, and a complete dark/light theme system.

![Ryze AI](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?style=flat-square&logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.24-ff0055?style=flat-square)

---

## ✨ Features

### 🎨 User Interface
- **Hero Parallax Section** - Immersive scrolling experience with animated product cards
- **Aurora Background** - Dynamic gradient animations
- **Animated Testimonials** - Auto-playing customer reviews with smooth transitions
- **Responsive Navbar** - Shrinks on scroll with smooth animations
- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Mobile-First Design** - Fully responsive across all devices

### 🚀 Performance
- **Lightning Fast** - Built with Vite for instant HMR and optimized builds
- **Smooth Animations** - Powered by Framer Motion for 60fps animations
- **Code Splitting** - Lazy-loaded routes for optimal performance
- **Modern Stack** - React 19 with latest features

### 📱 Pages
- **Home** - Hero parallax, features, stats, testimonials, and CTA sections
- **Features** - Detailed platform capabilities showcase
- **Pricing** - Pricing plans with feature comparisons
- **Responsive Routing** - React Router with smooth page transitions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with modern hooks |
| **Vite** | Build tool and dev server |
| **Framer Motion** | Animation library |
| **React Router** | Client-side routing |
| **Lucide React** | Icon library |
| **CSS Variables** | Themeable design system |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed
- Git (for cloning)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Ryze Ai"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Deployment (SPA routing)

If deploying to Vercel or Netlify, enable SPA rewrites so deep links like `/features` work:

- Vercel: `vercel.json` includes rewrites to serve `index.html` for all paths.
- Netlify: `public/_redirects` contains `/* /index.html 200` for client-side routing.

After pushing, trigger a redeploy in your hosting provider.

---

## 🚀 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint checks
npm run lint
```

---

## 📁 Project Structure

```
Ryze Ai/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ResizableNavbar.jsx
│   │   ├── HeroParallax.jsx
│   │   ├── AnimatedTestimonials.jsx
│   │   ├── AuroraBackground.jsx
│   │   ├── FeatureGrid.jsx
│   │   ├── PricingCard.jsx
│   │   ├── Stats.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/           # Route pages
│   │   ├── HomePage.jsx
│   │   ├── FeaturesPage.jsx
│   │   └── PricingPage.jsx
│   ├── styles/          # Global styles
│   │   ├── index.css
│   │   └── components.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Theme System

Ryze AI includes a complete theme system with dark and light modes:

- **Toggle:** Click the Sun/Moon icon in the navbar
- **Persistence:** Theme preference saved to localStorage
- **CSS Variables:** Complete design token system
- **Instant Switching:** No page reload required

### Theme Colors

**Dark Mode (Default)**
- Background: `#09090b`
- Text: `#fafafa`
- Accent: `#10b981` (Emerald green)

**Light Mode**
- Background: `#ffffff`
- Text: `#09090b`
- Accent: `#10b981` (Emerald green)

---

## 🔧 Configuration

### Vite Config
Located in `vite.config.js` - configured for React with optimal build settings.

### ESLint
Located in `eslint.config.js` - configured with React hooks and refresh rules.

---

## 🌟 Key Components

### HeroParallax
Immersive hero section with parallax scrolling product cards. Features three rows of cards moving at different speeds.

### AnimatedTestimonials
Auto-playing testimonials carousel with smooth animations and user controls.

### ResizableNavbar
Smart navbar that shrinks on scroll, includes theme toggle and mobile menu.

### AuroraBackground
Animated gradient background with subtle aurora effect.

---

## 📝 Development Notes

- **Code Style:** Modern ES6+ syntax with React hooks
- **Animations:** Framer Motion for declarative animations
- **Routing:** Hash routing for smooth anchor navigation
- **Icons:** Lucide React for consistent icon system
- **Responsive:** Mobile-first approach with breakpoints

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is private and proprietary.

---

## 🔗 Links

- **Live Demo:** [Coming Soon]
- **Documentation:** [Coming Soon]

---

## 🔒 Security

- Client-side form validation and basic submission throttling are implemented in `src/components/DemoBookingForm.jsx` using Zod.
- Secrets must never be placed in the frontend. Any `import.meta.env.VITE_*` variables are public at runtime.
- Implement server-side rate limiting (IP + user), strict schema validation, secure headers, and key management before connecting real APIs.
- See [SECURITY.md](SECURITY.md) for recommended server controls and OWASP-aligned practices.

---

**Built with ❤️ by the Ryze AI Team**
