// Portfolio Data - Adrian Philip T. Onda
import meImage from '../assets/images/me.png';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import rForEveryonePDF from '../assets/pdf/R_for_Everyone.pdf';
import generativeAIPDF from '../assets/pdf/Generative_AI_PromptEngineering.pdf';

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Adrian Philip T. Onda",
    title: "Full Stack Developer",
    location: "Taguig City, Philippines",
    email: "adrianonda373@gmail.com",
    phone: "09491183070",
    bio: `I am a graduating 4th-year Bachelor of Science in Information Technology (BSIT) student and an aspiring Full Stack Developer with hands-on experience in building end-to-end solutions using JavaScript, Python, and PHP. I have worked on projects involving modern web applications, mobile app development, and search engine optimization (SEO), with a strong focus on creating efficient, user-centered, and scalable systems.

Recently, I have been expanding my expertise in Artificial Intelligence, particularly in integrating AI tools and techniques into modern applications. My work includes developing AI-powered solutions, building intelligent features, and leveraging generative AI to enhance development workflows and deliver innovative, real-world solutions.

In addition, I am currently strengthening my analytical skill set by learning Data Analytics fundamentals, including Excel, SQL, and data-driven problem solving, to complement my development background and support data-informed decision-making in software projects.`,
    avatar: meImage,
    resumeUrl: "#",
    available: true,
  },

  // Badges/Achievements
  badges: [
    { text: "🎓 BS Information Technology", color: "primary" },
    { text: "💻 MERN Stack Developer", color: "primary" },
    { text: "🚀 Open to Opportunities", color: "success" },
  ],

  // Experience
  experience: [
    {
      id: 1,
      role: "Chief Executive Vice President",
      company: "MTICS Organization - TUP Taguig",
      year: "2024-2025",
      current: true,
      description: "Coordinated events, workshops, and tech seminars. Led operational planning for 200+ student members.",
    },
    {
      id: 2,
      role: "Student Assistant - Accounting Office",
      company: "Technological University of the Philippines - Taguig",
      year: "2024",
      current: false,
      description: "Digitized physical records, reduced processing time by 40%. Improved file retrieval speed and data accuracy.",
    },
    {
      id: 3,
      role: "BS Information Technology",
      company: "Technological University of the Philippines - Taguig",
      year: "2022 - Present",
      current: false,
      description: "Currently pursuing Bachelor's degree in Information Technology.",
    },
  ],

  // Tech Stack
  techStack: {
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "React Native"],
    backend: ["Node.js", "Express.js", "Python", "Laravel", "PHP"],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    tools: ["Git", "VS Code", "Insomnia", "Unity", "Blender", "Excel", "Power BI", "Tableau"],
  },

  // Areas of Expertise
  expertise: [
    "Full-Stack Web Development",
    "Database Design",
    "UI/UX Awareness",
    "Data Analytics & Visualization",
    "Debugging & Performance Optimization",
    "REST API Architecture",
  ],

  // Projects
  projects: [
    {
      id: 1,
      name: "E-Commerce Web Applications",
      description: "Developed multiple e-commerce platforms using MERN and Laravel (PHP) with full-stack capabilities.",
      tech: ["MERN", "Laravel", "PHP"],
      url: "https://shoeshable-client.vercel.app",
    },
    {
      id: 2,
      name: "Augmented Reality Library",
      description: "Built an AR system for scanning books to display abstracts and library navigation using Unity and C#.",
      tech: ["Unity", "Blender", "C#"],
      url: "#",
    },
    {
      id: 3,
      name: "AISaanKa? - Commuting Guide System",
      description: "Designed route planning feature to calculate optimal routes for commuters in the Philippines.",
      tech: ["React Native", "PostgreSQL", "Node.js"],
      url: "#",
    },
    {
      id: 4,
      name: "Western Bicutan National High School Website",
      description: "A project that shows information about Western Bicutan National High School",
      tech: ["JavaScript", "CSS"],
      url: "https://onda-school-website-e7gnjk41s-ondababys-projects.vercel.app",
    },
  ],

  // Certifications
  certifications: [
    { id: 1, name: "R for Everyone", issuer: "Western Sydney University", pdfUrl: rForEveryonePDF },
    { id: 2, name: "Introduction to Generative AI and Prompt Engineering", issuer: "OpenLearning", pdfUrl: generativeAIPDF },
  ],

  // Testimonials/Recommendations
  recommendations: [
    {
      id: 1,
      text: "Adrian is a dedicated developer who consistently delivers quality work. His problem-solving skills and team collaboration abilities make him a valuable asset to any project.",
      author: "Professor",
      role: "TUP Taguig Faculty",
    },
  ],

  // Beyond Coding
  beyondCoding: {
    title: "Beyond Coding",
    content: `When not writing code, I focus on learning about emerging technologies, particularly in AI and web development. I'm passionate about problem-solving and team collaboration.

I believe in continuous learning and sharing knowledge with fellow developers. As a student leader at MTICS Organization, I've had the opportunity to coordinate tech seminars and workshops to help develop students' IT skills.`,
  },

  // Skills
  skills: ["Problem Solving", "Team Collaboration", "Leadership", "Communication"],

  // Languages
  languages: ["English", "Filipino"],

  // Memberships
  memberships: [
    { name: "MTICS Organization", url: "#" },
    { name: "TUP Taguig IT Community", url: "#" },
  ],

  // Social Links
  socials: [
    { platform: "GitHub", url: "https://github.com/ondababy", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/adrian-philip-onda-a2bb15374/", icon: "linkedin" },
    { platform: "Instagram", url: "https://www.instagram.com/drnphlp/", icon: "instagram" },
    { platform: "Email", url: "mailto:adrianonda373@gmail.com", icon: "mail" },
  ],

  // Gallery Images
  gallery: [
    { id: 1, url: image1, alt: "Gallery Image 1" },
    { id: 2, url: image2, alt: "Gallery Image 2" },
    { id: 3, url: image3, alt: "Gallery Image 3" },
    { id: 4, url: image4, alt: "Gallery Image 4" },
    { id: 5, url: image5, alt: "Gallery Image 5" },
  ],

  // Speaking
  speaking: {
    available: true,
    topics: ["Web Development", "MERN Stack", "Student Leadership", "Tech Career Tips"],
  },

  // Contact
  contact: {
    calendlyUrl: "mailto:adrianonda373@gmail.com",
    communityUrl: "#",
  },
};
