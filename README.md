# Nadhir Portfolio - React Project

A modern, responsive portfolio website built with React, featuring smooth animations with Framer Motion and GSAP, styled with Tailwind CSS.

## Features

- ⚡ React 18 with JSX
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion for component animations
- 🚀 GSAP for advanced scroll animations
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- ✨ Smooth scroll animations
- 🎯 Modern UI/UX design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section with profile
│   ├── Services.jsx    # Services/skills section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── index.js            # Entry point
└── index.css           # Global styles with Tailwind
```

## Technologies Used

- **React** - UI library
- **Framer Motion** - Animation library for React
- **GSAP** - Professional animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Material Symbols** - Google's icon font

## Animations

The project includes various animations:
- **GSAP**: Scroll-triggered animations, timeline animations, floating effects
- **Framer Motion**: Component transitions, hover effects, page animations
- **CSS Transitions**: Smooth color and layout transitions

## Customization

To customize the portfolio:

1. Update personal information in the components
2. Modify colors in `tailwind.config.js`
3. Add/remove sections by editing `App.jsx`
4. Customize animations in individual components

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

This project is open source and available under the [MIT License](LICENSE).