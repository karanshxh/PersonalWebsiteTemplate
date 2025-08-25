export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalData {
  // Basic Info
  name: string;
  title: string;
  subtitle: string;
  profileImage: string;
  
  // About
  about: {
    introduction: string;
    story: string;
    education: string;
    interests: string[];
  };
  
  // Contact
  email: string;
  location: string;
  socialLinks: SocialLink[];
  
  // Experience
  experiences: Experience[];
  
  // Skills
  skills: Skill[];
  
  // Projects
  projects: Project[];
}

export const personalData: PersonalData = {
  name: "Karan",
  title: "Full Stack Developer",
  subtitle: "I enjoy building sites & apps. My focus is web development.",
  profileImage: "/images/profile.jpg",
  
  about: {
    introduction: "Hello, I'm Karan. I'm a full-stack developer with experience in modern web technologies. I enjoy building sites & apps. My focus is web development.",
    story: "I have a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my clients' visions to life. I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
    education: "I studied Computer Science and have been working in the field for several years, constantly learning and adapting to new technologies.",
    interests: ["Web Development", "UI/UX Design", "Open Source", "Reading", "Traveling"]
  },
  
  email: "karan@example.com",
  location: "San Francisco, CA",
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "twitter"
    },
    {
      name: "Portfolio",
      url: "https://yourportfolio.com",
      icon: "external"
    }
  ],
  
  experiences: [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Leading development of web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Startup Inc",
      location: "San Francisco, CA",
      period: "2021 - 2023",
      description: "Built and maintained web applications using modern JavaScript frameworks. Collaborated with design and product teams to deliver high-quality features.",
      technologies: ["React", "JavaScript", "Python", "PostgreSQL", "Git"]
    },
    {
      id: "3",
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "San Francisco, CA",
      period: "2020 - 2021",
      description: "Developed responsive websites and web applications. Worked closely with designers to implement pixel-perfect designs.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress"]
    }
  ],
  
  skills: [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 88, category: "frontend" },
    { name: "AngularJS", level: 75, category: "frontend" },
    { name: "Flutter", level: 70, category: "frontend" },
    
    // Backend
    { name: "Python", level: 85, category: "backend" },
    { name: "Java", level: 80, category: "backend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Flask", level: 75, category: "backend" },
    { name: "C/C++", level: 70, category: "backend" },
    
    // Database
    { name: "SQL", level: 85, category: "database" },
    { name: "MongoDB", level: 80, category: "database" },
    
    // DevOps & Cloud
    { name: "AWS", level: 75, category: "devops" },
    { name: "Google Cloud Platform", level: 70, category: "devops" },
    { name: "Git", level: 90, category: "devops" },
    
    // Data Science & ML
    { name: "Pandas", level: 80, category: "other" },
    { name: "R", level: 75, category: "other" },
    { name: "NLTK", level: 70, category: "other" },
  ],
  
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      featured: true
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/images/projects/task-manager.jpg",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://task-manager-demo.com",
      featured: true
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather and forecasts using multiple weather APIs with interactive charts and maps.",
      image: "/images/projects/weather.jpg",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-demo.com",
      featured: false
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and a dark theme.",
      image: "/images/projects/portfolio.jpg",
      technologies: ["React", "TypeScript", "CSS3", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://portfolio-demo.com",
      featured: false
    },
    {
      id: "5",
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, user authentication, and admin dashboard for content management.",
      image: "/images/projects/blog.jpg",
      technologies: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/yourusername/blog-platform",
      liveUrl: "https://blog-demo.com",
      featured: false
    },
    {
      id: "6",
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/images/projects/chat.jpg",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
      githubUrl: "https://github.com/yourusername/chat-app",
      liveUrl: "https://chat-demo.com",
      featured: false
    }
  ]
};
