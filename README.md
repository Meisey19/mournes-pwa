# Explore the Mournes PWA

A modern Progressive Web App for discovering and learning about the Mourne Mountains in Northern Ireland.

## Features

### ✅ Implemented

- **Mountain Directory**: Browse all 30 Mourne Mountains with photos and information
- **Search**: Fast text search across mountain names, taglines, and descriptions
- **Interactive Map**: Leaflet map showing all 30 mountains with clickable markers and Mourne Wall route
- **Favorites System**: Save your favorite mountains (stored offline with IndexedDB)
- **Mountain Details**: Detailed pages for each mountain with terrain info and photo credits
- **About Page**: Learn about the Mourne Mountains history and landscape
- **Safety Guide**: Essential mountain safety information and the mountain code
- **Responsive Design**: Mobile-first design with bottom navigation
- **Offline Support**: PWA with service worker caching for offline access
- **Fast Performance**: Built with Vite for lightning-fast development and builds

### 🚀 Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type safety throughout
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Zustand** - State management
- **Localforage** - Offline storage for favorites
- **Lucide React** - Modern icon library
- **Vite PWA Plugin** - Progressive Web App support

### 📱 Pages

- `/` - Home page with mountain grid and search
- `/mountain/:id` - Individual mountain detail pages
- `/map` - Interactive map with all 30 mountains and Mourne Wall
- `/favorites` - Your saved favorite mountains
- `/about` - About the Mourne Mountains
- `/safety` - Mountain safety information
- `/more` - Additional information and links

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Future Enhancements

### Potential Features
- **Interactive Map**: Leaflet map showing mountain locations and hiking routes
- **Route Planning**: Suggested hiking routes with difficulty ratings
- **Weather Integration**: Real-time weather for the mountains
- **Elevation Profiles**: Visual elevation charts for routes
- **User Photos**: Allow users to upload and share mountain photos
- **Walking Logs**: Track your mountain summits and hiking stats
- **Social Features**: Share achievements with other hikers
- **Offline Maps**: Downloadable topographic maps for offline use
- **AR Navigation**: Augmented reality peak identification
- **Push Notifications**: Weather alerts and hiking reminders

### Technical Improvements
- Generate proper PNG app icons from the SVG (use tools like realfavicongenerator.net)
- Add comprehensive offline map tiles
- Implement GPS tracking for routes
- Add automated testing (Vitest + React Testing Library)
- Set up CI/CD pipeline
- Add analytics to understand user behavior
- Implement proper error boundaries
- Add loading skeletons for better perceived performance

## Deployment

This PWA can be deployed to:
- **Netlify** (Recommended) - Free tier with automatic HTTPS
- **Vercel** - Excellent for React apps
- **GitHub Pages** - Free static hosting
- **Firebase Hosting** - Good for PWAs
- **Azure Static Web Apps** - Free tier available

### Deployment Steps (Netlify)

1. Push code to GitHub
2. Connect Netlify to your repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## License

Educational project for demonstration purposes.

## Credits

Mountain data and original project by Michéal Mc Parland.
Modernized PWA implementation - February 2026.
