import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kennedy Page",
  initials: "KP",
  url: "https://kennedypage.dev",
  location: "Greensboro, NC",
  locationLink: "https://www.google.com/maps/place/greensboro+nc",
  description:
    "Computer Science Graduate & AI Enthusiast. I love building solutions that solve real-world problems using AI and code.",
  summary:
    "Recent Computer Science graduate from UNC Greensboro (May 2025) with a passion for AI, machine learning, and data science. While my degree focused heavily on theory and mathematics, I developed strong self-learning abilities and problem-solving skills. I believe in learning what's needed to solve the problem at hand - whether that's mastering new technologies, researching cutting-edge AI techniques, or diving deep into data analysis. Starting my Master's in Computer Science in Fall 2025 and working on AI-powered projects. I'm driven by the potential of AI to solve both timely and timeless problems.",
  avatarUrl: "/memoji.PNG",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "AI/Machine Learning",
    "Data Science",
    "Problem Solving",
    "Self-Learning",
    "Research",
    "Supabase",
    "OpenAI API",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kpage6984@gmail.com",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kpage0910",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kennedy-page-b55844250/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kpage6984",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kpage6984@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Spartan Marketplace",
      href: "https://spartan-marketplace.onrender.com",
      badges: ["AI-Powered", "Full-Stack", "Capstone Project"],
      location: "UNC Greensboro",
      title: "Lead Developer & Designer",
      logoUrl: "/spartan-marketplace-icon.png",
      end: "May 2025",
      description:
        "Built an exclusive online marketplace for UNCG students featuring AI-powered search and listing creation using OpenAI's GPT-4 and Vision API. Integrated Reddit-style community board for campus discussions. Students can create listings by simply uploading photos - AI generates complete product descriptions automatically. Demonstrates practical application of AI in solving real campus problems.",
    },
    {
      company: "Bird Flu Tracker",
      href: "#",
      badges: ["AI/ML", "Data Science", "Public Health"],
      location: "Personal Project",
      title: "AI Researcher & Developer",
      logoUrl: "/bird-flu-icon.png",
      end: "Present",
      description:
        "Developing an AI-powered tracking system for monitoring bird flu cases by country and region. Currently in planning and development phase, focusing on data collection, analysis, and visualization. This project represents my commitment to using AI and data science to solve timely public health challenges and demonstrates my ability to tackle complex, real-world problems.",
    },
    {
      company: "Self-Directed AI Learning",
      href: "#",
      badges: ["Machine Learning", "Research", "Problem Solving"],
      location: "Independent Study",
      title: "AI & Data Science Student",
      logoUrl: "/ai-learning-icon.png",
      end: "Present",
      description:
        "Intensive self-directed learning in AI, machine learning, and data science through hands-on projects and research. Focused on practical problem-solving applications rather than theoretical knowledge alone. Developed expertise in OpenAI APIs, data analysis, and modern web technologies. Emphasizes learning what's needed to solve problems effectively rather than checking boxes on job requirements.",
    },
  ],
  education: [
    {
      school: "University of North Carolina at Greensboro",
      href: "https://uncg.edu",
      degree: "Master of Science in Computer Science",
      logoUrl: "/uncg-logo.png",
      start: "Fall 2025",
    },
    {
      school: "University of North Carolina at Greensboro",
      href: "https://uncg.edu",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/uncg-logo.png",
      end: "May 2025",
    },
  ],
  projects: [
    {
      title: "Spartan Marketplace",
      href: "https://spartan-marketplace.onrender.com",
      dates: "May 2024",
      active: true,
      description:
        "An exclusive online marketplace for UNC Greensboro students featuring AI-powered search and listing creation, plus a Reddit-style community board. Built as my capstone project, it demonstrates practical application of AI in solving real campus problems. Students can create listings by simply uploading photos - AI generates complete product descriptions automatically.",
      technologies: [
        "React",
        "Node.js",
        "Supabase",
        "OpenAI API",
        "GPT-4",
        "Vision API",
        "JavaScript",
        "AI/ML",
      ],
      links: [
        {
          type: "Website",
          href: "https://spartan-marketplace.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo Video",
          href: "https://www.youtube.com/watch?v=5FPOsDh9m3A",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/kaniisun/Capstone490",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/spartan-marketplace.png",
      video: "",
    },
    {
      title: "Bird Flu Tracker (In Development)",
      href: "#",
      dates: "Present",
      active: true,
      description:
        "AI-powered tracking system for monitoring bird flu cases by country and region. Currently in planning and development phase, focusing on data collection, analysis, and visualization. This project represents my commitment to using AI and data science to solve timely public health challenges.",
      technologies: [
        "Python",
        "AI/Machine Learning",
        "Data Science",
        "Data Visualization",
        "Public Health Data",
        "API Integration",
      ],
      links: [
        // Add links when available
      ],
      image: "",
      video: "",
    },
  ],
} as const;
