# Personal Website Template

A modern personal portfolio website that is easily customizable and specifically allows you to provide more details about your work experiences and projects beyond what can fit on your resume.
Easy to set up with your own information in 10 minutes or less!

## ✨ Features

- **Data-Driven**: All personizable content is abstracted to a single configuration file that makes it easy for you to customize the whole website in one place
- **Interactive Sections**: Hero, About, Experience, Projects, Skills, and Contact
- **Color Scheme**: Choose between Light and Dark backgrounds with the option to choose your own thematic colors to make the website truly unique


## 📱 Sections

1. **Hero**: Animated introduction with profile image
2. **About**: Personal information with education and interests
3. **Experience**: Timeline of work experience with company details - clickable cards allow you to provide more information
5. **Projects**: Project showcase with technology tags
6. **Skills**: Categorized skills
7. **Contact**: Social media links

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
- **About Section**: Introduction, story, education, interests
- **Experience**: Work history with companies, roles, and technologies
- **Projects**: Project details, images, links, and featured status
- **Skills**: Categorized skills with proficiency levels
- **Contact**: Email, location, and social media links

### Example Configuration
```typescript
export const personalData: PersonalData = {
  name: "John Doe",
  title: "Full Stack Developer",
  subtitle: "I enjoy building sites & apps. My focus is web development.",
  profileImage: "/images/profile.jpg",
  
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

### Styling
- **Customizable Styling**: Update CSS variables like themes and fonts in `src/data/personalData.ts`
- **Colors**: Modify the Theme, Colors, and Fonts!

### Images
- Place your profile image in `public/images/profile.jpg`
- Add project images to `public/images/projects/`
- Update image paths in the data configuration

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
Update the CSS variables in `src/data/personalData.ts`:
```
colors: {
      primary: '#72efdd',
      secondary: '#48bfe3',
      tertiary: '#6930c3'
    },
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please reach out at kshah2003@gmail.com


**Built using TypeScript**

## 🎉 Quick Start for New Users

1. **Fork or clone** this repository
2. **Update** `src/data/personalData.ts` with your information
3. **Replace** the profile image in `public/images/`
4. **Customize** colors in `src/index.css` if desired
5. **Deploy** to your preferred platform
6. **Share** your new personal website!

The website is designed to be easily customizable - just update the data file and you'll have your own professional portfolio in minutes!
