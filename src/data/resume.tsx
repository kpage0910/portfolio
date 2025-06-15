import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kennedy Page",
  initials: "KP",
  url: "https://kennedypage.dev",
  location: "Greensboro, NC",
  locationLink: "https://www.google.com/maps/place/greensboro+nc",
  description:
    "Business-minded technologist who transforms business challenges into practical solutions using AI, automation, and data analytics.",
  summary:
    "Results-driven problem solver with a Computer Science foundation who specializes in identifying business opportunities and implementing practical technology solutions. Pursuing a Master's in IT and Management with a focus on cybersecurity and business analytics. I excel at bridging the gap between business needs and technology capabilities, leveraging AI tools, automation platforms, and data analysis to drive measurable business outcomes. My approach prioritizes business value over technical complexity—I believe the best solutions are the ones that deliver results efficiently, whether through sophisticated AI integration or simple automation workflows.",
  avatarUrl: "/memoji.PNG",
  skills: [
    "Business Analytics",
    "AI Implementation",
    "Process Automation",
    "Data-Driven Decision Making",
    "Solution Architecture",
    "ROI Analysis",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Supabase",
    "OpenAI API",
    "Git",
    "Problem Solving",
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
      badges: ["Business Solution", "AI Integration", "User Research"],
      location: "UNC Greensboro",
      title: "Business Analyst and Backend Developer",
      logoUrl: "/spartan-marketplace-icon.png",
      end: "May 2025",
      description:
        "Identified critical user pain points in campus commerce through comprehensive user research, then designed and implemented an AI-powered marketplace solution that reduced listing creation time by 80% and improved user engagement by 65%. Led the business case development and solution architecture, then contributed to technical implementation by integrating OpenAI's API for automated product descriptions and building a scalable backend using Supabase. Delivered measurable business impact through strategic technology application, demonstrating how efficient tool selection can solve real business problems while maintaining development efficiency.",
    },
  ],
  education: [
    {
      school: "University of North Carolina at Greensboro",
      href: "https://uncg.edu",
      degree:
        "Master of Science in IT and Management (Focus: Cybersecurity & Business Analytics)",
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
      dates: "May 2025",
      active: true,
      description:
        "Identified critical user pain points in campus commerce through research with 150+ students, then designed and implemented an AI-powered marketplace solution that reduced listing creation time by 80% and improved user engagement by 65%. Led the business case development and solution architecture, then contributed to technical implementation by integrating OpenAI's GPT and Vision APIs for automated product descriptions and building a scalable backend infrastructure using Supabase for real-time data management. The solution delivered measurable improvements in transaction completion rates and user retention while demonstrating how strategic AI implementation can solve real business problems efficiently.",
      technologies: [
        "Business Analysis",
        "User Research",
        "AI Strategy",
        "OpenAI Integration",
        "ROI Tracking",
        "React",
        "Supabase",
        "Process Optimization",
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
  ],
} as const;
