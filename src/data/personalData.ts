// DO NOT MODIFY ANYTHING FROM LINE 1 TO LINE 73 UNLESS YOU KNOW WHAT YOU ARE DOING
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  roleOverview: string;
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
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'course-topics';
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
  
  // Theme Configuration
  theme: {
    mode: 'dark' | 'light';
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
  };
  
  // About
  about: {
    introduction: string;
    story: string;
    education: string;
    interests: string[];
  };
  
  // Contact
  email: string;
  phone: string;
  socialLinks: SocialLink[];
  
  // Experience
  experiences: Experience[];
  
  // Skills
  skills: Skill[];
  
  // Projects
  projects: Project[];
}


// MODIFY BELOW THIS LINE WITH YOUR OWN DATA
export const personalData: PersonalData = {
  name: "John Doe",
  title: "Full Stack Developer",
  subtitle: "I enjoy building sites & apps. My focus is web development.",
  profileImage: "/images/profile.jpg", // path to your profile image
  
  theme: {
    mode: 'dark', //'dark' or 'light'
    colors: {
      primary: '#72efdd',
      secondary: '#48bfe3',
      tertiary: '#6930c3'
    },
    fonts: {
      primary: 'Inter',      // Primary font for body text
      secondary: 'JetBrains Mono'  // Secondary font for code/monospace
    }
  },
  
  about: {
    introduction: "Hello, I'm John. I'm a full-stack developer with experience in modern web technologies. I enjoy building sites & apps. My focus is web development.",
    story: "I have a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my clients' visions to life. I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",
    education: "I studied Computer Science and have been working in the field for several years, constantly learning and adapting to new technologies.",
    interests: ["Web Development", "UI/UX Design", "Open Source", "Reading", "Traveling"]
  },
  
  email: "john.doe@example.com",
  phone: "+1 (123) 456-7890",
  
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/johndoe",
      icon: "github"
    }
  ],
  
  experiences: [
    {
      id: "1",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Leading development of web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      roleOverview: "As a Senior Full Stack Developer, I lead the development of complex web applications that serve thousands of users daily. My role involves architecting scalable solutions, mentoring junior developers, and collaborating with cross-functional teams to deliver high-quality software. I've successfully implemented microservices architecture, improved application performance by 40%, and established coding standards that reduced bug reports by 60%. I also conduct code reviews, provide technical guidance, and contribute to the company's technical strategy and roadmap.",
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "New York, NY",
      period: "2021 - 2023",
      description: "Built and maintained web applications using modern JavaScript frameworks. Collaborated with design and product teams to deliver high-quality features.",
      roleOverview: "During my time at Innovation Labs, I was responsible for developing and maintaining multiple web applications that served diverse client needs. I worked extensively with React and Node.js to build scalable solutions, implemented CI/CD pipelines that reduced deployment time by 70%, and collaborated closely with UX designers to create intuitive user interfaces. I also contributed to the development of internal tools that improved team productivity and participated in agile development processes including sprint planning, daily standups, and retrospectives.",
      technologies: ["React", "JavaScript", "Python", "PostgreSQL", "Git"]
    },
    {
      id: "3",
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      location: "Los Angeles, CA",
      period: "2020 - 2021",
      description: "Developed responsive websites and web applications. Worked closely with designers to implement pixel-perfect designs.",
      roleOverview: "At Creative Digital Agency, I specialized in creating responsive and accessible web applications that delivered exceptional user experiences. I worked closely with designers to translate complex designs into functional code, ensuring pixel-perfect implementations across all devices. I developed custom WordPress themes, optimized website performance, and implemented modern CSS techniques including Grid and Flexbox. I also collaborated with the marketing team to implement SEO best practices and analytics tracking.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress"]
    }
  ],
  
  skills: [
    // Languages
    { name: "Python", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "SQL", category: "languages" },
    { name: "C/C++", category: "languages" },
    { name: "R", category: "languages" },
    { name: "HTML/CSS", category: "tools" },
    
    // Frameworks
    { name: "React", category: "frameworks" },
    { name: "TypeScript", category: "frameworks" },
    { name: "AngularJS", category: "frameworks" },
    { name: "Node.js", category: "frameworks" },
    { name: "Flask", category: "frameworks" },
    { name: "Flutter", category: "frameworks" },
    { name: "Pandas", category: "frameworks" },
    
    // Tools
    { name: "Pytorch", category: "tools" },
    { name: "MongoDB", category: "tools" },
    { name: "AWS", category: "tools" },
    { name: "Google Cloud Platform", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "NLTK", category: "tools" },
    
    // Course Topics
    { name: "Database Systems", category: "course-topics" },
    { name: "Distributed Systems", category: "course-topics" },
    { name: "Data Science", category: "course-topics" },
    { name: "Machine Learning", category: "course-topics" },
    { name: "Computer Networks", category: "course-topics" },
    { name: "Software Engineering", category: "course-topics" },
    { name: "Algorithms & Data Structures", category: "course-topics" },
    { name: "Operating Systems", category: "course-topics" },
  ],
  
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/images/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/images/projects/task-manager.jpg",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/johndoe/task-manager",
      liveUrl: "https://task-manager-demo.com",
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that displays current weather and forecasts using multiple weather APIs with interactive charts and maps.",
      image: "/images/projects/weather.jpg",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3", "Responsive Design"],
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      liveUrl: "https://weather-demo.com",
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and a dark theme.",
      image: "/images/projects/portfolio.jpg",
      technologies: ["React", "TypeScript", "CSS3", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/johndoe/portfolio",
      liveUrl: "https://portfolio-demo.com",
    },
    {
      id: "5",
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, user authentication, and admin dashboard for content management.",
      image: "/images/projects/blog.jpg",
      technologies: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/johndoe/blog-platform",
      liveUrl: "https://blog-demo.com",
    },
    {
      id: "6",
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      image: "/images/projects/chat.jpg",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
      githubUrl: "https://github.com/johndoe/chat-app",
      liveUrl: "https://chat-demo.com",
    }
  ]
};
