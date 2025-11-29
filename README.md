# littleguy.town

A database of all the little guys selene has made, with plans to let others create their own!

## Overview

littleguy.town is a playful web project featuring custom-drawn "little guy" characters that bounce around the screen like the classic DVD logo. The project will eventually include a database of all created little guys and an interactive GUI for users to design their own.

## Features

### Current
- Landing page with bouncing little guy characters
- Responsive design using the Dongle font
- DVD logo-style bouncing animation
- Clean, modular code structure

### Planned
- Database of all little guys created by the community
- Interactive little guy creator/customizer GUI
- User submissions and gallery
- Export little guys as SVG files
- Search and filter functionality

## Project Structure

```
littleguy-town/
├── index.html              # Main landing page
├── css/
│   └── styles.css          # All styling
├── js/
│   ├── script.js           # Bouncing animation logic
│   ├── creator.js          # [FUTURE] Little guy creator GUI
│   └── database.js         # [FUTURE] Database management
├── assets/
│   ├── wordmark.svg        # Logo
│   └── little-guy-*.svg    # Little guy characters
└── data/
    └── little-guys.json    # [FUTURE] Database schema
```

## Tech Stack

### Current
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Dongle)

### Future Considerations
- Backend: Node.js/Express, Python/Flask, or serverless functions
- Database: JSON files, SQLite, PostgreSQL, or Firebase
- Build Tools: Vite or Webpack (if needed)
- Hosting: GitHub Pages, Vercel, or Netlify

## Getting Started

### Prerequisites
- A modern web browser
- (Optional) A local web server for testing

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/littleguy-town.git
cd littleguy-town
```

2. Open `index.html` in your browser, or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Development

### Adding New Little Guys
1. Add SVG file to `assets/` folder
2. Add entry to `data/little-guys.json` with metadata
3. Update the display logic as needed

### Customization
- **Colors**: Edit the color variables in `css/styles.css`
- **Animation Speed**: Adjust the `speed` calculation in `js/script.js`
- **Fonts**: Change the Google Fonts import in `index.html`

## Roadmap

- [ ] Implement database backend
- [ ] Build little guy creator GUI
- [ ] Add user authentication
- [ ] Create gallery/browse page
- [ ] Add search and filter functionality
- [ ] Implement SVG export feature
- [ ] Add social sharing features
- [ ] Mobile app version?

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Selene Chang - [@suhween]

Project Link: [https://github.com/suhween/littleguy-town](https://github.com/suhween/littleguy-town)

## Acknowledgments

- Font: [Dongle](https://fonts.google.com/specimen/Dongle) by Yanghee Ryu
