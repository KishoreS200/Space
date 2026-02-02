# Journey Through the Universe

A modern, cinematic space exploration website that takes users on a journey through our solar system, the speed of light, cosmic history, and human space exploration.

## Live Demo

[View Live Demo](https://your-domain.com) - Replace with your actual deployment URL

## Features

### 🌌 Immersive Hero Section
- Full-screen starfield animation using HTML5 Canvas
- Cinematic parallax effects
- Animated scroll indicator

### 🪐 Solar System Exploration
- 8 planet cards with accurate astronomical data
- Pluto included as a dwarf planet
- Interactive hover effects with glow and scale animations
- Responsive grid layout (1-4 columns)

### ⚡ Speed of Light Visualization
- Interactive data cards showing light travel times
- Distances from Earth to various celestial objects
- Animated grid background

### ⏳ Universe Timeline
- Vertical timeline with alternating layout
- 6 major cosmic milestones
- Smooth scroll animations
- Visual representation of humanity's brief existence

### 🚀 Space Missions
- 4 major space missions showcased
- Current status indicators (active/historical)
- Mission details and launch years
- Hover effects and transitions

### 🌠 Cinematic Design
- Dark futuristic theme with glowing accents
- Professional typography (Orbitron + Inter)
- Smooth animations and transitions
- Fully responsive design

## Technology Stack

- **HTML5** - Semantic markup, accessibility
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - No heavy dependencies
- **Canvas API** - Starfield animation
- **Intersection Observer API** - Scroll animations
- **SVG** - Vector graphics for optimal performance

## Performance Optimization

- Lazy loading for images
- SVG vector graphics
- Minimal JavaScript footprint
- Efficient CSS animations
- Reduced motion support
- Critical CSS approach

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/journey-through-universe.git
   cd journey-through-universe
   ```

2. Open the project:
   ```bash
   open index.html
   ```

   Or use a local development server:
   ```bash
   python3 -m http.server 8000
   ```

## File Structure

```
journey-through-universe/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main styles
│   └── animations.css      # Animation definitions
├── js/
│   ├── main.js             # Core functionality
│   └── animations.js       # Scroll animations
├── assets/
│   ├── images/             # SVG planet and mission images
│   └── icons/               # SVG icons (optional)
├── README.md               # Documentation
└── .gitignore              # Git ignore rules
```

## Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --color-bg: #0a0e27;
    --color-bg-secondary: #1a1f3a;
    --color-accent-cyan: #00d9ff;
    --color-accent-purple: #9d4edd;
}
```

### Content
- Edit planet data in the HTML planet cards
- Update mission information in the space missions section
- Modify timeline milestones as needed

### Fonts
Change fonts by updating the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers with modern JavaScript support

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion preferences respected
- High contrast text
- Skip navigation link

## Deployment

### Netlify
1. Drag and drop the project folder to Netlify
2. Site will be deployed automatically

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

MIT License - Free to use, modify, and distribute.

## Credits

- Design inspired by modern space exploration websites
- Astronomical data from NASA and ESA
- Fonts from Google Fonts

## Future Enhancements

- Add more space missions
- Include interactive 3D planet models
- Add audio narration
- Implement dark/light mode toggle
- Add more astronomical data and facts
- Create a mobile app version

---

© 2023 Journey Through the Universe. All rights reserved.