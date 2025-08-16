# Karan's Personal Website

A modern, captivating personal portfolio website built with React, featuring an IDE-inspired dark theme with vibrant blues, purples, and reds.

## 🚀 Features

- **Modern Design**: IDE-inspired dark theme with glass morphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations and transitions throughout
- **Interactive Elements**: Hover effects, typing animations, and particle effects
- **Professional Sections**: Hero, About, Experience, Projects, Skills, and Contact
- **Contact Form**: Functional contact form for easy communication
- **Social Links**: Integration with professional social media profiles

## 🎨 Design Highlights

- **Color Scheme**: Dark backgrounds with vibrant accent colors (blues, purples, reds)
- **Typography**: Modern fonts (Inter for body text, JetBrains Mono for code)
- **Animations**: Smooth fade-ins, slide effects, and hover interactions
- **Code Window**: Interactive code display in the hero section
- **Timeline**: Beautiful timeline for work experience
- **Progress Bars**: Animated skill progress indicators
- **Particle Effects**: Subtle floating particles in the background

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **CSS3**: Custom CSS with CSS Grid, Flexbox, and animations
- **JavaScript ES6+**: Modern JavaScript features
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Minimal dependencies for fast loading

## 📱 Sections

1. **Hero**: Animated introduction with typing effect and code window
2. **About**: Personal information with stats and tech stack
3. **Experience**: Timeline of work experience with company details
4. **Projects**: Filterable project showcase with technology tags
5. **Skills**: Categorized skills with progress bars
6. **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd KaranPersonalWebsite
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
Update the following files with your information:
- `src/components/Hero.js` - Name, title, and description
- `src/components/About.js` - Personal story and stats
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Project details
- `src/components/Skills.js` - Skills and expertise
- `src/components/Contact.js` - Contact information and social links

### Styling
- Main colors and theme: `src/index.css` (CSS variables)
- Component-specific styles: Individual `.css` files in `src/components/`

### Content
All content is easily editable in the component files. Replace placeholder text and data with your actual information.

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Experience.js   # Work experience
│   ├── Projects.js     # Projects showcase
│   ├── Skills.js       # Skills section
│   ├── Contact.js      # Contact form
│   └── *.css           # Component styles
├── App.js              # Main app component
├── App.css             # App-specific styles
├── index.js            # React entry point
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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

For questions or support, feel free to reach out through the contact form on the website.

---

**Built with ❤️ using React and modern web technologies**