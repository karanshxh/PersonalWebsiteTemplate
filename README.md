# Personal Website Template

A modern, responsive personal portfolio website built with React and TypeScript, featuring a beautiful dark theme with light blue to light purple gradients.

## ✨ Features

- **Dark Mode Design**: Elegant dark theme with light blue to light purple gradient accents
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Data-Driven**: All content is abstracted to a single configuration file for easy customization
- **Modern Animations**: Smooth transitions, hover effects, and typing animations
- **Interactive Sections**: Hero, About, Experience, Projects, Skills, and Contact
- **Project Showcase**: Filterable projects with featured highlights
- **Skills Visualization**: Categorized skills with animated progress bars
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Easy social media links and professional networking

## 🎨 Design Highlights

- **Color Scheme**: Dark backgrounds with vibrant light blue to light purple gradients
- **Typography**: Modern fonts (Inter for body text, JetBrains Mono for code elements)
- **Animations**: Smooth fade-ins, slide effects, and interactive hover states
- **Glass Morphism**: Subtle backdrop blur effects for modern UI elements
- **Timeline Design**: Beautiful timeline for work experience
- **Progress Indicators**: Animated skill progress bars with shimmer effects

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development for better maintainability
- **CSS3**: Custom CSS with CSS Grid, Flexbox, and advanced animations
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Performance Optimized**: Minimal dependencies for fast loading

## 📱 Sections

1. **Hero**: Animated introduction with typing effect and profile image
2. **About**: Personal information with stats and interests
3. **Experience**: Timeline of work experience with company details
4. **Projects**: Filterable project showcase with technology tags
5. **Skills**: Categorized skills with animated progress bars
6. **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## 🎯 Customization

### Personal Information
All personal information is stored in `src/data/personalData.ts`. Simply update this file with your information:

- **Basic Info**: Name, title, subtitle, profile image path
- **Theme Configuration**: Dark/light mode and custom color scheme
- **About Section**: Introduction, story, education, interests
- **Experience**: Work history with companies, roles, and technologies
- **Projects**: Project details, images, links, and featured status
- **Skills**: Categorized skills with proficiency levels
- **Contact**: Email, phone, and social media links

### Example Configuration
```typescript
export const personalData: PersonalData = {
  name: "John Doe",
  title: "Full Stack Developer",
  subtitle: "I enjoy building sites & apps. My focus is web development.",
  profileImage: "/images/profile.jpg",
  
  theme: {
    mode: 'dark', // 'dark' or 'light'
    colors: {
      primary: '#60a5fa',    // Light blue
      secondary: '#a78bfa',  // Light purple
      tertiary: '#c084fc'    // Light purple variant
    }
  },
  
  about: {
    introduction: "Your introduction...",
    story: "Your story...",
    education: "Your education...",
    interests: ["Interest 1", "Interest 2"]
  },
  
  experiences: [
    {
      id: "1",
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      period: "2023 - Present",
      description: "Job description...",
      technologies: ["React", "TypeScript", "Node.js"]
    }
  ],
  
  // ... more configuration
};
```

### Theme Customization
The website supports both dark and light modes with fully customizable colors:

#### Changing Theme Mode
```typescript
theme: {
  mode: 'light', // Change from 'dark' to 'light'
  colors: {
    // Your colors here
  }
}
```

#### Customizing Colors
```typescript
theme: {
  mode: 'dark',
  colors: {
    primary: '#ff6b35',    // Orange
    secondary: '#4ecdc4',  // Teal
    tertiary: '#45b7d1'    // Blue
  },
  fonts: {
    primary: 'Inter',      // Primary font for body text
    secondary: 'JetBrains Mono'  // Secondary font for code/monospace
  }
}
```

#### Popular Color Schemes
- **Sunset**: `#ff6b35`, `#f7931e`, `#ffd93d`
- **Ocean**: `#4ecdc4`, `#45b7d1`, `#96ceb4`
- **Forest**: `#2d5016`, `#4a7c59`, `#7fb069`
- **Berry**: `#ff6b9d`, `#c44569`, `#f38181`

#### Customizing Fonts
```typescript
fonts: {
  primary: 'Poppins',      // Any Google Font for body text
  secondary: 'Fira Code'   // Any Google Font for code/monospace
}
```

#### Popular Font Combinations
- **Modern**: `'Inter'` + `'JetBrains Mono'`
- **Elegant**: `'Poppins'` + `'Fira Code'`
- **Classic**: `'Roboto'` + `'Source Code Pro'`
- **Creative**: `'Montserrat'` + `'Cascadia Code'`

### Styling
- **Main Theme**: Update CSS variables in `src/index.css`
- **Component Styles**: Individual `.css` files in `src/components/`
- **Dynamic Colors**: Colors are applied automatically from `personalData.ts`

### Images
- Place your profile image in `public/images/profile.jpg`
- Add project images to `public/images/projects/`
- Update image paths in the data configuration

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── *.css           # Component styles
├── data/
│   └── personalData.ts # All personal information
├── App.tsx             # Main app component
├── App.css             # App-specific styles
├── index.tsx           # React entry point
└── index.css           # Global styles
```

## 🌐 Deployment

This website is optimized for deployment on platforms like:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3**

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### GitHub Pages Deployment
1. Add `"homepage": "https://johndoe.github.io/personal-website"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Run `npm run deploy`

## 🔧 Customization Tips

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update the navigation in `src/components/Navbar.tsx`
4. Add corresponding data to `personalData.ts`

### Changing Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #your-color;
  --accent-secondary: #your-color;
  --accent-tertiary: #your-color;
  --accent-gradient: linear-gradient(135deg, #color1 0%, #color2 50%, #color3 100%);
}
```

### Adding Animations
The website includes several animation classes:
- `.fade-in`: Fade in from bottom
- `.slide-in-left`: Slide in from left
- `.slide-in-right`: Slide in from right

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

For questions or support, feel free to reach out through the contact form on the website or create an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

## 🎉 Quick Start for New Users

1. **Fork or clone** this repository
2. **Update** `src/data/personalData.ts` with your information
3. **Replace** the profile image in `public/images/`
4. **Customize** colors in `src/index.css` if desired
5. **Deploy** to your preferred platform
6. **Share** your new personal website!

The website is designed to be easily customizable - just update the data file and you'll have your own professional portfolio in minutes!